export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
  <div className="absolute right-[-8rem] top-20 h-72 w-72 rounded-full border border-black/15" />
  <div className="absolute right-16 top-32 h-52 w-52 rounded-full border border-black/15" />
  <div className="absolute left-[-6rem] bottom-10 h-64 w-64 rounded-full border border-black/15" />
</div>
      {/*Background gradient*/}
     <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
  <div className="max-w-3xl">

<div className="mb-6 flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
    Management Information Systems & Technology
  </p>
</div>

         <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-6xl">
  Turning Technology
  <br />
  Into{" "}
  <span className="relative inline-block">
    Business Impact.
    <span className="absolute -bottom-2 left-0 h-px w-full bg-black/20" />
  </span>
</h1>

          <p className="mt-8 max-w-xl border-l border-black/15 pl-5 text-lg leading-8 text-black/60 sm:text-xl">
            M.S. in Management Information Systems with a multidisciplinary
            background in systems and business analysis, software development,
            databases, data analytics, cloud, and AI.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">


            <a
  href="/projects"
  className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/85"
>
  View My Work
  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>

            <a
              href="/resume"
              className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white"
            >
              View Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-black/45">
  <span className="text-xs uppercase tracking-[0.16em] text-black/30">
    Connect
  </span>

  <span className="h-4 w-px bg-black/15" />
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

        {/* Right Visual */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="mb-5 flex items-center gap-3">
  <div className="h-px w-10 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    MIS Framework
  </p>
</div>
          <div className="max-w-[88%] rounded-2xl border border-black/10 bg-white/90 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    01
  </p>

  <h3 className="mt-3 text-xl font-semibold">
    Business
  </h3>

  <p className="mt-2 text-sm leading-6 text-black/50">
    Requirements · Processes · Strategy
  </p>
</div>
<div className="ml-10 h-4 border-l border-black/20" />

<div className="ml-10 max-w-[92%] rounded-2xl border border-black/10 bg-black p-6 text-white transition-all duration-300 hover:-translate-y-1">
  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
    02
  </p>

  <h3 className="mt-3 text-xl font-semibold">
    Systems
  </h3>
  <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/35">
  <span>Business</span>
  <span>→</span>
  <span>Technology</span>
</div>

  <p className="mt-2 text-sm leading-6 text-white/55">
    Analysis · Design · Integration
  </p>
</div>

<div className="ml-10 h-4 border-l border-black/20" />

<div className="mr-10 max-w-[84%] rounded-2xl border border-black/10 bg-white/90 p-6 backdrop-blur-sm/transition-all duration-300 hover:-translate-y-1">
  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    03
  </p>

  <h3 className="mt-3 text-xl font-semibold">
    Technology
  </h3>

  <p className="mt-2 text-sm leading-6 text-black/50">
    Software · Data · Cloud
  </p>
</div>
          </div>

        </div>
      </div>
    </section>
  );
}