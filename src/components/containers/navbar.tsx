"use client";

import { NAV_ITEMS } from "@/data/static/nav-items";
import { HeartIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [hamActive, setHamActive] = useState<boolean>(false);
  const menuTransitionClass = hamActive && "active";

  return (
    <header className="fixed max-sm:bottom-0 sm:top-0 left-0 right-0 py-4 px-4 max-sm:border-t sm:border-b border-border bg-primary-foreground z-10">
      <ul
        className={`navHeight bg-primary-foreground w-full rounded-md px-4 space-y-5
      transition duration-300 ${menuTransitionClass}`}
      >
        <NavItems />
      </ul>

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-xl">Aurora</p>
        <div className="right flex max-sm:gap-4 sm:gap-6 items-center">
          <nav className="max-sm:hidden sm:flex max-w-sm gap-6 gap-mx-auto flex items-center justify-between">
            <NavItems />
          </nav>
          <figure className="max-sm:block sm:hidden size-14 cursor-pointer">
            <svg
              className={`ham hamRotate ham8 block max-w-full ${
                hamActive && "active"
              }`}
              viewBox="0 0 100 100"
              onClick={() => setHamActive((prev) => !prev)}
            >
              <path
                className="line top"
                d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
              />
              <path className="line middle" d="m 30,50 h 40" />
              <path
                className="line bottom"
                d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
              />
            </svg>
          </figure>
          <HeartIcon className="block max-w-full size-8 sm:size-6" />
        </div>
      </div>
    </header>
  );
}

function NavItems() {
  return (
    <>
      {NAV_ITEMS.map(({ name, href }, index) => (
        <Link href={href} key={index} className="block">
          {name}
        </Link>
      ))}
    </>
  );
}
