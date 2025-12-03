"use client";
import { useFetching } from "@/hooks/use-fetching";
import ProductCard from "./product-card";

export default function ProductLists({ className }: { className?: string }) {
  const { data: products, isLoading, error } = useFetching("/api/products");

  if (!products) return <p>There is no data found</p>;
  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={`grid gap-4 mt-8 ${className}`}>
      {products.data.map((product, index) => (
        <ProductCard key={index} title={product.product_title} />
      ))}
    </div>
  );
}
