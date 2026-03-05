export function SectionFuture() {
  const useCases = [
    { title: "Delivery", desc: "Last-mile and point-to-point payload delivery in controlled airspace." },
    { title: "Aerial mapping", desc: "Survey and mapping with coordinated multi-drone coverage." },
    { title: "Surveillance", desc: "Persistent overwatch and recon with grid or patrol patterns." },
  ];

  return (
    <section id="future" className="border-b border-brand-orange/20 bg-[#141412] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="status-bar mb-6 inline-block">Future</span>
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-brand-tan sm:text-5xl">
          Beyond defense.
          <br />
          <span className="text-brand-orange">More use cases in parallel.</span>
        </h2>
        <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-brand-tan/80">
          Defense and intercept are the primary focus. In parallel we’re exploring delivery, aerial
          mapping, and surveillance—same swarm stack, different mission profiles.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {useCases.map((uc) => (
            <li
              key={uc.title}
              className="border border-brand-orange/20 bg-brand-black/50 p-6 transition hover:border-brand-orange/40"
            >
              <h3 className="font-display text-lg font-bold uppercase text-brand-orange">
                {uc.title}
              </h3>
              <p className="mt-2 font-mono text-sm text-brand-tan/70">{uc.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
