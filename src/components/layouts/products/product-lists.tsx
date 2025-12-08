"use client";
import { ProductPlaceholderItem } from "@/const/interfaces/product-placeholder-item";
import ProductCard from "./product-card";

export default function ProductLists({ count, data, className }: { count?: number; data: any; className?: string }) {
  const rawData = data?.data || [];
  const slicedData = count ? rawData.slice(0, count) : rawData;
  return (
    <div className={`grid gap-4 mt-8 ${className}`}>
      {slicedData.map((product: ProductPlaceholderItem, index: number) => (
        <ProductCard key={index} title={product.product_title} image={product.product_image} href={product.product_id} />
      ))}
    </div>
  );
}
