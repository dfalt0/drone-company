import Link from "next/link";

export default function VoronDynamicsHome() {
  return (
    <>
      {/* Hero — centered title, parentheses, full-width gold lines */}
      <section className="relative min-h-[90vh] overflow-hidden border-b border-brand-orange/20 bg-[#1a1c18]">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(233, 230, 212, 0.08) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(245, 210, 0, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(245, 210, 0, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Top-left: status block */}
        <div className="absolute left-6 top-24 z-10 border border-brand-yellow-gold/50 bg-brand-black/80 px-4 py-3 backdrop-blur-sm sm:left-8 lg:left-12">
          <p className="font-mono text-xs uppercase tracking-widest text-brand-yellow-gold/90">
            SWARM DEFENSE <span className="text-brand-tan/70">›››</span>
          </p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-brand-yellow-gold/70">
            STATUS: ACTIVE / STABLE
          </p>
        </div>

        {/* Top-right: barcode-style ID — clean spacing from corner */}
        <div
          className="absolute right-5 top-5 z-10 font-mono text-5xl font-bold tracking-[0.5em] text-brand-tan/35 sm:right-6 sm:top-6 sm:text-6xl lg:text-7xl select-none"
          aria-hidden={true}
        >
          VD-1
        </div>

        {/* Center: graph-paper style — Voron on line 1, Dynamics on line 2 */}
        <div className="relative min-h-[90vh] px-4 pt-20 pb-24 sm:px-6 lg:px-8">
          {/* Title block: absolutely centered in hero */}
          <div className="absolute left-1/2 top-1/2 w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 px-4">
            <div className="hero-line-full-bleed w-full">
              <h1 className="flex w-full flex-col items-center text-center" style={{ fontSize: "min(16.9vw, 9.1rem)" }}>
                {/* Voron — line full viewport width (yellow line commented out temporarily) */}
                <div className="w-full text-center leading-[1]">
                  <span className="font-display font-bold uppercase tracking-tight text-brand-tan block">
                    Voron
                  </span>
                  {/* <div className="hero-yellow-line h-[2px] bg-brand-yellow-gold/35 -mt-[0.15em]" aria-hidden /> */}
                </div>

                {/* Dynamics — line full viewport width (yellow line commented out temporarily) */}
                <div className="w-full text-center leading-[1]">
                  <span className="font-display font-bold uppercase tracking-tight text-brand-orange block">
                    Dynamics
                  </span>
                  {/* <div className="hero-yellow-line h-[2px] bg-brand-yellow-gold/35 -mt-[0.15em]" aria-hidden /> */}
                </div>
              </h1>
            </div>
          </div>

          {/* Tagline and CTAs below title */}
          <div className="absolute left-1/2 top-[calc(50%+8rem)] w-full max-w-xl -translate-x-1/2 flex flex-col items-center text-center px-4">
            <p className="font-mono text-sm leading-relaxed text-brand-tan/70">
              Defense-first robotics built around autonomous swarm technology. Early stage.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/voron-swarm"
                className="inline-flex items-center gap-2 bg-brand-orange px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-brand-black transition hover:bg-brand-orange/90"
              >
                Voron Swarm
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center gap-2 border border-brand-yellow-gold/50 px-6 py-3 font-mono text-sm uppercase tracking-widest text-brand-yellow-gold/80 transition hover:bg-brand-yellow-gold/10"
              >
                All products
              </Link>
            </div>
          </div>
        </div>

        {/* Mid-right: technical block */}
        <div className="absolute bottom-1/3 right-6 z-10 text-right sm:right-8 lg:right-12">
          <p className="font-mono text-[10px] uppercase tracking-widest text-brand-tan/50">ADVANCED SYSTEMS</p>
          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-brand-tan/40">LAB — 02</p>
          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-brand-tan/40">UNITED STATES</p>
          <div className="mt-2 flex justify-end gap-1">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="h-1 w-1 rounded-full bg-brand-tan/30" />
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-wrap items-center justify-center gap-4 px-4 border-t border-brand-orange/10 pt-6">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-tan/50">
            Lighter · Cheaper · Faster to iterate
          </span>
          <span className="text-brand-yellow-gold/40">|</span>
          <span className="font-mono text-xs uppercase tracking-widest text-brand-tan/50">
            AI-native from day one
          </span>
        </div>
      </section>

      {/* Core identity */}
      <section className="border-b border-brand-orange/20 bg-[#141412] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="status-bar mb-6 inline-block">Core identity</span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-tan sm:text-4xl">
            Not loud. Not aggressive.
          </h2>
          <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-brand-tan/80">
            Lightweight, open-source, AI-native.
          </p>
          <p className="mt-4 font-mono text-sm leading-relaxed text-brand-tan/80">
            Every unit is manufactured in-house using 3D printing — fast iteration, low cost, no supply chain dependency. Swarm coordination and connectivity research is core to everything we build. Units that think, move, and communicate as one. The entire control stack is built security-first. No shortcuts, no retrofitted patches — hardened from the ground up because the systems we build operate in environments where failure isn&apos;t an option.
          </p>
          <p className="mt-4 font-mono text-sm leading-relaxed text-brand-tan/80">
            Legacy defense is slow, expensive, and bureaucratic. We&apos;re not. Every system we deploy is lighter, cheaper, and adapts in real time.
          </p>
          <p className="mt-4 font-mono text-sm leading-relaxed text-brand-tan/80">
            Early stage. Building in the open. The technology is real.
          </p>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-b border-brand-orange/20 bg-brand-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="status-bar mb-6 inline-block">Product line</span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-tan sm:text-4xl">
            The <span className="text-brand-orange">flagship</span> and the grid.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/voron-swarm"
              className="group border border-brand-orange/20 bg-brand-charcoal/50 p-6 transition hover:border-brand-orange/50 hover:bg-brand-charcoal/70"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-brand-orange">Flagship</span>
              <h3 className="mt-3 font-display text-xl font-bold uppercase text-brand-tan group-hover:text-brand-orange">
                Voron Swarm
              </h3>
              <p className="mt-2 font-mono text-xs leading-relaxed text-brand-tan/70">
                Lightweight autonomous drone swarms. Defensive mesh. Cost-effective Iron Dome alternative. Small units, high density, AI-coordinated.
              </p>
              <span className="mt-4 inline-block font-mono text-xs text-brand-orange">Learn more →</span>
            </Link>

            <Link
              href="/voron-shield"
              className="group border border-brand-orange/20 bg-brand-charcoal/50 p-6 transition hover:border-brand-orange/50 hover:bg-brand-charcoal/70"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-brand-orange">Grid</span>
              <h3 className="mt-3 font-display text-xl font-bold uppercase text-brand-tan group-hover:text-brand-orange">
                Voron Shield
              </h3>
              <p className="mt-2 font-mono text-xs leading-relaxed text-brand-tan/70">
                The defensive grid system: software, coordination layer, nest and replenishment infrastructure. Complete installation for military and critical infrastructure.
              </p>
              <span className="mt-4 inline-block font-mono text-xs text-brand-orange">Learn more →</span>
            </Link>

            <Link
              href="/voron-terra"
              className="group border border-brand-orange/20 bg-brand-charcoal/50 p-6 transition hover:border-brand-orange/50 hover:bg-brand-charcoal/70"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-brand-orange">Ground</span>
              <h3 className="mt-3 font-display text-xl font-bold uppercase text-brand-tan group-hover:text-brand-orange">
                Voron Terra
              </h3>
              <p className="mt-2 font-mono text-xs leading-relaxed text-brand-tan/70">
                Ground robotics. Autonomous patrol, perimeter defense, logistics. Natural expansion once aerial is proven.
              </p>
              <span className="mt-4 inline-block font-mono text-xs text-brand-orange">Learn more →</span>
            </Link>

            <Link
              href="/voron-lux"
              className="group border border-brand-orange/20 bg-brand-charcoal/50 p-6 transition hover:border-brand-orange/50 hover:bg-brand-charcoal/70"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-brand-orange">Hard kill</span>
              <h3 className="mt-3 font-display text-xl font-bold uppercase text-brand-tan group-hover:text-brand-orange">
                Voron Lux
              </h3>
              <p className="mt-2 font-mono text-xs leading-relaxed text-brand-tan/70">
                Laser defense integration. High-value targets needing a harder kill solution alongside drone interception.
              </p>
              <span className="mt-4 inline-block font-mono text-xs text-brand-orange">Learn more →</span>
            </Link>

            <Link
              href="/voron-ai"
              className="group border border-brand-orange/20 bg-brand-charcoal/50 p-6 transition hover:border-brand-orange/50 hover:bg-brand-charcoal/70"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-brand-orange">Custom AI</span>
              <h3 className="mt-3 font-display text-xl font-bold uppercase text-brand-tan group-hover:text-brand-orange">
                Voron AI
              </h3>
              <p className="mt-2 font-mono text-xs leading-relaxed text-brand-tan/70">
                Custom AI model for the Voron stack. Perception, coordination, decision-making — train and deploy the brain behind the swarm.
              </p>
              <span className="mt-4 inline-block font-mono text-xs text-brand-orange">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="border-b border-brand-orange/20 bg-[#141412] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="status-bar mb-6 inline-block">Positioning</span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-tan sm:text-4xl">
            A fraction of the cost.
          </h2>
          <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-brand-tan/80">
            The Israeli Iron Dome costs roughly $50,000 per interception. If Voron Swarm can intercept at a fraction of that cost using expendable lightweight units that auto-replenish, that&apos;s a genuinely disruptive value proposition.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Military and government contracts",
              "Critical infrastructure — power, data centers, borders",
              "Private security and estate protection",
              "Allied nation defense exports",
              "Research institutions — early revenue, proves concept",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 border-l-2 border-brand-orange/40 pl-4">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-tan/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technology bets */}
      <section className="border-b border-brand-orange/20 bg-brand-black py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="status-bar mb-6 inline-block">Technology</span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-tan sm:text-4xl">
            Bets to win on
          </h2>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-8">
            {[
              { title: "Swarm coordination AI", desc: "Units think collectively in milliseconds." },
              { title: "Aerodynamic efficiency", desc: "Longer loiter, faster response, lower power draw." },
              { title: "Nest and replenishment", desc: "Continuous coverage without human reload." },
              { title: "Sensor fusion", desc: "The raven sees everything; identifies threats before they're obvious." },
            ].map((item) => (
              <div key={item.title} className="min-w-0 flex-1 border border-brand-orange/20 bg-brand-charcoal/30 p-6 sm:max-w-xs">
                <p className="font-mono text-sm font-medium uppercase tracking-widest text-brand-orange">{item.title}</p>
                <p className="mt-2 font-mono text-xs text-brand-tan/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-brand-orange/20 bg-[#141412] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <span className="status-bar mb-6 inline-block">Contact</span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-tan sm:text-4xl">
              Investors. Partners. Customers.
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-brand-tan/80">
              Autonomous swarm defense is inevitable. Legacy systems are too expensive and too slow. We&apos;re getting there first.
            </p>
            <Link
              href="/voron-swarm#contact"
              className="mt-10 inline-block bg-brand-orange px-8 py-3 font-mono text-sm font-bold uppercase tracking-widest text-brand-black transition hover:bg-brand-orange/90"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
