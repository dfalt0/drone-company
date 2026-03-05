"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#vision", label: "Vision" },
  { href: "#swarm", label: "Swarm Tech" },
  { href: "#defense", label: "Defense Grid" },
  { href: "#system", label: "System View" },
  { href: "#ai", label: "AI Control" },
  { href: "#future", label: "Future" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-orange/20 bg-brand-black/95 backdrop-blur supports-[backdrop-filter]:bg-brand-black/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono text-lg font-bold uppercase tracking-widest text-brand-orange">
            Nexus
          </span>
          <span className="font-mono text-lg font-bold uppercase tracking-widest text-brand-tan">
            Swarm
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
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

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-brand-orange transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-brand-orange transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-brand-orange transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-brand-orange/20 bg-brand-black px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-mono text-sm uppercase tracking-widest text-brand-tan hover:text-brand-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
