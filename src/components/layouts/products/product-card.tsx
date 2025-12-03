import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title?: string;
}

export default function ProductCard({ title }: ProductCardProps) {
  return (
    <>
      <Link href="/products/product-test" className="flex flex-col items-center justify-center border border-border rounded-md p-4 transition duration-300 hover:border-chart-1 group overflow-hidden">
        <figure className="transition duration-300 group-hover:scale-85 group-hover:opacity-50 group-hover:-translate-y-2">
          <Image src="/product__placeholder.png" alt="product__placeholder" width={250} height={250} className="block max-w-full" />
        </figure>
        <div className="mt-6">
          <p className="text-xl text-secondary-foreground transition-transform duration-300 translate-y-0 group-hover:-translate-y-4">{title || "2019 New Release Premium Chalk Reel"}</p>
          {/* <Button className="w-full transition-transform duration-300 translate-y-24 group-hover:-translate-y-0 py-7">Get A Quote</Button> */}
        </div>
      </Link>
    </>
  );
}

export function ProductCardLoading() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-6">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="flex flex-col items-center justify-center  p-4 overflow-hidden">
          <div className="w-[250px] h-[250px] bg-slate-300 rounded-md animate-pulse" />

          <div className="mt-4 w-full">
            <div className="h-6 w-3/4 mx-auto bg-slate-300 rounded-md animate-pulse mb-4" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProductsNotFound() {
  return (
    <div className="min-h-[70svh] 2xl:min-h-[30rem]">
      <div className="py-20 text-center col-span-full">
        <h3 className="text-2xl font-medium">No products found</h3>
        <p className="mt-2 text-muted-foreground">Try adjusting your search or filter to find what you're looking for.</p>
      </div>
    </div>
  );
}
