"use client";
import { Button } from "@/components/ui/button";
import ProductLoveAction from "./product-love-action";
import { useProductMailto } from "@/hooks/use-product-mailto";

export default function ProductActions({ title }: { title: string }) {
  const { handlePurchaseRequest } = useProductMailto(title);

  return (
    <div className="w-full my-6 py-6 border-t border-b border-border grid grid-cols-[5.20fr_.9fr] place-items-center gap-4">
      <Button className="w-full py-7" onClick={handlePurchaseRequest}>
        Get a quote
      </Button>
      <ProductLoveAction />
    </div>
  );
}
