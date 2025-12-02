import ProductActions from "@/components/layouts/product-detail/product-actions";
import Image from "next/image";

export default function ProductInformations() {
  return (
    <div className="grid md:grid-cols-2 gap-x-10 gap-y-10 mt-10">
      <ProductGallery />
      <ProductDescription />
    </div>
  );
}

export function ProductGallery() {
  return (
    <div className="grid gap-4 max-h-fit">
      <div className="flex items-center justify-center rounded-md bg-accent mr-auto py-14 border border-border w-full">
        <figure className="block w-72">
          <Image src="/product__placeholder.png" alt="product__placeholder" width={700} height={700} className="block max-w-full" />
        </figure>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="w-full border border-border bg-accent rounded-md p-2">
          <figure className="flex items-center justify-center mx-auto py-4">
            <Image src="/product__placeholder.png" alt="product__placeholder" width={150} height={150} className="block max-w-full" />
          </figure>
        </div>
        <div className="w-full border border-border bg-accent rounded-md p-2">
          <figure className="flex items-center justify-center mx-auto py-4">
            <Image src="/product__placeholder.png" alt="product__placeholder" width={150} height={150} className="block max-w-full" />
          </figure>
        </div>
        <div className="w-full border border-border bg-accent rounded-md p-2">
          <figure className="flex items-center justify-center mx-auto py-4">
            <Image src="/product__placeholder.png" alt="product__placeholder" width={150} height={150} className="block max-w-full" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export function ProductDescription() {
  return (
    <div>
      {/* <p className="text-secondary-foreground">120 Whistlist</p> */}
      <h2 className="text-3xl sm:text-5xl font-semibold text-foreground mt-4">Photomicro Sensors</h2>
      <p className="text-secondary-foreground mt-4 leading-relaxed">
        DSGW-210-A-22 Zigbee WiFi hub is developed based on wireless EFR32MG21 Zigbee SoC. It can be used as a cloud-free local Zigbee hub, incorporating higher reliability without reliance on the stability of the Internet connection,
        higher security with data processed locally and avoid unauthorized outside attackers, as well as low latency by eliminating the need to go through an Internet server.
      </p>

      <ProductActions />
      <ProductCategory />
    </div>
  );
}

export function ProductCategory() {
  return (
    <div className="mt-8">
      <b className="text-foreground">Categories</b>
      <p className="text-secondary-foreground">Sensors</p>
    </div>
  );
}
