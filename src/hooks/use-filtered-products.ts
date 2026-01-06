"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useFetching } from "@/hooks/use-fetching";
import { usePagination } from "@/hooks/use-pagination";
import { ProductPlaceholderItem } from "@/const/interfaces/product-placeholder-item-interface";

export function useFilteredProducts(itemsPerPage = 6) {
  const [search, setSearch] = useState<string>("");

  const searchParams = useSearchParams();
  const { data: products, isLoading, error } = useFetching(`/api/products`);

  const apiData = products?.data;

  const normalizedData: ProductPlaceholderItem[] = Array.isArray(apiData) ? apiData : apiData ? [apiData] : [];

  /**
   * filtersByGroup contoh:
   * {
   *   communication: ["router", "hub"],
   *   sensor: ["sensor-suhu"]
   * }
   */
  const filtersByGroup = useMemo(() => {
    const obj: Record<string, string[]> = {};
    searchParams.forEach((value, key) => {
      if (!value) return;

      const values = value
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean);

      if (values.length > 0) obj[key] = values;
    });
    return obj;
  }, [searchParams]);

  const filteredData = useMemo(() => {
    let data = normalizedData;

    // Search by title
    if (search) {
      const q = search.toLowerCase();
      data = data.filter((p) => p.product_title.toLowerCase().includes(q));
    }

    //  Filter by categories AND logic
    const groups = Object.values(filtersByGroup);
    if (groups.length > 0) {
      data = data.filter((p) => {
        const categories = p.product_categories || [];
        return groups.every((groupValues) => groupValues.some((v) => categories.includes(v)));
      });
    }

    return data;
  }, [normalizedData, search, filtersByGroup]);

  const { page, totalPages, currentData, next, prev, goTo } = usePagination(filteredData, itemsPerPage);

  //  reset filtering when search or filters change
  useEffect(() => {
    goTo(1);
  }, [search, filtersByGroup, goTo]);

  const isDataNotFound = !isLoading && !error && filteredData.length === 0;

  return {
    search,
    setSearch,
    filteredData,
    currentData,
    page,
    totalPages,
    next,
    prev,
    goTo,
    isLoading,
    error,
    isDataNotFound,
  };
}
