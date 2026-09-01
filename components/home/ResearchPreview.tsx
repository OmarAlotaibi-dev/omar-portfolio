import Link from "next/link";
import { featuredResearch } from "@/data/research";

export default function ResearchPreview() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
              Research
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Research & Analysis
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-black/50">
              Academic research across database systems, AI policy and
              governance, and emerging technologies.
            </p>

            <Link
              href="/research"
              className="mt-8 inline-block text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              Explore Research →
            </Link>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {featuredResearch.map((research) => (
              <article
                key={research.number}
                className="grid gap-5 py-9 sm:grid-cols-[50px_1fr]"
              >
                <span className="text-sm text-black/35">
                  {research.number}
                </span>

                <div>
                  <p className="text-sm text-black/45">
                    {research.category}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
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