"use client";

import { usePathname } from "next/navigation";
import { MainNav } from "./MainNav";
import { SubNav, type SubNavLink } from "./SubNav";

const VORON_SWARM_SECTIONS: SubNavLink[] = [
  { href: "#vision", label: "Vision" },
  { href: "#swarm", label: "Swarm Tech" },
  { href: "#swarm-demo", label: "Demo" },
  { href: "#defense", label: "Defense Grid" },
  { href: "#system", label: "System View" },
  { href: "#ai", label: "AI Control" },
  { href: "#future", label: "Future" },
  { href: "#contact", label: "Contact" },
];

function getSubNavForPath(pathname: string): { links: SubNavLink[]; basePath: string } | null {
  if (pathname === "/voron-swarm") return { links: VORON_SWARM_SECTIONS, basePath: "/voron-swarm" };
  if (pathname === "/voron-shield") return { links: [{ href: "#overview", label: "Overview" }], basePath: "/voron-shield" };
  if (pathname === "/voron-terra") return { links: [{ href: "#overview", label: "Overview" }], basePath: "/voron-terra" };
  if (pathname === "/voron-lux") return { links: [{ href: "#overview", label: "Overview" }], basePath: "/voron-lux" };
  return null;
}

export function Header() {
  const pathname = usePathname();
  const subNav = getSubNavForPath(pathname ?? "");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-orange/20 bg-brand-black/95 backdrop-blur supports-[backdrop-filter]:bg-brand-black/80">
      <MainNav />
      {subNav && <SubNav links={subNav.links} basePath={subNav.basePath} />}
    </header>
  );
}
