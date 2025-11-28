"use client";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
export default function ProductBuyCounter() {
  const [qtyProduct, setQtyProduct] = useState<number>(3);

  const DecreaseQtyProduct = () =>
    setQtyProduct((prev) => Math.max(0, prev - 1));

  const IncreaseQtyProduct = () =>
    setQtyProduct((prev) => {
      if (prev === 9) {
        toast.success("U can only buy maximum 10 products!");
      }
      return Math.min(10, prev + 1);
    });

  return (
    <div
      className="inline-flex justify-center items-center bg-accent rounded-full"
      role="group"
      aria-labelledby="qtyProduct-control"
    >
      <span id="qtyProduct-control" className="sr-only">
        qtyProduct Control
      </span>
      <Button
        className="rounded-full cursor-pointer bg-transparent text-foreground hover:text-background"
        size="icon"
        aria-label="Decrease qtyProduct"
        onClick={DecreaseQtyProduct}
        disabled={qtyProduct === 0}
      >
        <MinusIcon size={16} aria-hidden="true" />
      </Button>
      <div
        className="flex items-center justify-center -translate-x-1 px-3 text-sm font-medium tabular-nums"
        aria-live="polite"
      >
        <span
          className="ms-2"
          aria-label={`Current qtyProduct is ${qtyProduct}`}
        >
          {qtyProduct}
        </span>
      </div>
      <Button
        className="rounded-full cursor-pointer bg-transparent text-foreground hover:text-background"
        size="icon"
        aria-label="Increase qtyProduct"
        onClick={IncreaseQtyProduct}
        disabled={qtyProduct === 100}
      >
        <PlusIcon size={16} aria-hidden="true" />
      </Button>
    </div>
  );
}
