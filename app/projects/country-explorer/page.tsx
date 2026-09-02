import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CountryExplorerPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
            <a
  href="/projects"
  className="group inline-flex items-center gap-2 text-sm font-medium text-black/45 transition-colors hover:text-black"
>
  <span className="transition-transform duration-300 group-hover:-translate-x-1">
    ←
  </span>

  <span className="border-b border-black/20 pb-1 transition-colors duration-300 group-hover:border-black/50">
    Back to Projects
  </span>
</a>
            <div className="mt-16 max-w-5xl">
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Web Development & API Integration
  </p>
</div>

              <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Country Explorer
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl">
                A two-part IBM web development project progressing from a
                JavaScript-based country explorer to an application integrated
                with a REST API for dynamic country data.
              </p>
            </div>

            <div className="mt-12 grid gap-8 border-y border-black/10 py-7 sm:grid-cols-3 sm:divide-x sm:divide-black/10">
              <div className="sm:pr-8">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/35">
                  Project
                </p>

                <p className="mt-3 text-sm font-medium tracking-tight text-black/75">
                  IBM SkillsBuild
                </p>
              </div>

              <div className="sm:px-8">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/35">
                  Type
                </p>

                <p className="mt-3 text-sm font-medium tracking-tight text-black/75">
                  Two-Part Web Development Project
                </p>
              </div>

              <div className="sm:pl-8">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/35">
                  Status
                </p>

                <p className="mt-3 text-sm font-medium tracking-tight text-black/75">
                  Completed
                </p>
              </div>
            </div>
          </div>
        </section>
{/* Project Preview */}
<section className="border-t border-black/10">
  <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
    <div className="group overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02] p-2 transition-all duration-300 hover:border-black/20">
      <Image
        src="/projects/country-explorer.png"
        alt="Country Explorer application interface"
        width={1702}
        height={928}
        className="h-auto w-full rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
        priority
      />
    </div>
  </div>
</section>

        {/* Overview */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Overview
  </p>
</div>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  From front-end fundamentals to API-driven data.
                </h2>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-black/35">
  <span>01 Front-End</span>

  <div className="h-px w-8 bg-black/15" />

  <span>02 API Integration</span>
</div>

                <p className="mt-8 max-w-3xl border-l border-black/15 pl-5 text-base leading-7 text-black/60 sm:text-lg">
                  Country Explorer was completed in two parts as part of IBM
                  SkillsBuild web development work. The first part focused on
                  front-end development and working with country information
                  through a browser-based interface.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  The second part extended the project by integrating the REST
                  Countries API, allowing the application to retrieve and
                  display country information dynamically while adding search,
                  filtering, pagination, and detailed country views.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Parts */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Project Structure
  </p>
</div>
              </div>

              <div className="space-y-12">
<div className="group border-t border-black/10 py-7">
  <div className="flex items-center gap-3">
    <span className="font-mono text-xs tracking-wide text-black/35">
      01
    </span>

    <div className="h-px w-6 bg-black/10 transition-all duration-300 group-hover:w-10 group-hover:bg-black/30" />

    <span className="text-xs font-medium uppercase tracking-[0.14em] text-black/40">
      Part
    </span>
  </div>

  <h2 className="mt-3 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
    Front-End Development
  </h2>

  <p className="mt-4 max-w-3xl text-base leading-7 text-black/60">
    Built the browser-based Country Explorer interface using
    HTML, CSS, and JavaScript. The project included working with
    country data, dynamic rendering, DOM manipulation,
    filtering, and navigation between country views.
  </p>
</div>

<div className="group border-t border-black/10 py-7">
  <div className="flex items-center gap-3">
    <span className="font-mono text-xs tracking-wide text-black/35">
      02
    </span>

    <div className="h-px w-6 bg-black/10 transition-all duration-300 group-hover:w-10 group-hover:bg-black/30" />

    <span className="text-xs font-medium uppercase tracking-[0.14em] text-black/40">
      Part
    </span>
  </div>

                  <h2 className="mt-3 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                    REST API Integration
                  </h2>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-black/60">
                    Extended the project to retrieve live country information
                    from the REST Countries API. This version included API
                    requests, response handling, search and filtering,
                    pagination, and detailed country information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Technologies
  </p>
</div>
              </div>

              <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "REST API",
                  "JSON",
                  "Node.js",
                ].map((technology) => (
<span
  key={technology}
  className="group flex items-center gap-3 border-t border-black/10 px-1 py-4 text-sm font-medium text-black/60 transition-colors duration-300 hover:text-black"
>
  <span className="h-px w-4 bg-black/15 transition-all duration-300 group-hover:w-6 group-hover:bg-black/35" />

  {technology}
</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What I Worked On */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    What I Worked On
  </p>
</div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="group border-t border-black/10 py-5">
<div className="flex items-center gap-3">
  <div className="h-px w-5 bg-black/15 transition-all duration-300 group-hover:w-8 group-hover:bg-black/35" />

  <h3 className="text-lg font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1">
    Dynamic Rendering
  </h3>
</div>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Used JavaScript to dynamically render country information
                    and update the interface based on user interaction.
                  </p>
                </div>

<div className="group border-t border-black/10 py-5">
  <div className="flex items-center gap-3">
    <div className="h-px w-5 bg-black/15 transition-all duration-300 group-hover:w-8 group-hover:bg-black/35" />

    <h3 className="text-lg font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1">
      Search & Filtering
    </h3>
  </div>

  <p className="mt-3 text-sm leading-6 text-black/55">
    Implemented functionality for searching and filtering
    country information within the application.
  </p>
</div>

<div className="group border-t border-black/10 py-5">
  <div className="flex items-center gap-3">
    <div className="h-px w-5 bg-black/15 transition-all duration-300 group-hover:w-8 group-hover:bg-black/35" />

    <h3 className="text-lg font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1">
      REST API
    </h3>
  </div>

  <p className="mt-3 text-sm leading-6 text-black/55">
    Retrieved country data through a REST API and handled the
    returned JSON data in the application.
  </p>
</div>

                <div className="group border-t border-black/10 py-5">
  <div className="flex items-center gap-3">
    <div className="h-px w-5 bg-black/15 transition-all duration-300 group-hover:w-8 group-hover:bg-black/35" />

    <h3 className="text-lg font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1">
      Data Presentation
    </h3>
  </div>

  <p className="mt-3 text-sm leading-6 text-black/55">
    Structured country information into searchable,
    paginated, and detailed user-facing views.
  </p>
</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Key Takeaways
  </p>
</div>
              </div>

              <div>
                <ul className="divide-y divide-black/10 border-y border-black/10">
<li className="group flex items-start gap-4 py-6 text-base text-black/65">
  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />

  <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
    Building browser-based interfaces with JavaScript and DOM
    manipulation.
  </span>
</li>

<li className="group flex items-start gap-4 py-6 text-base text-black/65">
  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />

  <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
    Working with external REST APIs and JSON data.
  </span>
</li>

<li className="group flex items-start gap-4 py-6 text-base text-black/65">
  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />

  <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
    Implementing search, filtering, pagination, and detailed
    data views.
  </span>
</li>

<li className="group flex items-start gap-4 py-6 text-base text-black/65">
  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />

  <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
    Extending a front-end project from local data to
    API-driven data.
  </span>
</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
<div className="mb-8 flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Project Repositories
  </p>
</div>

          <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
<a
  href="https://github.com/OmarAlotaibi-dev/COUNTRY_EXPLORER"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center justify-between gap-6 bg-black px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-black/85"
>
  <span>Front-End Repository</span>

  <span className="text-white/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">
    ↗
  </span>
</a>

<a
  href="https://github.com/OmarAlotaibi-dev/country-explorer-rest-API"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center justify-between gap-6 border border-black/15 px-6 py-4 text-sm font-medium text-black transition-all duration-300 hover:border-black/40 hover:bg-black/[0.02]"
>
  <span>REST API Repository</span>

  <span className="text-black/35 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">
    ↗
  </span>
</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}