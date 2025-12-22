import NavLogo from "./nav-logo";
import NavMobileRight from "./mav-mobile-right";
export default function NavDesktop({ hamActive, setHamActive }: { hamActive: boolean; setHamActive: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
      <NavLogo />
      <NavMobileRight hamActive={hamActive} setHamActive={setHamActive} />
    </div>
  );
}
