"use client";

import ShopDetailTabs from "@/components/layouts/product-detail/product-detail-tabs";
import { useFetching } from "@/hooks/use-fetching";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";
import ProductInformations from "@/components/layouts/product-detail/product-informations";
import { use } from "react";
import ShopDetailLoadingPage from "@/components/layouts/product-detail/loading";
import ProductLists from "@/components/layouts/products/product-lists";

export default function ShopDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: products } = useFetching("/api/products");
  const { data, isLoading } = useFetching("/api/product?product_id=" + id);

  if (isLoading) return <ShopDetailLoadingPage />;
  if (!data) return <p>Theres something wrong with the dev</p>;
  const productTitle = data?.data?.[0].product_title;

  return (
    <div className="mt-4 sm:mt-24 pb-10">
      <section className="max-w-7xl mx-auto p-4">
        <DynamicBreadcrumb data={["products", productTitle]} />
        <ProductInformations product={data?.data} />
      </section>

      <section className="bg-accent py-10 mt-10 px-4">
        <div className="max-w-4xl mx-auto">
          <ShopDetailTabs />
        </div>
      </section>

      <section className="my-10 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl">Recommended Product</h2>
        <ProductLists count={4} data={products} className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" />
      </section>
    </div>
  );
}
