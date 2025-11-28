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
        <div className="max-w-7xl items-center grid grid-cols-[1.5fr_1fr] gap-10 mx-auto">
          <div className="left">
            <h2 className="text-7xl text-foreground">Smart IoT Gateways</h2>
            <p className="mt-2.5 text-secondary-foreground">
              Bridging the Gap between Devices and the Cloud.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10 max-w-xl">
              <HeaderCard />
            </div>
          </div>
          <figure className="w-[35rem] ml-auto flex items-center justify-center">
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
    </main>
  );
}

function HeaderCard() {
  return (
    <>
      {HEADER_CARD_ITEMS.map(({ title, text }, index) => (
        <div key={index}>
          <b className="text-2xl font-bold">{title}</b>
          <p className="mt-1.5">{text}</p>
        </div>
      ))}
    </>
  );
}
