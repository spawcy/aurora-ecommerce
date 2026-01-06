"use client";
import DynamicPagination from "@/components/common/dynamic-pagination";
import ProductLists from "./product-lists";
import SearchInput from "@/components/common/search-input";
import { ProductCardLoading, ProductsNotFound } from "./product-card";
import { useFilteredProducts } from "@/hooks/use-filtered-products";

export default function ProductGridContainer() {
  const { search, setSearch, currentData, page, totalPages, next, prev, goTo, isLoading, error, isDataNotFound } = useFilteredProducts(6);

  return (
    <section className="w-full px-4">
      <SearchInput search={search} setSearch={setSearch} />

      {isLoading && <ProductCardLoading className="sm:grid-cols-2 lg:grid-cols-3" count={6} />}

      {error && <ProductsNotFound />}
      {isDataNotFound && <ProductsNotFound />}

      {!isLoading && !error && currentData.length > 0 && (
        <>
          <ProductLists data={{ data: currentData }} className="sm:grid-cols-2 lg:grid-cols-3" />
          <DynamicPagination page={page} totalPages={totalPages} goTo={goTo} next={next} prev={prev} />
        </>
      )}
    </section>
  );
}
