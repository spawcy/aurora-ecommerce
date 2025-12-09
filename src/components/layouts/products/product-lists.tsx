"use client";
import { ProductPlaceholderItem } from "@/const/interfaces/product-placeholder-item";
import ProductCard from "./product-card";
import { FrownIcon } from "lucide-react";

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

export function ProductNotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 sm:p-0">
      <div className="text-center max-w-md 2xl:max-w-2xl mx-auto">
        <figure className="block">
          <FrownIcon className="block size-14 2xl:size-24 mx-auto text-muted-foreground" />
        </figure>
        <p className="mt-6 text-2xl 2xl:text-6xl font-medium">Product Not Found</p>
        <p className="text-muted-foreground mt-1 2xl:text-xl 2xl:mt-3.5  leading-relaxed">The product you are looking for might have been moved, sold out, or the link you followed is incorrect.</p>
      </div>
    </div>
  );
}
