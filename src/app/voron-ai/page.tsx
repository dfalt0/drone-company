import Link from "next/link";

export const metadata = {
  title: "Voron AI — Custom AI Model | Voron Dynamics",
  description:
    "Custom Voron AI model. Train and deploy AI that powers the swarm — perception, coordination, and decision-making.",
};

export default function VoronAIPage() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden border-b border-brand-orange/20 bg-brand-black">
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
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <span className="status-bar mb-6 inline-block">Custom AI</span>
          <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-brand-tan sm:text-5xl md:text-6xl">
            Voron <span className="text-brand-orange">AI</span>
          </h1>
          <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-brand-tan/80">
            Custom AI model for the Voron stack. Perception, coordination, and decision-making — train and deploy the brain behind the swarm.
          </p>
          <Link
            href="/#products"
            className="mt-10 inline-block border border-brand-orange/50 px-6 py-3 font-mono text-sm uppercase tracking-widest text-brand-orange transition hover:bg-brand-orange/10"
          >
            All products
          </Link>
        </div>
      </section>
      <section id="overview" className="border-b border-brand-orange/20 bg-[#141412] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-tan">
            Overview
          </h2>
          <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-brand-tan/80">
            Voron AI is the custom model layer that powers the entire grid — from target detection and tracking to swarm coordination and mission planning. Built for edge deployment, optimized for our hardware, and continuously improved from real-world data. Not a black box: train, fine-tune, and audit the AI that runs your defense.
          </p>
        </div>
      </section>
    </>
  );
}
