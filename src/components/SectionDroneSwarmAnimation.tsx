"use client";

export function SectionDroneSwarmAnimation() {
  return (
    <section
      id="swarm-demo"
      className="border-b border-brand-orange/20 bg-[#050d15] py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="status-bar mb-4 inline-block">Design concept</span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-brand-tan sm:text-4xl">
              Swarm formation
              <br />
              <span className="text-brand-orange">in action</span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-brand-tan/60 sm:text-right">
            Autonomous dome defense: drones intercept incoming threats and
            replenish from the hub. Watch the grid respond in real time.
          </p>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="relative h-[70vh] min-h-[420px] w-full">
          <iframe
            src="/animations/drone-swarm-animation.html"
            title="Drone swarm formation — 3D defensive dome with intercept and replenish"
            className="absolute inset-0 h-full w-full border-0 bg-[#050d15]"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 border-brand-orange/10"
          style={{
            boxShadow: "inset 0 0 0 1px rgba(255, 88, 55, 0.08)",
          }}
          aria-hidden
        />
      </div>
    </section>
  );
}
