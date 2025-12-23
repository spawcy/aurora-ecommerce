"use client";
import { ProductPlaceholderItem } from "@/const/interfaces/product-placeholder-item";
import ProductCard from "./product-card";
import NotFoundActions from "../not-found/not-found-actions";
import NotFoundTitles from "../not-found/not-found-titles";

export default function ProductLists({ count, data, className }: { count?: number; data: any; className?: string }) {
  const rawData = data?.data || [];
  const slicedData = count ? rawData.slice(0, count) : rawData;
  return (
    <div className={`grid gap-4 mt-8 ${className}`}>
      {slicedData.map((product: ProductPlaceholderItem, index: number) => (
        <ProductCard key={index} title={product.product_title} image={product.product_image[0]} href={product.product_id} />
      ))}
    </div>
  );
}

export function ProductNotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 sm:p-0">
      <NotFoundTitles title="Product Not Found" text="The product you are looking for might have been moved, sold out, or the link you followed is incorrect" />
      <NotFoundActions />
    </div>
  );
}
