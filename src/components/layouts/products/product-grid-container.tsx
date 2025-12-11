"use client";
import DynamicPagination from "@/components/common/dynamic-pagination";
import ProductLists from "./product-lists";
import SearchInput from "@/components/common/search-input";
import { useEffect, useState } from "react";
import { useFetching } from "@/hooks/use-fetching";
import { ProductCardLoading, ProductsNotFound } from "./product-card";
import { ProductPlaceholderItem } from "@/const/interfaces/product-placeholder-item";
import { usePagination } from "@/hooks/use-pagination";

export default function ProductGridContainer() {
  const [search, setSearch] = useState<string>("");
  const { data: products, isLoading, error } = useFetching(`/api/products`);
  const apiData = products?.data;
  const normalizedData: ProductPlaceholderItem[] = Array.isArray(apiData) ? apiData : apiData ? [apiData] : [];
  const productDataForList = search ? normalizedData.filter((p) => p.product_title.toLowerCase().includes(search.toLowerCase())) : normalizedData;
  const { page, totalPages, currentData, next, prev, goTo } = usePagination(productDataForList, 6);
  useEffect(() => {
    goTo(1);
  }, [search, productDataForList.length, goTo]);

  const isDataNotFound = !isLoading && !error && productDataForList.length === 0;

  return (
    <section className="w-full px-4">
      <SearchInput search={search} setSearch={setSearch} />
      {isLoading && <ProductCardLoading count={6} />}
      {error && <ProductsNotFound />}
      {isDataNotFound && <ProductsNotFound />}
      {!isLoading && !error && productDataForList.length > 0 && (
        <>
          <ProductLists data={{ data: currentData }} className="sm:grid-cols-2 lg:grid-cols-3" />
          <DynamicPagination page={page} totalPages={totalPages} goTo={goTo} next={next} prev={prev} />
        </>
      )}
    </section>
  );
}
