import { SwarmAnimation } from "./SwarmAnimation";

export function SectionDefense() {
  return (
    <section id="defense" className="border-b border-brand-orange/20 bg-[#141412] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-flex-start lg:justify-between lg:gap-10">
          <div className="min-w-0 flex-1">
            <span className="status-bar mb-6 inline-block">Defense Grid</span>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-brand-tan sm:text-5xl lg:text-6xl">
              Grid-style defense.
              <br />
              <span className="text-brand-orange">Mesh. Intercept. Replenish.</span>
            </h2>
          </div>
          <SwarmAnimation />
        </div>
        <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-brand-tan/80">
          Drones are spread in a mesh-like grid across an open area. When aerial threats are detected,
          units intercept in a controlled, mission-directed way. Depleted positions are automatically
          filled from local nests—continuous coverage without human in the loop.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            {
              label: "FORMATION",
              title: "Adaptive Grid",
              desc: "Units hold a configurable mesh. Wind and losses are corrected across the swarm in real time.",
            },
            {
              label: "INTERCEPT",
              title: "Mission-directed",
              desc: "Threats are engaged with coordinated response. Defensive and offensive roles as mission requires.",
            },
            {
              label: "REPLENISH",
              title: "Auto-deploy",
              desc: "Local nests launch new units to restore grid coverage. No manual reload in the field.",
            },
          ].map((block) => (
            <div
              key={block.label}
              className="border border-brand-orange/20 bg-brand-black p-6"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-brand-orange">
                {block.label}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold uppercase text-brand-tan">
                {block.title}
              </h3>
              <p className="mt-3 font-mono text-sm text-brand-tan/70">{block.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
