import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-black px-8 py-14 text-white sm:px-12 sm:py-16">
{/* Background visual */}
<div className="pointer-events-none absolute inset-0">
  <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
  <div className="absolute right-16 top-10 h-44 w-44 rounded-full border border-white/[0.07]" />
</div>
<div className="relative z-10">

<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-white/25" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
    Let&apos;s Connect
  </p>
</div>

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
  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5"
>
  <span>Get In Touch</span>

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>

<Link
  href="/projects"
  className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50"
>
  <span>Explore My Work</span>

  <span className="text-white/50 transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}