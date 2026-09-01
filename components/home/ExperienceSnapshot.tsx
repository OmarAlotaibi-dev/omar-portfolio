import Link from "next/link";
import { experienceSnapshot } from "@/data/experience";

export default function ExperienceSnapshot() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
              Experience
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Professional Journey
            </h2>

            <Link
              href="/experience"
              className="mt-8 inline-block text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              View Full Experience →
            </Link>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {experienceSnapshot.map((item) => (
              <article
                key={item.title}
                className="grid gap-4 py-9 md:grid-cols-[0.6fr_1.4fr]"
              >
                <p className="text-sm text-black/40">
                  {item.period}
                </p>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-black/55">
                    {item.description}
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