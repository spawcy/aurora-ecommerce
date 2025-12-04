"use client";
import DynamicPagination from "@/components/common/dynamic-pagination";
import ProductLists from "./product-lists";
import SearchInput from "@/components/common/search-input";
import { useState } from "react";
import { useFetching } from "@/hooks/use-fetching";
import { ProductCardLoading, ProductsNotFound } from "./product-card";

export default function ProductGridContainer() {
  const [search, setSearch] = useState<string>("");
  const { data: products, isLoading, error } = useFetching(`/api/products`);

  const rawProducts = products?.data || [];

  const productDataForList = search ? rawProducts.filter((product) => product.product_title.toLowerCase().includes(search.toLowerCase())) : rawProducts;
  const productListData = { data: productDataForList };
  const isDataNotFound = !isLoading && !error && productDataForList.length === 0;

  return (
    <section className="w-full px-4">
      <SearchInput search={search} setSearch={setSearch} />
      {isLoading && <ProductCardLoading />}
      {error && <ProductsNotFound />}
      {isDataNotFound && <ProductsNotFound />}
      {!isLoading && !error && productDataForList.length > 0 && (
        <>
          <ProductLists data={productListData} className="sm:grid-cols-2 lg:grid-cols-3" />
          <DynamicPagination />
        </>
      )}
    </section>
  );
}
