"use client";

import ShopDetailTabs from "@/components/layouts/product-detail/product-detail-tabs";
import { useFetching } from "@/hooks/use-fetching";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import ProductInformations from "@/components/layouts/product-detail/product-informations";
import { use } from "react";
import ShopDetailLoadingPage from "@/components/layouts/product-detail/loading";
import ProductLists, { ProductNotFound } from "@/components/layouts/products/product-lists";
import { shuffleArray } from "@/hooks/use-shuffle-array";
import { ProductPlaceholderItem } from "@/const/interfaces/product-placeholder-item";

export default function ShopDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: products } = useFetching("/api/products");
  const { data, isLoading } = useFetching("/api/product?product_id=" + id);

  if (isLoading) return <ShopDetailLoadingPage />;
  const productPayload = data?.data;
  const isProductDataMissing = !productPayload || (Array.isArray(productPayload) && productPayload.length === 0);
  if (isProductDataMissing) return <ProductNotFound />;
  let productTitle: string = Array.isArray(productPayload) ? productPayload[0]?.product_title ?? "Multiple Products" : productPayload.product_title ?? "Product Detail";
  document.title = productTitle ?? "Product Detail";
  const allProducts: ProductPlaceholderItem[] = Array.isArray(products?.data) ? products.data : products?.data ? [products.data] : [];
  const randomizedProducts = shuffleArray(allProducts).slice(0, 4);

  const randomizedProductsPayload = {
    data: randomizedProducts,
  };

  return (
    <div className="mt-4 sm:mt-24 pb-10">
      <section className="max-w-7xl mx-auto p-4">
        <DynamicBreadcrumb data={["products", productTitle]} />
        <ProductInformations product={data?.data} />
      </section>

      <section className="bg-accent py-10 mt-10 px-4">
        <div className="max-w-4xl mx-auto">
          <ShopDetailTabs product={data?.data} />
        </div>
      </section>
      <section className="my-10 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl">Recommended Product</h2>
        <ProductLists count={4} data={randomizedProductsPayload} className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />
      </section>
    </div>
  );
}
