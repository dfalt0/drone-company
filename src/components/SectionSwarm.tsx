export function SectionSwarm() {
  const points = [
    "Lightweight, small form factor for density and range",
    "Custom designs based on open-source platforms—iterating fast",
    "Swarm coordination and formation logic as core R&D",
    "Aerodynamics and efficiency for longer loiter and response",
  ];

  return (
    <section id="swarm" className="border-b border-brand-orange/20 bg-brand-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <span className="status-bar mb-6 inline-block">Swarm Tech</span>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-brand-tan sm:text-5xl">
              Built for the
              <br />
              <span className="text-brand-orange">swarm.</span>
            </h2>
            <p className="mt-6 max-w-lg font-mono text-sm leading-relaxed text-brand-tan/80">
              Every unit is designed to work as part of a larger system. We’re improving how many small
              drones think, move, and react as one—with an emphasis on aerodynamics and form factor
              that scale to real-world grids.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:max-w-xl">
            {points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 border border-brand-orange/20 bg-brand-charcoal/50 p-4"
              >
                <span className="font-mono text-brand-orange">››</span>
                <span className="font-mono text-sm text-brand-tan/90">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
