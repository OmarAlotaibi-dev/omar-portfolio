import Link from "next/link";
import { Projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-[#2563EB]/70" /> 

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Selected Work
  </p>
</div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="group hidden items-center gap-3 text-sm font-medium sm:inline-flex"
          >
         <span className="border-b border-black/30 pb-1 transition-colors group-hover:border-black">
  View All Projects
</span>
 <span className="transition-transform duration-300 group-hover:translate-x-1">
  →
</span>
          </Link>
        </div>

        <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
          {Projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
className="group grid gap-6 px-0 py-9 transition-all duration-300 hover:bg-black/[0.025] hover:px-5 md:grid-cols-[80px_1fr] md:items-center">

             <div className="flex items-center gap-3">
  <span className="text-2xl font-semibold tracking-tight text-black/20 transition-colors duration-300 group-hover:text-black/60">
    {project.number}
  </span>

 <div className="hidden h-px w-6 bg-black/10 transition-all duration-300 group-hover:w-10 group-hover:bg-[#2563EB]/70 md:block" />
</div>

              <div>
                <p className="text-sm text-black/45">
                  {project.category}
                </p>

<h3 className="mt-2 inline-flex items-center gap-2 text-xl font-semibold tracking-tight">
  <span>{project.title}</span>

  <span className="text-black/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2563EB]">
    →
  </span>
</h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-black/55">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                       className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-black/45 transition-colors duration-300 group-hover:border-black/15 group-hover:text-black/60"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/projects"
className="group mt-8 inline-flex items-center gap-3 text-sm font-medium sm:hidden"
>
  <span className="border-b border-black/30 pb-1 transition-colors group-hover:border-black">
    View All Projects
  </span>
  <span className="text-black/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2563EB]">
 →
    </span>
          
        </Link>
      </div>
    </section>
  );
}