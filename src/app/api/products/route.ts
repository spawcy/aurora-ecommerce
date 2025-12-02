import { ProductPlaceholderItem } from "@/app/const/interfaces/product-placeholder-item";
import { NextResponse } from "next/server";

export async function GET() {
  const PRODUCTS_PLACEHOLDER: ProductPlaceholderItem[] = [
    {
      product_id: "tebajda",
      product_title: "Premium Chalk Reel",
      product_image: "/product__placeholder.png",
      product_available: true,
      product_description:
        "DSGW-210-A-22 Zigbee WiFi hub is developed based on wireless EFR32MG21 Zigbee SoC. It can be used as a cloud-free local Zigbee hub, incorporating higher reliability without reliance on the stability of the Internet connection, higher security with data processed locally and avoid unauthorized outside attackers, as well as low latency by eliminating the need to go through an Internet server.",
      product_categories: ["sensors"],
    },
  ];
  return NextResponse.json({ status: 200, data: PRODUCTS_PLACEHOLDER });
}
