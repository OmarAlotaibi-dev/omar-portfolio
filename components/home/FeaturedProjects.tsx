import Link from "next/link";
import { Projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
              Selected Work
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="hidden text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60 sm:block"
          >
            View All Projects →
          </Link>
        </div>

        <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
          {Projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group grid gap-6 py-9 transition-all hover:px-3 md:grid-cols-[80px_1fr_auto] md:items-center"
            >
              <span className="text-sm text-black/35">
                {project.number}
              </span>

              <div>
                <p className="text-sm text-black/45">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-black/55">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/45"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <span className="text-xl text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black/60">
                ↗
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-8 inline-block text-sm font-medium underline underline-offset-4 sm:hidden"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}