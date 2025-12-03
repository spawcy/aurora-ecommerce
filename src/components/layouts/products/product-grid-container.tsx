"use client";
import DynamicPagination from "@/components/common/dynamic-pagination";
import ProductLists from "./product-lists";
import SearchInput from "@/components/common/search-input";
import { useState } from "react";
import { useFetching } from "@/hooks/use-fetching";
import { ProductCardLoading, ProductsNotFound } from "./product-card";

export default function ProductGridContainer() {
  const [search, setSearch] = useState("");
  const { data: products, isLoading, error } = useFetching(`/api/products`);
  const filteredProducts = products?.data ? products.data.filter((product: { product_title: string }) => product.product_title.toLowerCase().includes(search.toLowerCase())) : [];

  return (
    <section className="w-full px-4">
      <SearchInput search={search} setSearch={setSearch} />
      {isLoading && <ProductCardLoading />}
      {error && <ProductsNotFound />}
      <ProductLists className="sm:grid-cols-2 lg:grid-cols-3" />
      <DynamicPagination />
    </section>
  );
}
