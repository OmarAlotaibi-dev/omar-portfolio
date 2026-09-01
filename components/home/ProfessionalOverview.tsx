export default function ProfessionalOverview() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Professional Overview
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl">
              Connecting business requirements with systems, software, and
              data.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/60 sm:text-lg">
              My background combines Management Information Systems with
              professional experience in IT operations, data and information
              management, and organizational processes, alongside academic and
              technical work in business and systems analysis, software
              development, database systems, data analytics, and cloud
              technologies.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-black/60 sm:text-lg">
              Across these experiences, I have worked on analyzing
              requirements, modeling systems, developing applications,
              working with databases and APIs, analyzing data, and supporting
              technical environments.
            </p>

            <a
              href="/about"
              className="mt-8 inline-flex text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              More About Me →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}