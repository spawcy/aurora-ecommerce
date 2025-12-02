"use client";
import ProductCard from "./product-card";

export default function ProductLists() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <ProductCard />
    </div>
  );
}
