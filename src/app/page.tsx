import Link from "next/link";

export default function VoronDynamicsHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden border-b border-brand-orange/20 bg-brand-black">
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
        <div className="corner-bracket corner-bracket-tl pointer-events-none absolute top-8 left-8" />
        <div className="corner-bracket corner-bracket-tr pointer-events-none absolute top-8 right-8" />
        <div className="corner-bracket corner-bracket-bl pointer-events-none absolute bottom-24 left-8" />
        <div className="corner-bracket corner-bracket-br pointer-events-none absolute bottom-24 right-8" />

        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-between px-4 pt-24 pb-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="status-bar">DEFENSE-FIRST</span>
            <span className="status-bar">AUTONOMOUS ROBOTS</span>
            <span className="font-mono text-brand-orange/80">››››</span>
          </div>

          <div className="flex-1 flex flex-col justify-center py-12">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-brand-orange">
              The raven sees first.
            </p>
            <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-tight text-brand-tan sm:text-6xl md:text-7xl lg:text-8xl">
              Voron
              <br />
              <span className="text-brand-orange">Dynamics</span>
            </h1>
            <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-brand-tan/80">
              Defense-first robotics built around autonomous swarm technology.  An open-source startup pushing real limits. Early stage.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/voron-swarm"
                className="inline-flex items-center gap-2 bg-brand-orange px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-brand-black transition hover:bg-brand-orange/90"
              >
                Voron Swarm
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center gap-2 border border-brand-orange/50 px-6 py-3 font-mono text-sm uppercase tracking-widest text-brand-orange transition hover:bg-brand-orange/10"
              >
                All products
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 border-t border-brand-orange/20 pt-6">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-tan/60">
              Lighter · Cheaper · Faster to iterate
            </span>
            <span className="text-brand-orange/50">|</span>
            <span className="font-mono text-xs uppercase tracking-widest text-brand-tan/60">
              AI-native from day one
            </span>
          </div>
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
