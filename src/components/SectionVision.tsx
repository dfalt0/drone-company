export function SectionVision() {
  return (
    <section id="vision" className="border-b border-brand-orange/20 bg-[#141412] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <span className="status-bar mb-6 inline-block">Vision</span>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-brand-tan sm:text-5xl">
              Swarm-first.
              <br />
              <span className="text-brand-orange">Defense-ready.</span>
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-brand-tan/80">
              We’re building lightweight, small, custom robots designed to operate as a swarm. Our focus:
              better group swarm tech, improved aerodynamics, and a form factor built for real deployment.
            </p>
            <p className="mt-4 font-mono text-sm leading-relaxed text-brand-tan/80">
              Early-stage startup—pure idea and execution. We’re iterating on custom models derived from
              open-source platforms to advance research and prove the concept. The goal: attract partners
              and investors who see the future of autonomous aerial defense.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="border-l-2 border-brand-orange pl-6">
              <p className="font-mono text-xs uppercase tracking-widest text-brand-orange">
                Primary use
              </p>
              <p className="mt-1 font-mono text-sm text-brand-tan/90">
                Commercial and defense deployments. Individual units available for research and early adopters.
              </p>
            </div>
            <div className="border-l-2 border-brand-orange/60 pl-6">
              <p className="font-mono text-xs uppercase tracking-widest text-brand-orange/80">
                Roadmap
              </p>
              <p className="mt-1 font-mono text-sm text-brand-tan/90">
                AI-driven swarm control, grid-style defensive mesh, autonomous intercept and auto-replenish from local nests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
