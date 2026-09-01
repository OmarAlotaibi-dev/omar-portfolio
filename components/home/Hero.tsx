export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-black/45">
            Management Information Systems & Technology
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Turning Technology
            <br />
            Into Business Impact.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60 sm:text-xl">
            M.S. in Management Information Systems with a multidisciplinary
            background in systems and business analysis, software development,
            databases, data analytics, cloud, and AI.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/projects"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-black/85"
            >
              View My Work
            </a>

            <a
              href="/resume"
              className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white"
            >
              View Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-sm text-black/45">
            <a
              href="https://www.linkedin.com/in/omar-alotaibi11071998/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black"
            >
              LinkedIn
            </a>

            <span className="text-black/20">/</span>

            <a
              href="https://github.com/OmarAlotaibi-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}