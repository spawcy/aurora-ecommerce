"use client";
import { Button } from "@/components/ui/button";
import ProductLoveAction from "./product-love-action";
import { toast } from "sonner";

export default function ProductActions() {
  return (
    <div className="w-full my-6 py-6 border-t border-b border-border grid grid-cols-[5.20fr_.9fr] place-items-center gap-4">
      <Button
        className="w-full py-7"
        onClick={() => {
          toast.promise(
            new Promise((resolve) => {
              setTimeout(() => {
                window.location.href = "mailto:admin@example.com?subject=Request Pembelian Produk IoT&body=Halo Admin, Saya ingin melakukan pembelian produk IoT.%0AMohon informasi lebih lanjut terkait ketersediaan dan harga. Terima kasih.";
                resolve(true);
              }, 300);
            }),
            {
              loading: "Opening email…",
              success: "Email app opened!",
              error: "Failed to open email.",
            }
          );
        }}
      >
        Get a quote
      </Button>
      <ProductLoveAction />
    </div>
  );
}
