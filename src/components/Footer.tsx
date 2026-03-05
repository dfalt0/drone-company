import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-brand-orange/20 bg-brand-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-brand-orange">
              Voron Dynamics
            </p>
            <p className="mt-1 font-mono text-xs text-brand-tan/60">
              Defense-first robotics · Autonomous swarm technology
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/"
              className="font-mono text-xs uppercase tracking-widest text-brand-tan/60 transition hover:text-brand-orange"
            >
              Home
            </Link>
            <Link
              href="/voron-swarm"
              className="font-mono text-xs uppercase tracking-widest text-brand-tan/60 transition hover:text-brand-orange"
            >
              Voron Swarm
            </Link>
            <Link
              href="/voron-shield"
              className="font-mono text-xs uppercase tracking-widest text-brand-tan/60 transition hover:text-brand-orange"
            >
              Voron Shield
            </Link>
            <Link
              href="/voron-terra"
              className="font-mono text-xs uppercase tracking-widest text-brand-tan/60 transition hover:text-brand-orange"
            >
              Voron Terra
            </Link>
            <Link
              href="/voron-lux"
              className="font-mono text-xs uppercase tracking-widest text-brand-tan/60 transition hover:text-brand-orange"
            >
              Voron Lux
            </Link>
            <Link
              href="/voron-ai"
              className="font-mono text-xs uppercase tracking-widest text-brand-tan/60 transition hover:text-brand-orange"
            >
              Voron AI
            </Link>
            <Link
              href="/voron-swarm#contact"
              className="font-mono text-xs uppercase tracking-widest text-brand-tan/60 transition hover:text-brand-orange"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-brand-orange/10 pt-8">
          <p className="font-mono text-xs text-brand-tan/40">© 2026 Voron Dynamics</p>
          <span className="font-mono text-xs text-brand-orange/60">[STATUS: ACTIVE]</span>
        </div>
      </div>
    </footer>
  );
}
