import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
              Projects
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Selected work across software, systems, and data.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60 sm:text-xl">
              A selection of academic and technical projects covering web
              development, systems analysis and design, databases, APIs, and
              data.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="divide-y divide-black/10 border-y border-black/10">
              {Projects.map((project) => (
                <article
                  key={project.slug}
                  className="group py-12 transition-all"
                >
                  <div className="grid gap-8 lg:grid-cols-[120px_1fr_auto] lg:items-start">
                    {/* Number */}
                    <div>
                      <p className="text-sm text-black/35">
                        {project.number}
                      </p>
                    </div>

                    {/* Project Info */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-sm font-medium uppercase tracking-[0.12em] text-black/45">
                          {project.category}
                        </p>

                        <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-black/40">
                          {project.status}
                        </span>
                      </div>

                      <h2 className="mt-4 text-3xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                        {project.title}
                      </h2>

                      <p className="mt-5 max-w-2xl text-base leading-7 text-black/60">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/50"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Link */}
                    <div className="lg:pt-1">
                      <a
                        href={`/projects/${project.slug}`}
                        className="inline-flex whitespace-nowrap text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-50"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}