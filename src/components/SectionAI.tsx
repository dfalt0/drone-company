export function SectionAI() {
  return (
    <section id="ai" className="border-b border-brand-orange/20 bg-brand-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <span className="status-bar mb-6 inline-block">AI Control</span>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-brand-tan sm:text-5xl">
              Intelligent
              <br />
              <span className="text-brand-orange">swarm control.</span>
            </h2>
            <p className="mt-6 font-mono text-sm leading-relaxed text-brand-tan/80">
              AI drives formation, threat assessment, and intercept decisions. The swarm adapts to
              wind, losses, and mission updates—propagating corrections across units in fractions of
              a second. Human oversight optional; autonomy by design.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="status-bar">NO HUMAN INPUT</span>
              <span className="status-bar">AUTONOMOUS</span>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div className="border-l-2 border-brand-orange py-2 pl-6">
              <p className="font-mono text-xs text-brand-tan/60">
                LOG 00:02:14 · CORRECTION PROPAGATED ACROSS 128 UNITS IN 0.43 SECONDS
              </p>
            </div>
            <div className="border-l-2 border-brand-orange/60 py-2 pl-6">
              <p className="font-mono text-xs text-brand-tan/60">
                WIND INTERFERENCE DETECTED · ALTITUDE BAND: 240 FT
              </p>
            </div>
            <p className="font-mono text-xs italic text-brand-tan/50">
              Control stack and research app built in Rust. Website and tools designed for clarity and scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
