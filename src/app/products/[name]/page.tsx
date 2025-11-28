import ProductActions from "@/components/layouts/product-detail/product-actions";
import ShopDetailTabs from "@/components/layouts/product-detail/product-detail-tabs";
import ProductCard from "@/components/layouts/products/product-card";
import Image from "next/image";
import DynamicBreadcrumb from "@/components/common/DynamicBreadcrumb";

export default async function ShopDetailPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return (
    <div className="mt-4 sm:mt-19 pb-10">
      <section className="max-w-7xl mx-auto p-4">
        <DynamicBreadcrumb />
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-10 mt-10">
          <ProductGallery />
          <ProductDescription />
        </div>
      </section>

      <section className="bg-accent py-10 mt-10 px-4">
        <div className="max-w-4xl mx-auto">
          <ShopDetailTabs />
        </div>
      </section>

      <section className="my-10 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl">Recommended Product</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          <ProductCard qty={4} />
        </div>
      </section>
    </div>
  );
}

function ProductGallery() {
  return (
    <div className="grid gap-4 max-h-fit">
      <div className="flex items-center justify-center rounded-md bg-accent mr-auto py-14 border border-border w-full">
        <figure className="block w-72">
          <Image
            src="/product__placeholder.png"
            alt="product__placeholder"
            width={700}
            height={700}
            className="block max-w-full"
          />
        </figure>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="w-full border border-border bg-accent rounded-md p-2">
          <figure className="flex items-center justify-center mx-auto py-4">
            <Image
              src="/product__placeholder.png"
              alt="product__placeholder"
              width={150}
              height={150}
              className="block max-w-full"
            />
          </figure>
        </div>
        <div className="w-full border border-border bg-accent rounded-md p-2">
          <figure className="flex items-center justify-center mx-auto py-4">
            <Image
              src="/product__placeholder.png"
              alt="product__placeholder"
              width={150}
              height={150}
              className="block max-w-full"
            />
          </figure>
        </div>
        <div className="w-full border border-border bg-accent rounded-md p-2">
          <figure className="flex items-center justify-center mx-auto py-4">
            <Image
              src="/product__placeholder.png"
              alt="product__placeholder"
              width={150}
              height={150}
              className="block max-w-full"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

function ProductDescription() {
  return (
    <div>
      {/* <p className="text-secondary-foreground">120 Whistlist</p> */}
      <h2 className="text-3xl sm:text-5xl font-semibold text-foreground mt-4">
        Photomicro Sensors
      </h2>
      <p className="text-secondary-foreground mt-4 leading-relaxed">
        DSGW-210-A-22 Zigbee WiFi hub is developed based on wireless EFR32MG21
        Zigbee SoC. It can be used as a cloud-free local Zigbee hub,
        incorporating higher reliability without reliance on the stability of
        the Internet connection, higher security with data processed locally and
        avoid unauthorized outside attackers, as well as low latency by
        eliminating the need to go through an Internet server.
      </p>

      <ProductActions />
      <ProductCategory />
    </div>
  );
}

function ProductCategory() {
  return (
    <div className="mt-8">
      <b className="text-foreground">Categories</b>
      <p className="text-secondary-foreground">Sensors</p>
    </div>
  );
}
