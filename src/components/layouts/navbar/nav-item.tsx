import { NAV_ITEMS } from "@/const/static/nav-items";
import Link from "next/link";
export default function NavItem() {
  return (
    <>
      {NAV_ITEMS.map(({ name, href }, index) => (
        <Link href={href} key={index} className="text-primary hover:text-primary/50 2xl:text-lg font-medium">
          {name}
        </Link>
      ))}
    </>
  );
}
