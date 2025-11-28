"use client";
import { Button } from "@/components/ui/button";
import ProductBuyCounter from "./product-buy-counter";
import ProductLoveAction from "./product-love-action";
import { toast } from "sonner";

export default function ProductActions() {
  return (
    <div className="w-full my-6 py-6 border-t border-b border-border grid grid-cols-[1fr_5.20fr_.9fr] place-items-center gap-4">
      <ProductBuyCounter />
      <Button
        className="w-full py-6"
        onClick={() => toast.info("this feat will implement later!")}
      >
        Get a quote
      </Button>
      <ProductLoveAction />
    </div>
  );
}
