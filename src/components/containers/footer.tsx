"use client";
import { FOOTER_LINK_ITEMS } from "@/const/static/footer-data-items";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NO_NAV_FOOTER_PATH_ITEMS, VALID_EXACT_ROUTES } from "@/const/static/disable-nav-footer-path-items";

export default function Footer() {
  const currentPath = usePathname();
  const isValidRoute = () => {
    if (VALID_EXACT_ROUTES.includes(currentPath)) return true;
    const validDynamicPatterns = [/^\/products\/[a-z0-9]+$/i];
    return validDynamicPatterns.some((pattern) => pattern.test(currentPath));
  };
  const shouldHideNavbarFooter = NO_NAV_FOOTER_PATH_ITEMS.includes(currentPath) || !isValidRoute();
  if (shouldHideNavbarFooter) return null;

  return (
    <footer className="py-10 bg-accent">
      <div className="max-w-7xl mx-auto grid px-4 sm:grid-cols-2 gap-20">
        <div className="gap-3">
          <Image src="/aurora__logo.png" alt="logo__aurora--light" width={125} height={20} className="block max-w-full cursor-pointer" />
          <p className="text-3xl text-primary my-4">admin.aurora@gmail.com</p>
          <p className="text-secondary-foreground">Professional industrial IoT equipment and sensors for automation.</p>
        </div>
        <ul className="grid grid-cols-3 gap-6 max-w-xl ml-auto">
          {FOOTER_LINK_ITEMS.map((item, index) => (
            <Link href={`/${item}`} key={index} className="capitalize text-primary hover:underline hover:text-foreground/50">
              {item}
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
}
