import { PRODUCTS_PLACEHOLDER } from "@/const/static/product-placeholder";
import { NextResponse } from "next/server";

export async function GET() {
  const data_from_db = PRODUCTS_PLACEHOLDER;
  return NextResponse.json({ status: 200, data: data_from_db });
}
