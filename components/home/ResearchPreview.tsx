import Link from "next/link";
import { featuredResearch } from "@/data/research";

export default function ResearchPreview() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
     <div className="flex items-center gap-3">
  <div className="h-px w-8 bg-[#2563EB]/70" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Research
  </p>
</div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Research & Analysis
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-black/50">
              Academic research across database systems, AI policy and
              governance, and emerging technologies.
            </p>

    <Link
  href="/research"
  className="group mt-8 inline-flex items-center gap-3 text-sm font-medium"
>
  <span className="border-b border-black/30 pb-1 transition-colors group-hover:border-black">
    Explore Research
  </span>

 <span className="text-black/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2563EB]">
    →
  </span>
</Link>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {featuredResearch.map((research) => (
         <article
  key={research.number}
  className="group grid gap-5 py-9 sm:grid-cols-[70px_1fr]"
>
            <div className="flex items-start gap-3">
  <span className="font-mono text-xs tracking-wider text-black/30">
    {research.number}
  </span>

  <div className="mt-2 h-px w-6 bg-black/10 transition-all duration-300 group-hover:w-9 group-hover:bg-[#2563EB]/70" />
</div>

                <div>
                <div className="flex items-center gap-2">
  <span className="h-1.5 w-1.5 rounded-full bg-black/25" />

  <p className="text-xs font-medium uppercase tracking-[0.14em] text-black/40">
    {research.category}
  </p>
</div>

            <h3 className="mt-2 max-w-xl text-xl font-semibold leading-snug tracking-tight transition-transform duration-300 group-hover:translate-x-1">
  {research.title}
</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-black/55">
                    {research.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}