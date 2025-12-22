import { redirect } from "next/navigation";
import Image from "next/image";
export default function NavLogo() {
  return (
    <figure onClick={() => redirect("/")} className="block h-full cursor-pointer">
      <Image src="/aurora__logo.png" alt="logo__aurora--light" width={125} height={20} className="block max-w-full cursor-pointer" />
    </figure>
  );
}
