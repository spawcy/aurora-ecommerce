import NavItem from "./nav-item";
export default function NavRenderMobile() {
  return (
    <nav className="max-sm:hidden sm:flex max-w-sm gap-6 gap-mx-auto flex items-center justify-between">
      <NavItem />
    </nav>
  );
}
