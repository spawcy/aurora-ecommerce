import HeaderCard from "@/components/layouts/home/header-card";
import NewArrivalProducts from "@/components/layouts/home/new-arrival-products";
import FAQs from "@/components/text-reveal-faqs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background">
      <section id="header" className="bg-secondary py-20">
        <div className="max-w-7xl items-center grid md:grid-cols-[1.5fr_1fr] gap-10 mx-auto p-4">
          <div className="left">
            <h2 className="text-5xl md:text-7xl text-foreground leading-normal">Smart IoT Gateways</h2>
            <p className="mt-2.5 text-secondary-foreground">Bridging the Gap between Devices and the Cloud.</p>

            <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-xl">
              <HeaderCard />
            </div>
          </div>
          <figure className="w-[20rem] md:w-[35rem] md:ml-auto flex items-center justify-center mx-auto">
            <Image src="/header__thumbnail.png" alt="header_thumbnail_image" width={1080} height={1080} className="block max-w-full" />
          </figure>
        </div>
      </section>

      <NewArrivalProducts />
      <FAQs />
    </main>
  );
}
