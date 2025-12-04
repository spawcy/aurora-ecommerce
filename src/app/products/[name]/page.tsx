"use client";

import ShopDetailTabs from "@/components/layouts/product-detail/product-detail-tabs";
import { useFetching } from "@/hooks/use-fetching";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import ProductInformations from "@/components/layouts/product-detail/product-informations";
import { use } from "react";
import ShopDetailLoadingPage from "@/components/layouts/product-detail/loading";
import ProductLists from "@/components/layouts/products/product-lists";

export default function ShopDetailPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = use(params);
  const { data, isLoading } = useFetching("http://localhost:3000/api/product?product_id=cjx8f92k0001a0s3p9f1q1ab");
  console.log(data);

  if (isLoading) return <ShopDetailLoadingPage />;

  return (
    <div className="mt-4 sm:mt-19 pb-10">
      <section className="max-w-7xl mx-auto p-4">
        <DynamicBreadcrumb />
        <ProductInformations />
      </section>

      <section className="bg-accent py-10 mt-10 px-4">
        <div className="max-w-4xl mx-auto">
          <ShopDetailTabs />
        </div>
      </section>

      <section className="my-10 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl">Recommended Product</h2>
        <ProductLists className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />
      </section>
    </div>
  );
}
