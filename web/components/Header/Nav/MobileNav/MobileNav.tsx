import "./style.css";
import { HamburgerMenuIcon, SearchIcon } from "@/components/Icons";

export default function MobileNav() {
  return (
    <div className="h-header__nav--mobile">
      <div className="h-header__nav--mobile-top">
        <button className="h-header__nav-item">
          <SearchIcon />
        </button>
        <button className="h-header__nav-item">
          <HamburgerMenuIcon />
        </button>
      </div>
    </div>
  );
}
