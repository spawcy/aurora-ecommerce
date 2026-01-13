import { InteractiveCheckoutDemo } from "@/components/containers/checkout-demo-page";
// import WishListAction from "@/components/layouts/wishlist/wishlist-action";
// import WishlistCard from "@/components/layouts/wishlist/wishlist-card";

export default function WishlistsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10 sm:mt-40  items-start gap-20 pb-10">
      <InteractiveCheckoutDemo />
    </section>
    // <section className="max-w-7xl mx-auto px-4 mt-10 sm:mt-40 grid md:grid-cols-[1fr_2fr] items-start gap-20 pb-10">
    //   <div className="bg-accent p-4 rounded-md">
    //     <b className="text-foreground">Welcome</b>
    //     <p className="text-secondary-foreground mt-1.5">This is your wishlist. A collection of your most preffered items in our store. Heart away all your favorite products.</p>
    //   </div>
    //   <div>
    //     <h2 className="text-3xl">Your Favorite Items</h2>
    //     <p className="mt-1.5">There are 30 products in the list</p>

    //     <div className="mt-10 grid lg:grid-cols-2 gap-4 border border-lg p-4 rounded-lg">
    //       {Array.from({ length: 3 }, (_, i) => (
    //         <WishlistCard key={i} />
    //       ))}
    //     </div>
    //     <WishListAction />
    //   </div>
    // </section>
  );
}
