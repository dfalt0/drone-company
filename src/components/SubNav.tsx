"use client";

import Link from "next/link";

export type SubNavLink = { href: string; label: string };

export function SubNav({ links, basePath }: { links: SubNavLink[]; basePath: string }) {
  return (
    <nav
      className="sticky top-[65px] z-40 w-full border-b border-brand-orange/30 bg-[#1a1a18] py-3 shadow-[0_2px_0_rgba(255,88,55,0.08)]"
      aria-label="Section navigation"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 sm:justify-start sm:px-6 lg:px-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href.startsWith("#") ? `${basePath}${link.href}` : link.href}
            className="font-mono text-xs uppercase tracking-widest text-brand-tan/70 transition hover:text-brand-orange"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
