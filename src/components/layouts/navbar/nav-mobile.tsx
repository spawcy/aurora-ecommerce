import NavItem from "./nav-item";

export default function NavMobile({ hamActive }: { hamActive: boolean }) {
  const menuTransitionClass = hamActive && "active";
  return (
    <ul
      className={`navHeight max-sm:flex sm:hidden bg-primary-foreground w-full rounded-md px-4 space-y-5 flex-col
          transition duration-300 ${menuTransitionClass}`}
    >
      <NavItem />
    </ul>
  );
}
