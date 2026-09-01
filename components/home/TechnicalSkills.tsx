import Link from "next/link";
import { skillGroups } from "@/data/skills";

export default function TechnicalSkills() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
            Technical Skills
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Technical Capabilities & Tools
          </h2>
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-5 py-8 md:grid-cols-[0.7fr_1.3fr] md:gap-10"
            >
              <h3 className="text-base font-medium tracking-tight">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-x-7 gap-y-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-black/55 transition-colors hover:text-black"
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
          className="mt-8 inline-block text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
        >
          View Technical Skills →
        </Link>
      </div>
    </section>
  );
}