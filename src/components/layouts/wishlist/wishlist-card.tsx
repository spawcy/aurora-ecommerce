import Image from "next/image";

export default function WishlistCard() {
  return (
    <div className="flex items-center border rounded-lg border-border gap-8 p-4">
      <figure className="rounded-md overflow-hidden border border-border">
        <Image
          src="/product__placeholder.png"
          alt="product__placeholder"
          width={70}
          height={70}
          className="block max-w-full"
        />
      </figure>
      <p>Bussiness Compact Saw</p>
      <p>20</p>
    </div>
  );
}
