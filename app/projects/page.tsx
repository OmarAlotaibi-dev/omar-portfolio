import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F7F8FA] text-[#111827]">
        {/* Hero */}
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
<div className="flex items-center gap-3">

  <div className="h-px w-8 bg-[#2563EB]/70" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Projects
  </p>
</div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Selected work across software, systems, and data.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60 sm:text-xl">
              A selection of academic and technical projects covering web
              development, systems analysis and design, databases, APIs, and
              data.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium uppercase tracking-[0.16em] text-black/35">
  <span>Software</span>

  <span className="h-px w-8 bg-[#2563EB]/40" />

  <span>Systems</span>

  <span className="h-px w-8 bg-[#2563EB]/40" />

  <span>Data</span>
</div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
            <div className="divide-y divide-black/10 border-y border-black/10">
              {Projects.map((project) => (
<article
  key={project.slug}
  className="group px-0 py-12 transition-all duration-300 hover:bg-black/[0.025] hover:px-5"
>
<div className="grid gap-8 lg:grid-cols-[90px_1fr_auto] lg:items-start">
{/* Number */}
<div className="flex items-center gap-3">
  <span className="text-2xl font-semibold tracking-tight text-black/20 transition-colors duration-300 group-hover:text-black/60">
    {project.number}
  </span>

  <div className="h-px w-6 bg-black/10 transition-all duration-300 group-hover:w-10 group-hover:bg-[#2563EB]/70" />
</div>

                    {/* Project Info */}
                    <div>
                     <div className="flex flex-wrap items-center gap-3">
  <div className="flex items-center gap-2">
    <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-[#2563EB]" />

    <p className="text-xs font-medium uppercase tracking-[0.14em] text-black/45">
      {project.category}
    </p>
  </div>

  <span className="text-black/20">/</span>

  <span className="text-xs font-medium uppercase tracking-[0.14em] text-black/35">
    {project.status}
  </span>
</div>

<h2 className="mt-4 inline-flex items-center gap-3 text-3xl font-semibold tracking-tight sm:text-4xl">
  <span className="transition-transform duration-300 group-hover:translate-x-1">
    {project.title}
  </span>

  <span className="text-black/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2563EB]">
    →
  </span>
</h2>

                      <p className="mt-5 max-w-3xl text-base leading-7 text-black/60">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-black/45 transition-colors duration-300 group-hover:border-black/15 group-hover:text-black/60"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Link */}
                    <div className="lg:pt-2">
                      <a
  href={`/projects/${project.slug}`}
  className="group/link inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium"
>
  <span className="border-b border-black/30 pb-1 transition-colors duration-300 group-hover/link:border-black">
    View Project
  </span>

  <span className="text-black/35 transition-transform duration-300 group-hover/link:translate-x-1">
    →
  </span>
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