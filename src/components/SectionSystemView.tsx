import { WireframeDome } from "./WireframeDome";

export function SectionSystemView() {
  return (
    <section
      id="system"
      className="border-b border-brand-orange/20 bg-brand-black py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <span className="status-bar mb-6 inline-block">System View</span>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-brand-tan sm:text-5xl">
              Coverage at a glance.
              <br />
              <span className="text-brand-green">Eyes on the grid.</span>
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-brand-tan/80">
              A single view of your defensive mesh: each node is a unit in the swarm, the grid is
              your coverage area, and the center marks the focal point. Deployments and threats
              map directly onto this spatial model—same logic that runs in the control stack.
            </p>
            <p className="mt-4 font-mono text-xs text-brand-tan/50">
              Holographic-style display for monitoring and mission planning. Compatible with
              future control and mapping interfaces.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <WireframeDome />
          </div>
        </div>
      </div>
    </section>
  );
}
