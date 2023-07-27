import Link from "next/link";

import "./style.css";
import { ChevronDownIcon, SearchIcon } from "@/components/Icons";
import { NAV_ITEMS } from "@/constants/NAV_ITEMS";

export default function DesktopNav() {
  return (
    <div className="h-header__nav">
      {NAV_ITEMS.map((navItem) => {
        const hasSublinks =
          Array.isArray(navItem.children) && navItem.children.length > 0;
        return (
          <div key={navItem.id} className="h-header__nav-item">
            <Link href={navItem.link} className="h-header__nav-item--link">
              <span>{navItem.label}</span>
              {hasSublinks && <ChevronDownIcon width={18} height={18} />}
            </Link>
            {hasSublinks && (
              <div className="h-header__nav-item--sub">
                {navItem.children?.map((subNavItem) => {
                  return (
                    <div key={subNavItem.id}>
                      <Link
                        href={subNavItem.link}
                        className="h-header__nav-item--link text-main"
                      >
                        <span>{subNavItem.label}</span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
      <div className="h-header__nav-item">
        <button className="h-header__nav-item--search">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}
