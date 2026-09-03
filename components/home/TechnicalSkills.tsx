import Link from "next/link";
import { skillGroups } from "@/data/skills";

export default function TechnicalSkills() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">

  <div className="flex items-center gap-3">
<div className="h-px w-8 bg-[#2563EB]/70" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Technical Skills
  </p>
</div>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Technical Capabilities & Tools
          </h2>
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {skillGroups.map((group) => (

        <div
  key={group.title}
  className="group grid gap-5 px-0 py-8 transition-all duration-300 hover:bg-black/[0.025] hover:px-5 md:grid-cols-[0.7fr_1.3fr] md:gap-10"
>
<div className="flex items-start gap-3">
  <div className="mt-2 h-px w-6 bg-black/10 transition-all duration-300 group-hover:w-10 group-hover:bg-[#2563EB]/70" />
{/*group of skills title*/}
  <h3 className="text-base font-semibold tracking-tight">
    {group.title}
  </h3>
</div>

              <div className="flex flex-wrap gap-x-7 gap-y-3">
                {group.skills.map((skill) => (
      <span
  key={skill}
  className="relative text-sm text-black/50 transition-colors duration-300 before:mr-2 before:text-black/20 before:content-['·'] hover:text-black"
>
  {skill}
</span>
                ))}
              </div>
            </div>
          ))}
        </div>

<Link
  href="/skills"
  className="group mt-8 inline-flex items-center gap-3 text-sm font-medium"
>
  <span className="border-b border-black/30 pb-1 transition-colors group-hover:border-black">
    View Technical Skills
  </span>

  <span className="text-black/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2563EB]">
    →
  </span>
</Link>
      </div>
    </section>
  );
}