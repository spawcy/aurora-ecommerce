"use client";
import { useState } from "react";
import { useLayoutVisibility } from "@/hooks/use-layout-visibility";
import NavMobile from "../layouts/navbar/nav-mobile";
import NavDesktop from "../layouts/navbar/nav-desktop";

export default function Navbar() {
  const [hamActive, setHamActive] = useState<boolean>(false);
  const shouldHideLayout: boolean = useLayoutVisibility();

  return (
    <>
      {!shouldHideLayout && (
        <header className="fixed max-sm:bottom-0 sm:top-0 left-0 right-0 py-6 px-4 max-sm:border-t sm:border-b border-border bg-primary-foreground z-10">
        <NavMobile hamActive={hamActive} />
        <NavDesktop hamActive={hamActive} setHamActive={setHamActive} />
        </header>
      )}
    </>
  );
}
