import ProductCard from "@/components/layouts/products/product-card";
import Image from "next/image";

const HEADER_CARD_ITEMS = [
  {
    title: "100+",
    text: "Proven Automation Solutions",
  },
  // {
  //   title: "HIGH MTBF",
  //   text: "Reliability Certified for 24/7 Operations",
  // },
  {
    title: "TRUSTED BY",
    text: "Major Automotive Manufacturers",
  },
];

export default function Home() {
  return (
    <main className="bg-background">
      <section id="header" className="bg-secondary py-20">
        <div className="max-w-7xl items-center grid md:grid-cols-[1.5fr_1fr] gap-10 mx-auto p-4">
          <div className="left">
            <h2 className="text-5xl md:text-7xl text-foreground leading-normal md:leading-relaxed">
              Smart IoT Gateways
            </h2>
            <p className="mt-2.5 text-secondary-foreground">
              Bridging the Gap between Devices and the Cloud.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-xl">
              <HeaderCard />
            </div>
          </div>
          <figure className="w-[20rem] md:w-[35rem] md:ml-auto flex items-center justify-center mx-auto">
            <Image
              src="/header__thumbnail.png"
              alt="header_thumbnail_image"
              width={1080}
              height={1080}
              className="block max-w-full"
            />
          </figure>
        </div>
      </section>

      <section className="my-10 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl">New Product Arrival</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          <ProductCard qty={10} />
        </div>
      </section>
    </main>
  );
}

function HeaderCard() {
  return (
    <>
      {HEADER_CARD_ITEMS.map(({ title, text }, index) => (
        <div key={index}>
          <b className="text-xl md:text-2xl font-bold">{title}</b>
          <p className="mt-1.5">{text}</p>
        </div>
      ))}
    </>
  );
}
