import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ qty = 9 }: { qty?: number }) {
  return (
    <>
      {Array.from({ length: qty }, (_, i) => (
        <Link
          href="/products/product-test"
          key={i}
          className="flex flex-col items-center justify-center border border-border rounded-md p-4 transition duration-300 hover:border-chart-1 group overflow-hidden"
        >
          <figure className="transition duration-300 group-hover:scale-85 group-hover:opacity-50 group-hover:-translate-y-2">
            <Image
              src="/product__placeholder.png"
              alt="product__placeholder"
              width={250}
              height={250}
              className="block max-w-full"
            />
          </figure>
          <div className="mt-4">
            <p className="text-xl text-secondary-foreground transition-transform duration-300 translate-y-8 group-hover:-translate-y-4">
              2019 New Release Premium Chalk Reel
            </p>
            <Button className="w-full transition-transform duration-300 translate-y-20 group-hover:-translate-y-0 py-7">
              Get A Quote
            </Button>
          </div>
        </Link>
      ))}
    </>
  );
}
