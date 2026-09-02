import Link from "next/link";
import { experienceSnapshot } from "@/data/experience";

export default function ExperienceSnapshot() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

          <div>
            <div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Experience
  </p>
</div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Professional Journey
            </h2>

<Link
  href="/experience"
  className="group mt-8 inline-flex items-center gap-3 text-sm font-medium"
>
  <span className="border-b border-black/30 pb-1 transition-colors group-hover:border-black">
    View Full Experience
  </span>

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {experienceSnapshot.map((item) => (
<article
  key={item.title}
  className="group relative grid gap-4 py-9 md:grid-cols-[0.6fr_1.4fr]"
>
  <div className="absolute bottom-0 left-[3px] top-[3.15rem] hidden w-px bg-black/10 md:block" />
               <div className="flex items-start gap-3">
  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full border border-black/30 bg-white transition-all duration-300 group-hover:bg-black" />

  <p className="text-sm font-medium text-black/40 transition-colors duration-300 group-hover:text-black/65">
    {item.period}
  </p>
</div>

                <div>
<h3 className="text-xl font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1">
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