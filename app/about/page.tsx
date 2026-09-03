import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F7F8FA] text-[#111827]">
        {/* About page */}
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
     <div className="flex items-center gap-3">
  <div className="h-px w-8 bg-[#2563EB]/70" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    About
  </p>
  
</div>


            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Business, systems, and technology from an MIS perspective.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl">
              I hold an M.S. in Management Information Systems with a
              multidisciplinary background across systems analysis, software
              development, databases, data analytics, cloud technologies, and
              enterprise IT.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium uppercase tracking-[0.16em] text-black/35">
  <span>Business</span>
  <span className="h-px w-8 bg-[#2563EB]/40" />

  <span>Systems</span>
  <span className="h-px w-8 bg-[#2563EB]/40" />

  <span>Technology</span>
</div>
          </div>
          
        </section>

        {/* Professional Profile */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
 <div className="h-px w-8 bg-[#2563EB]/70" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Professional Profile
  </p>
</div>
              </div>

              <div>
                <p className="max-w-3xl text-2xl font-medium leading-9 tracking-tight text-black/80 sm:text-3xl sm:leading-10">
                  My background combines business and information systems with
                  hands-on technical work across software, databases, data, and
                  IT infrastructure.
                </p>
<div className="mt-8 flex items-center gap-3">
  <span className="text-xs font-medium uppercase tracking-[0.16em] text-black/35">
    Profile Depth
  </span>

  <div className="h-px flex-1 bg-black/10" />
</div>
                <p className="mt-4 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
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
<div className="flex items-center gap-3">
 <div className="h-px w-8 bg-[#2563EB]/70" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Education
  </p>
</div>
              </div>

              <div>
                <div className="group border-t border-black/10 px-0 py-6 transition-all duration-300 hover:bg-black/[0.025] hover:px-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
<div className="flex items-center gap-3">
  <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-[#2563EB]" />

  <p className="text-xs font-medium uppercase tracking-[0.14em] text-black/40">
    Master of Science
  </p>
</div>
<h2 className="mt-3 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
  Management Information Systems
</h2>

                      <p className="mt-3 text-base text-black/60">
                        Fairleigh Dickinson University
                      </p>

                      <p className="mt-2 text-sm text-black/40">
                        New Jersey, USA
                      </p>
                    </div>

<p className="font-mono text-xs tracking-wide text-black/35">
  January 2026
</p>
                  </div>
                </div>

                <div className="group mt-10 border-t border-black/10 px-0 py-6 transition-all duration-300 hover:bg-black/[0.025] hover:px-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
<div className="flex items-center gap-3">
  <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-[#2563EB]" />

  <p className="text-xs font-medium uppercase tracking-[0.14em] text-black/40">
    Bachelor of Arts
  </p>
</div>

                     <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-snug tracking-tight transition-transform duration-300 group-hover:translate-x-1">
  Information Science,
  <span className="block">
    Information Resources Management and Services
  </span>
</h2>

                      <p className="mt-3 text-base text-black/60">
                        King Saud University
                      </p>

                      <p className="mt-2 text-sm text-black/40">
                        Riyadh, Saudi Arabia
                      </p>
                    </div>
<p className="font-mono text-xs tracking-wide text-black/35">
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
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-[#2563EB]/70" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Experience
  </p>
</div>
              </div>

              <div>
                <div className="group border-t border-black/10 px-0 py-7 transition-all duration-300 hover:bg-black/[0.025] hover:px-5">
<div className="flex items-center gap-3">
  <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-[#2563EB]" />

  <p className="font-mono text-xs tracking-wide text-black/35">
    May 2025 – July 2025
  </p>
</div>

<h2 className="mt-3 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
  IT Intern
</h2>

<div className="mt-2 flex items-center gap-3">
  <div className="h-px w-5 bg-black/15" />

  <p className="text-sm font-medium text-black/50">
    Saudi Arabian Permanent Mission to the United Nations
  </p>
</div>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-black/60">
                    Supported daily IT operations in New York, including
                    Windows troubleshooting, Active Directory, device setup,
                    Cisco networking equipment, printers, LAN and VPN
                    connectivity, and technical documentation.
                  </p>
                </div>

                <div className="group mt-10 border-t border-black/10 px-0 py-7 transition-all duration-300 hover:bg-black/[0.025] hover:px-5">
<div className="flex items-center gap-3">
  <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-[#2563EB]" />

  <p className="font-mono text-xs tracking-wide text-black/35">
    March 2021 – March 2022
  </p>
</div>
<h2 className="mt-3 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
  Data Entry Specialist
</h2>

<div className="mt-2 flex items-center gap-3">
  <div className="h-px w-5 bg-black/15" />

  <p className="text-sm font-medium text-black/50">
    Wallan Trading Company — Development Department
  </p>
</div>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-black/60">
                    Worked with record verification, Excel, cloud-based file
                    management, document digitization, and data-quality
                    processes while supporting information-management
                    workflows.
                  </p>
                </div>

                <div className="group mt-10 border-t border-black/10 px-0 py-7 transition-all duration-300 hover:bg-black/[0.025] hover:px-5">
<div className="flex items-center gap-3">
 <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-[#2563EB]" />

  <p className="font-mono text-xs tracking-wide text-black/35">
    January 2018 – February 2020
  </p>
</div>

<h2 className="mt-3 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
  Government Transactions Officer
</h2>

<div className="mt-2 flex items-center gap-3">
  <div className="h-px w-5 bg-black/15" />

  <p className="text-sm font-medium text-black/50">
    Sawaaed Al-Azm Contracting Co.
  </p>
</div>

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
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-[#2563EB]/70" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Areas of Focus
  </p>
</div>
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
  className="group border-t border-black/10 py-5 transition-all duration-300"
>
  <div className="flex items-center gap-4">
   <div className="h-px w-6 bg-black/10 transition-all duration-300 group-hover:w-10 group-hover:bg-[#2563EB]/70" />

    <p className="text-lg font-medium tracking-tight text-black/75 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
      {area}
    </p>
  </div>
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
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-[#2563EB]/70" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Approach
  </p>
</div>
              </div>

              <div>
<h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
  Understand the problem.
  <span className="block text-black/55">
    Structure the requirements.
  </span>
  <span className="block text-black/40">
    Design the solution.
  </span>
</h2>
<div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-black/35">
  <span>01 Understand</span>

  <div className="h-px w-8 bg-black/15" />

  <span>02 Structure</span>

  <div className="h-px w-8 bg-black/15" />

  <span>03 Design</span>
</div>

                <p className="mt-8 max-w-3xl border-l border-black/15 pl-5 text-base leading-7 text-black/60 sm:text-lg">
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
<div className="flex items-center gap-3">
 <div className="h-px w-8 bg-[#2563EB]/70" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Career Direction
  </p>
</div>
              </div>

              <div>
<h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
  Pursuing roles that connect business needs with information
  systems and technology.
</h2>
<div className="mt-8 flex flex-wrap items-center gap-4">
  <span className="text-xs font-medium uppercase tracking-[0.16em] text-black/40">
    Business
  </span>

  <div className="h-px w-10 bg-black/15" />

  <span className="text-xs font-medium uppercase tracking-[0.16em] text-black/40">
    Information Systems
  </span>

  <div className="h-px w-10 bg-black/15" />

  <span className="text-xs font-medium uppercase tracking-[0.16em] text-black/40">
    Technology
  </span>
</div>

                <p className="mt-8 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
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