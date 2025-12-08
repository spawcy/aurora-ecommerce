import { PRODUCTS_PLACEHOLDER } from "@/const/static/product-placeholder";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const data_from_db = PRODUCTS_PLACEHOLDER;
  const product_id = req.nextUrl.searchParams.get("product_id");

  const find_product_by_id = data_from_db.find((data) => {
    return data.product_id === product_id;
  });

  if (!product_id) {
    return NextResponse.json({ status: 404, data: null, message: "product not found" });
  }

  return NextResponse.json({ status: 200, data: find_product_by_id, id_param: product_id, message: "fetching success" });
}
