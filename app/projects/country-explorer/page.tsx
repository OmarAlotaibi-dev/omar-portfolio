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
              className="inline-flex items-center text-sm text-black/45 transition-colors hover:text-black"
            >
              ← Back to Projects
            </a>

            <div className="mt-16 max-w-5xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                Web Development & API Integration
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Country Explorer
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl">
                A two-part IBM web development project progressing from a
                JavaScript-based country explorer to an application integrated
                with a REST API for dynamic country data.
              </p>
            </div>

            <div className="mt-12 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-black/40">
                  Project
                </p>

                <p className="mt-2 text-sm font-medium">
                  IBM SkillsBuild
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-black/40">
                  Type
                </p>

                <p className="mt-2 text-sm font-medium">
                  Two-Part Web Development Project
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-black/40">
                  Status
                </p>

                <p className="mt-2 text-sm font-medium">
                  Completed
                </p>
              </div>
            </div>
          </div>
        </section>
{/* Project Preview */}
<section className="border-t border-black/10">
  <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02]">
      <Image
        src="/projects/country-explorer.png"
        alt="Country Explorer application interface"
        width={1702}
        height={928}
        className="h-auto w-full"
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Overview
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  From front-end fundamentals to API-driven data.
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Project Structure
                </p>
              </div>

              <div className="space-y-12">
                <div className="border-t border-black/10 pt-6">
                  <p className="text-sm text-black/40">
                    Part 01
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    Front-End Development
                  </h2>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-black/60">
                    Built the browser-based Country Explorer interface using
                    HTML, CSS, and JavaScript. The project included working with
                    country data, dynamic rendering, DOM manipulation,
                    filtering, and navigation between country views.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-6">
                  <p className="text-sm text-black/40">
                    Part 02
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Technologies
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
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
                    className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/60"
                  >
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  What I Worked On
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="border-t border-black/10 pt-5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    Dynamic Rendering
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Used JavaScript to dynamically render country information
                    and update the interface based on user interaction.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    Search & Filtering
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Implemented functionality for searching and filtering
                    country information within the application.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    REST API
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Retrieved country data through a REST API and handled the
                    returned JSON data in the application.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    Data Presentation
                  </h3>

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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Key Takeaways
                </p>
              </div>

              <div>
                <ul className="divide-y divide-black/10 border-y border-black/10">
                  <li className="py-6 text-base text-black/65">
                    Building browser-based interfaces with JavaScript and DOM
                    manipulation.
                  </li>

                  <li className="py-6 text-base text-black/65">
                    Working with external REST APIs and JSON data.
                  </li>

                  <li className="py-6 text-base text-black/65">
                    Implementing search, filtering, pagination, and detailed
                    data views.
                  </li>

                  <li className="py-6 text-base text-black/65">
                    Extending a front-end project from local data to
                    API-driven data.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.18em] text-black/45">
              Project Repositories
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/OmarAlotaibi-dev/COUNTRY_EXPLORER"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-black/85"
              >
                Front-End Repository ↗
              </a>

              <a
                href="https://github.com/OmarAlotaibi-dev/country-explorer-rest-API"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-black"
              >
                REST API Repository ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}