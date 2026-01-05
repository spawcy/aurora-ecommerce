"use client";

import DynamicPagination from "@/components/common/dynamic-pagination";
import ProductLists from "./product-lists";
import SearchInput from "@/components/common/search-input";
import { useEffect, useMemo, useState } from "react";
import { useFetching } from "@/hooks/use-fetching";
import { ProductCardLoading, ProductsNotFound } from "./product-card";
import { ProductPlaceholderItem } from "@/const/interfaces/product-placeholder-item-interface";
import { usePagination } from "@/hooks/use-pagination";
import { useSearchParams } from "next/navigation";

export default function ProductGridContainer() {
  const [search, setSearch] = useState<string>("");

  const searchParams = useSearchParams();
  const { data: products, isLoading, error } = useFetching(`/api/products`);

  const apiData = products?.data;
  const normalizedData: ProductPlaceholderItem[] = Array.isArray(apiData) ? apiData : apiData ? [apiData] : [];

  const filters = useMemo(() => {
    const obj: Record<string, string[]> = {};
    searchParams.forEach((value, key) => {
      if (value) obj[key] = value.split(",");
    });
    return obj;
  }, [searchParams]);

  const filteredData = useMemo(() => {
    let data = normalizedData;

    if (search) {
      data = data.filter((p) => p.product_title.toLowerCase().includes(search.toLowerCase()));
    }

    Object.entries(filters).forEach(([key, values]) => {
      data = data.filter((product: any) => {
        const field = product[key];
        if (!field) return false;
        if (Array.isArray(field)) {
          return values.some((v) => field.includes(v));
        }
        return values.includes(String(field));
      });
    });

    return data;
  }, [normalizedData, search, filters]);

  const { page, totalPages, currentData, next, prev, goTo } = usePagination(filteredData, 6);
  useEffect(() => {
    goTo(1);
  }, [search, filters, goTo]);

  const isDataNotFound = !isLoading && !error && filteredData.length === 0;

  return (
    <section className="w-full px-4">
      <SearchInput search={search} setSearch={setSearch} />

      {isLoading && <ProductCardLoading className="sm:grid-cols-2 lg:grid-cols-3" count={6} />}

      {error && <ProductsNotFound />}
      {isDataNotFound && <ProductsNotFound />}

      {!isLoading && !error && filteredData.length > 0 && (
        <>
          <ProductLists data={{ data: currentData }} className="sm:grid-cols-2 lg:grid-cols-3" />
          <DynamicPagination page={page} totalPages={totalPages} goTo={goTo} next={next} prev={prev} />
        </>
      )}
    </section>
  );
}
