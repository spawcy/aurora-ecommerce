import { useCallback } from "react";
import { toast } from "sonner";

export const useProductMailto = (title: string) => {
  const handlePurchaseRequest = useCallback(() => {
    const adminEmail = "admin@example.com";
    const subject = encodeURIComponent("Request Pembelian Produk IoT");
    const body = encodeURIComponent(`Halo Admin, Saya ingin melakukan pembelian produk ${title}.\nMohon informasi lebih lanjut terkait ketersediaan dan harga. Terima kasih.`);

    const mailtoUrl = `mailto:${adminEmail}?subject=${subject}&body=${body}`;

    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          window.location.href = mailtoUrl;
          resolve(true);
        }, 300);
      }),
      {
        loading: "Opening email...",
        success: "Email app opened!",
        error: "Failed to open email.",
      }
    );
  }, [title]);

  return { handlePurchaseRequest };
};
