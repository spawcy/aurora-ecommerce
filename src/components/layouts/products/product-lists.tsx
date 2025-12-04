"use client";
import { ProductPlaceholderItem } from "@/const/interfaces/product-placeholder-item";
import ProductCard from "./product-card";

export default function ProductLists({ data, className }: { data?: any; className?: string }) {
  return (
    <div className={`grid gap-4 mt-8 ${className}`}>
      {data?.data.map((product: ProductPlaceholderItem, index: number) => (
        <ProductCard key={index} title={product.product_title} />
      ))}
    </div>
  );
}
