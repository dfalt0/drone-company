"use client";

import { useState } from "react";
import Link from "next/link";

const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/voron-swarm", label: "Voron Swarm" },
  { href: "/voron-shield", label: "Voron Shield" },
  { href: "/voron-terra", label: "Voron Terra" },
  { href: "/voron-lux", label: "Voron Lux" },
  { href: "/voron-ai", label: "Voron AI" },
];

export function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono text-lg font-bold uppercase tracking-widest text-brand-orange">
            Voron
          </span>
          <span className="font-mono text-lg font-bold uppercase tracking-widest text-brand-tan">
            Dynamics
          </span>
        </Link>

        <ul className="hidden flex-wrap items-center justify-end gap-x-4 gap-y-1 md:flex md:gap-x-5 lg:gap-x-6">
          {mainNavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-brand-tan/80 transition hover:text-brand-orange"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-brand-orange transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-brand-orange transition ${mobileOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-brand-orange transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-brand-orange/20 bg-brand-black px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {mainNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-mono text-sm uppercase tracking-widest text-brand-tan hover:text-brand-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
