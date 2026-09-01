import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-black px-8 py-14 text-white sm:px-12 sm:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/50">
            Let&apos;s Connect
          </p>

          <div className="mt-6 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Interested in working together?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              Open to opportunities where business, information systems, and
              technology come together — including business and systems
              analysis, digital transformation, data, and technical roles.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
            >
              Get In Touch
            </Link>

            <Link
              href="/projects"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-white/50"
            >
              Explore My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}