import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden border-b border-brand-orange/20 bg-brand-black">
      {/* Grid overlay */}
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

      {/* Corner brackets */}
      <div className="corner-bracket corner-bracket-tl pointer-events-none absolute top-8 left-8" />
      <div className="corner-bracket corner-bracket-tr pointer-events-none absolute top-8 right-8" />
      <div className="corner-bracket corner-bracket-bl pointer-events-none absolute bottom-24 left-8" />
      <div className="corner-bracket corner-bracket-br pointer-events-none absolute bottom-24 right-8" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-between px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        {/* Status bars row */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="status-bar">[ACTIVE DRONE TESTING]</span>
          <span className="status-bar">AUTONOMOUS</span>
          <span className="status-bar">DEFENSE</span>
          <span className="font-mono text-brand-orange/80">››››</span>
        </div>

        {/* Main headline */}
        <div className="flex-1 flex flex-col justify-center py-12">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-brand-orange">
            Drone Swarms Deployed
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-tight text-brand-tan sm:text-6xl md:text-7xl lg:text-8xl">
            Nexus
            <br />
            <span className="text-brand-orange">Swarm</span>
          </h1>
          <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-brand-tan/80">
            Lightweight, AI-controlled drone swarms. Adaptive grid defense. No human input required.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-orange px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-brand-black transition hover:bg-brand-orange/90"
            >
              Get in touch
            </Link>
            <Link
              href="#vision"
              className="inline-flex items-center gap-2 border border-brand-orange/50 px-6 py-3 font-mono text-sm uppercase tracking-widest text-brand-orange transition hover:bg-brand-orange/10"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Bottom label strip */}
        <div className="flex flex-wrap items-center gap-4 border-t border-brand-orange/20 pt-6">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-tan/60">
            Formation: Adaptive Grid
          </span>
          <span className="text-brand-orange/50">|</span>
          <span className="font-mono text-xs uppercase tracking-widest text-brand-tan/60">
            Field Tested
          </span>
          <span className="text-brand-orange/50">|</span>
          <span className="font-mono text-xs uppercase tracking-widest text-brand-tan/60">
            Eyes in the sky
          </span>
        </div>
      </div>
    </section>
  );
}
