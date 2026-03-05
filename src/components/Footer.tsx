import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-brand-orange/20 bg-brand-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-brand-orange">
              Nexus Swarm
            </p>
            <p className="mt-1 font-mono text-xs text-brand-tan/60">
              Autonomous drone swarm defense · Field tested
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link
              href="#vision"
              className="font-mono text-xs uppercase tracking-widest text-brand-tan/60 transition hover:text-brand-orange"
            >
              Vision
            </Link>
            <Link
              href="#swarm"
              className="font-mono text-xs uppercase tracking-widest text-brand-tan/60 transition hover:text-brand-orange"
            >
              Swarm Tech
            </Link>
            <Link
              href="#defense"
              className="font-mono text-xs uppercase tracking-widest text-brand-tan/60 transition hover:text-brand-orange"
            >
              Defense Grid
            </Link>
            <Link
              href="#contact"
              className="font-mono text-xs uppercase tracking-widest text-brand-tan/60 transition hover:text-brand-orange"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-brand-orange/10 pt-8">
          <p className="font-mono text-xs text-brand-tan/40">© 2026 Nexus Swarm</p>
          <span className="font-mono text-xs text-brand-orange/60">[STATUS: ACTIVE]</span>
        </div>
      </div>
    </footer>
  );
}
