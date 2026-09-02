export default function ProfessionalOverview() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
  <div className="flex items-center gap-3">
    <div className="h-px w-8 bg-black/20" />

    <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
      About My Profile
    </p>
  </div>

  <p className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
    Professional Overview
  </p>
</div>
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl">
              Connecting business requirements with systems, software, and
              data.
            </h2>
            <div className="mt-8 flex items-center gap-3">
  <span className="text-xs font-medium uppercase tracking-[0.16em] text-black/35">
    Foundation
  </span>

  <div className="h-px flex-1 bg-black/10" />
</div>

            <p className="mt-4 max-w-2xl text-base leading-7 text-black/60 sm:text-lg">
              My background combines Management Information Systems with
              professional experience in IT operations, data and information
              management, and organizational processes, alongside academic and
              technical work in business and systems analysis, software
              development, database systems, data analytics, and cloud
              technologies.
            </p>
            
            <div className="mt-7 flex items-center gap-3">
  <span className="text-xs font-medium uppercase tracking-[0.16em] text-black/35">
    Application
  </span>

  <div className="h-px flex-1 bg-black/10" />
</div>

            <p className="mt-4 max-w-2xl text-base leading-7 text-black/60 sm:text-lg">
              Across these experiences, I have worked on analyzing
              requirements, modeling systems, developing applications,
              working with databases and APIs, analyzing data, and supporting
              technical environments.
            </p>

            <a
              href="/about"
             className="group mt-9 inline-flex items-center gap-3 text-sm font-medium"
            >
              <span className="border-b border-black/30 pb-1 transition-colors group-hover:border-black">
              More About Me
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                     →
                    </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}