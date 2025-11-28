import Link from "next/link";

const FOOTER_LINK_ITEMS = ["products", "solutions", "services"];

export default function Footer() {
  return (
    <footer className="py-10 bg-accent">
      <div className="max-w-7xl mx-auto grid px-4 sm:grid-cols-2 gap-20">
        <div className="gap-3">
          <b className="text-xl texty-primary">AURORA</b>
          <p className="text-3xl text-primary my-4">+62-812-3049-4995</p>
          <p className="text-secondary-foreground">
            Professional industrial IoT equipment and sensors for automation.
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-6 max-w-xl ml-auto">
          {FOOTER_LINK_ITEMS.map((item, index) => (
            <Link href={`/${item}`} key={index}>
              {item}
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
}
