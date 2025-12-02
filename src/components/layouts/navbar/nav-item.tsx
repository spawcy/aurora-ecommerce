import { NAV_ITEMS } from "@/data/static/nav-items";
import Link from "next/link";
export default function NavItem() {
  return (
    <>
      {NAV_ITEMS.map(({ name, href }, index) => (
        <Link href={href} key={index} className="hover:text-primary/50">
          {name}
        </Link>
      ))}
    </>
  );
}
