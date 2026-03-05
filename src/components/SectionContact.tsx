"use client";

import { useState } from "react";

export function SectionContact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-b border-brand-orange/20 bg-brand-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <span className="status-bar mb-6 inline-block">Contact</span>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-brand-tan sm:text-5xl">
            Investors.
            <br />
            <span className="text-brand-orange">Partners. Customers.</span>
          </h2>
          <p className="mt-6 font-mono text-sm leading-relaxed text-brand-tan/80">
            We’re early-stage and building in the open. If you’re interested in backing the next
            step in autonomous swarm defense—or in deploying units for research or commercial
            use—reach out.
          </p>

          {submitted ? (
            <div className="mt-10 border border-brand-green/40 bg-brand-green/10 p-6">
              <p className="font-mono text-sm font-medium text-brand-green">
                Message received. We’ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
              <div>
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-brand-tan/70">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full border border-brand-orange/30 bg-brand-charcoal px-4 py-3 font-mono text-sm text-brand-tan placeholder:text-brand-tan/40 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-brand-tan/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full border border-brand-orange/30 bg-brand-charcoal px-4 py-3 font-mono text-sm text-brand-tan placeholder:text-brand-tan/40 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                  placeholder="Tell us about your interest..."
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full bg-brand-orange py-3 font-mono text-sm font-bold uppercase tracking-widest text-brand-black transition hover:bg-brand-orange/90 sm:w-auto sm:px-8"
              >
                Send
              </button>
            </form>
          )}

          <p className="mt-8 font-mono text-xs text-brand-tan/50">
            No funding yet—pure idea and execution. We’re building custom models and control systems
            now. Your interest helps us get to the next milestone.
          </p>
        </div>
      </div>
    </section>
  );
}
