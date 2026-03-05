import Link from "next/link";

export const metadata = {
  title: "Voron Lux — Laser Defense Integration | Voron Dynamics",
  description:
    "Laser defense for high-value targets. Harder kill solution alongside drone interception.",
};

export default function VoronLuxPage() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden border-b border-brand-orange/20 bg-brand-black">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,88,55,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,88,55,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <span className="status-bar mb-6 inline-block">Laser defense</span>
          <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-brand-tan sm:text-5xl md:text-6xl">
            Voron <span className="text-brand-orange">Lux</span>
          </h1>
          <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-brand-tan/80">
            Laser defense integration. High-value targets needing a harder kill solution alongside drone interception.
          </p>
          <Link
            href="/#products"
            className="mt-10 inline-block border border-brand-orange/50 px-6 py-3 font-mono text-sm uppercase tracking-widest text-brand-orange transition hover:bg-brand-orange/10"
          >
            All products
          </Link>
        </div>
      </section>
      <section id="overview" className="border-b border-brand-orange/20 bg-[#141412] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-tan">
            Overview
          </h2>
          <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-brand-tan/80">
            Voron Lux adds directed-energy capability to the grid — for targets where interception alone isn&apos;t enough. Second-generation product line.
          </p>
        </div>
      </section>
    </>
  );
}
