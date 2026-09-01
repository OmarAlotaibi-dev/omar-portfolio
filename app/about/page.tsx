import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
              About
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Business, systems, and technology from an MIS perspective.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl">
              I hold an M.S. in Management Information Systems with a
              multidisciplinary background across systems analysis, software
              development, databases, data analytics, cloud technologies, and
              enterprise IT.
            </p>
          </div>
        </section>

        {/* Professional Profile */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Professional Profile
                </p>
              </div>

              <div>
                <p className="max-w-3xl text-xl leading-9 text-black/70">
                  My background combines business and information systems with
                  hands-on technical work across software, databases, data, and
                  IT infrastructure.
                </p>

                <p className="mt-8 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  Through graduate-level projects and professional experience,
                  I have worked with requirements analysis, systems modeling,
                  application development, database design, data analysis,
                  networking, technical support, and technical documentation.
                  This combination allows me to understand both the business
                  context of a problem and the technology used to support it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Education
                </p>
              </div>

              <div>
                <div className="border-t border-black/10 pt-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-black/40">
                        Master of Science
                      </p>

                      <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                        Management Information Systems
                      </h2>

                      <p className="mt-3 text-base text-black/60">
                        Fairleigh Dickinson University
                      </p>

                      <p className="mt-2 text-sm text-black/40">
                        New Jersey, USA
                      </p>
                    </div>

                    <p className="text-sm text-black/40">
                      January 2026
                    </p>
                  </div>
                </div>

                <div className="mt-10 border-t border-black/10 pt-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-black/40">
                        Bachelor of Arts
                      </p>

                      <h1 className="mt-2 text-2xl font-semibold tracking-tight">
                        Information Science, 
                       
                      </h1>
                      <h2> Information Resources Management and Services</h2>

                      <p className="mt-3 text-base text-black/60">
                        King Saud University
                      </p>

                      <p className="mt-2 text-sm text-black/40">
                        Riyadh, Saudi Arabia
                      </p>
                    </div>

                    <p className="text-sm text-black/40">
                      December 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Experience
                </p>
              </div>

              <div>
                <div className="border-t border-black/10 pt-6">
                  <p className="text-sm text-black/40">
                    May 2025 – July 2025
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    IT Intern
                  </h2>

                  <p className="mt-2 text-base text-black/50">
                    Saudi Arabian Permanent Mission to the United Nations
                  </p>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-black/60">
                    Supported daily IT operations in New York, including
                    Windows troubleshooting, Active Directory, device setup,
                    Cisco networking equipment, printers, LAN and VPN
                    connectivity, and technical documentation.
                  </p>
                </div>

                <div className="mt-10 border-t border-black/10 pt-6">
                  <p className="text-sm text-black/40">
                    March 2021 – March 2022
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    Data Entry Specialist
                  </h2>

                  <p className="mt-2 text-base text-black/50">
                    Wallan Trading Company — Development Department
                  </p>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-black/60">
                    Worked with record verification, Excel, cloud-based file
                    management, document digitization, and data-quality
                    processes while supporting information-management
                    workflows.
                  </p>
                </div>

                <div className="mt-10 border-t border-black/10 pt-6">
                  <p className="text-sm text-black/40">
                    January 2018 – February 2020
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    Government Transactions Officer
                  </h2>

                  <p className="mt-2 text-base text-black/50">
                    Sawaaed Al-Azm Contracting Co.
                  </p>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-black/60">
                    Handled government transactions, regulatory documentation,
                    permits, renewals, records, compliance-related processes,
                    and coordination with government entities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Focus */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Areas of Focus
                </p>
              </div>

              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {[
                  "Business & Systems Analysis",
                  "Software & Web Development",
                  "Database Systems",
                  "Data & Analytics",
                  "Cloud & IT Infrastructure",
                  "Digital Transformation",
                ].map((area) => (
                  <div
                    key={area}
                    className="border-t border-black/10 pt-5"
                  >
                    <p className="text-lg font-medium tracking-tight">
                      {area}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Approach
                </p>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Understand the problem. Structure the requirements. Design
                  the solution.
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  I approach technical work by first understanding the problem
                  and its requirements, then organizing those requirements into
                  a structured system or technical approach.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  Depending on the project, this can involve process and
                  systems analysis, UML and database modeling, application
                  development, API integration, data analysis, testing, or
                  technical documentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Direction */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Career Direction
                </p>
              </div>

              <div>
                <p className="max-w-3xl text-xl leading-9 text-black/70">
                  Pursuing roles that connect business needs with information
                  systems and technology.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  My career interests include business and systems analysis,
                  digital transformation, data-related roles, and technical
                  positions where I can combine analytical thinking with my
                  broader information systems background.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}