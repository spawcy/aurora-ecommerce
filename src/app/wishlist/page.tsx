import Image from "next/image";

export default function WishlistsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-40 grid grid-cols-[1fr_2fr] items-start gap-20">
      <div className="bg-accent p-4 rounded-md">
        <b className="text-foreground">Welcome</b>
        <p className="text-secondary-foreground mt-1.5">
          This is your wishlist. A collection of your most preffered items in
          our store. Heart away all your favorite products.
        </p>
      </div>
      <div>
        <h2 className="text-3xl">Your Favorite Items</h2>
        <p className="mt-1.5">There are 30 products in the list</p>

        <div className="mt-10 space-y-4">
          {Array.from({ length: 3 }, (_, i) => (
            <WishlistCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WishlistCard() {
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
