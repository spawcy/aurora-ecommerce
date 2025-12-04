"use client";

import { useFetching } from "@/hooks/use-fetching";
import { ProductCardLoading } from "../products/product-card";
import ProductLists from "../products/product-lists";

export default function NewArrivalProducts() {
  const { data: products, isLoading, error } = useFetching("/api/products");
  if (error) return <p>{error}</p>;

  return (
    <section className="my-10 max-w-7xl mx-auto px-4">
      <h2 className="text-2xl">New Product Arrival</h2>
      {isLoading && <ProductCardLoading count={4} className="md:grid-cols-3 lg:grid-cols-4" />}
      <ProductLists data={products} className="md:grid-cols-3 lg:grid-cols-4" />
    </section>
  );
}
