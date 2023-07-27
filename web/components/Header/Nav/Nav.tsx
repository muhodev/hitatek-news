import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Nav() {
  return (
    <nav className="h-full flex items-center">
      <DesktopNav />
      <MobileNav />
    </nav>
  );
}
