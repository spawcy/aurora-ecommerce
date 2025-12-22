import { HeartIcon } from "lucide-react";
import NavHamburger from "./nav-hamburger";
import NavRenderMobile from "./nav-render-mobile";
import { useRouter } from "next/navigation";
export default function NavMobileRight({ hamActive, setHamActive }: { hamActive: boolean; setHamActive: React.Dispatch<React.SetStateAction<boolean>> }) {
  const router = useRouter();
  return (
    <div className="right flex max-sm:gap-4 sm:gap-6 items-center">
      <NavRenderMobile />
      <NavHamburger hamActive={hamActive} setHamActive={setHamActive} />
      <HeartIcon onClick={() => router.push("/wishlist")} className="block max-w-full size-8 sm:size-6 cursor-pointer hover:text-primary/60" />
    </div>
  );
}
