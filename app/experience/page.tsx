import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ExperiencePage() {
  const experience = [
    {
      period: "May 2025 – July 2025",
      title: "IT Intern",
      organization:
        "Saudi Arabian Permanent Mission to the United Nations — New York, USA",
      description:
        "Supported day-to-day IT operations in an international organizational environment, working across user support, devices, accounts, networking, and technical documentation.",
      responsibilities: [
        "Resolved 50+ Windows hardware and software issues using internal troubleshooting and diagnostic procedures, contributing to a 20% reduction in the IT request backlog.",
        "Managed 70+ device setups, password resets, account-related requests, and support tickets using Active Directory.",
        "Configured Cisco networking equipment and printers to support staff connectivity and device access.",
        "Maintained secure LAN and VPN access and documented technical procedures.",
        "Supported daily IT operations across users, devices, connectivity, and systems.",
      ],
      impact: [
        "Coordinated the disposal of obsolete IT equipment by identifying and negotiating with a recycling provider, securing no-cost collection and an official destruction certificate with no disposal fees.",
      ],
      skills: [
        "Active Directory",
        "Windows",
        "Cisco Networking",
        "LAN",
        "VPN",
        "IT Troubleshooting",
        "Technical Documentation",
        "Vendor Coordination",
        "IT Asset Disposal",
      ],
    },
    {
      period: "March 2021 – March 2022",
      title: "Data Entry Specialist — Development Department",
      organization: "Wallan Trading Company — Riyadh, Saudi Arabia",
      description:
        "Worked with operational data, record verification, digitization, and development initiatives within the Development Department.",
      responsibilities: [
        "Verified 500+ records monthly using Microsoft Excel and cloud-based file-management platforms.",
        "Digitized paper-based records and organized electronic documentation using OneDrive and Google Drive.",
        "Implemented data-quality and verification procedures to improve consistency and reduce manual-entry errors.",
        "Supported information-management and administrative workflow improvements within the Development Department.",
      ],
      impact: [
        "Proposed separating the Genesis brand from Hyundai into a dedicated showroom to better reflect its premium market positioning; the proposal was subsequently implemented as part of the department's development initiatives.",
        "Contributed to workflow digitization initiatives that reduced data-entry processing time by 15%.",
      ],
      skills: [
        "Excel",
        "Data Verification",
        "Data Quality",
        "Record Digitization",
        "OneDrive",
        "Google Drive",
        "Workflow Improvement",
        "Business Improvement",
        "Development Planning",
      ],
    },
    {
      period: "January 2018 – February 2020",
      title: "Government Transactions Officer",
      organization:
        "Sawaaed Al-Azm Contracting Co. — Riyadh, Saudi Arabia",
      description:
        "Managed government transactions, regulatory documentation, permits, renewals, records, and coordination with relevant government entities.",
      responsibilities: [
        "Managed government transactions, regulatory documentation, permits, and renewal processes.",
        "Coordinated documentation and submissions with relevant government entities.",
        "Maintained transaction records and followed up with external agencies to support timely processing.",
        "Ensured government transactions were processed in accordance with applicable Saudi requirements.",
        "Maintained working relationships with relevant agencies to facilitate government procedures.",
      ],
      impact: [],
      skills: [
        "Government Transactions",
        "Regulatory Documentation",
        "Records Management",
        "Coordination",
        "Compliance",
        "Follow-Up",
      ],
    },
  ];

  const capabilities = [
    "IT Support & Troubleshooting",
    "Active Directory & User Support",
    "Networking & Connectivity",
    "Data Verification & Quality",
    "Workflow Digitization",
    "Technical Documentation",
    "Vendor Coordination",
    "Process Improvement",
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Professional Experience
  </p>
</div>

            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Experience across IT, data, operations, and information
              management.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl">
              Professional experience spanning technical support,
              infrastructure, data operations, workflow improvement, records,
              and organizational processes.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-black/35">
  <span>Operations</span>
  <div className="h-px w-8 bg-black/15" />
  <span>Data</span>
  <div className="h-px w-8 bg-black/15" />
  <span>Information Technology</span>
</div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="divide-y divide-black/10 border-y border-black/10">
              {experience.map((item, index) => (
                <article
  key={`${item.organization}-${item.title}`}
  className="group grid gap-10 py-14 transition-colors duration-300 hover:bg-black/[0.015] lg:grid-cols-[120px_0.8fr_1.2fr]"
>
                  {/* Number */}
<div>
  <div className="flex items-center gap-3">
    <span className="font-mono text-xs tracking-wide text-black/35">
      {String(index + 1).padStart(2, "0")}
    </span>

    <div className="h-px w-8 bg-black/10 transition-all duration-300 group-hover:w-12 group-hover:bg-black/30" />
  </div>
</div>

                  {/* Role */}
                  <div>
<div className="flex items-center gap-3">
  <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />

  <p className="font-mono text-xs uppercase tracking-[0.12em] text-black/40">
    {item.period}
  </p>
</div>

<h2 className="mt-4 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
  {item.title}
</h2>

<div className="mt-4 flex items-start gap-3">
  <div className="mt-3 h-px w-5 shrink-0 bg-black/15" />

  <p className="max-w-md text-sm leading-6 text-black/50">
    {item.organization}
  </p>
</div>
                  </div>

                  {/* Details */}
                  <div>
<p className="max-w-3xl border-l border-black/15 pl-5 text-base leading-7 text-black/60 sm:text-lg">
  {item.description}
</p>

                    {/* Responsibilities */}
                    <div className="mt-10">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/40">
                        Key Responsibilities
                      </p>

                      <ul className="mt-4 divide-y divide-black/10 border-y border-black/10">
{item.responsibilities.map((responsibility) => (
  <li
    key={responsibility}
    className="group/item flex items-start gap-3 py-4"
  >
    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-black/20 transition-colors duration-300 group-hover/item:bg-black/60" />

    <span className="text-sm leading-6 text-black/60 transition-transform duration-300 group-hover/item:translate-x-1 group-hover/item:text-black/75">
      {responsibility}
    </span>
  </li>
))}
                      </ul>
                    </div>

                    {/* Selected Impact */}
                    {item.impact.length > 0 && (
                      <div className="mt-10">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/40">
                          Selected Impact
                        </p>

                        <div className="mt-4 space-y-4">
  {item.impact.map((impact) => (
  <div
    key={impact}
    className="group/impact border-t border-black/10 py-5"
  >
    <div className="flex items-start gap-4">
      <div className="mt-3 h-px w-6 shrink-0 bg-black/15 transition-all duration-300 group-hover/impact:w-10 group-hover/impact:bg-black/40" />

      <p className="text-base font-medium leading-7 text-black/75 transition-transform duration-300 group-hover/impact:translate-x-1">
        {impact}
      </p>
    </div>
  </div>
))}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
<div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
  {item.skills.map((skill) => (
    <div
      key={skill}
      className="flex items-center gap-2 text-xs font-medium text-black/45"
    >
      <span className="h-px w-3 bg-black/15" />
      <span>{skill}</span>
    </div>
  ))}
</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Capabilities */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Professional Capabilities
  </p>
</div>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Capabilities developed through professional work.
                </h2>

                <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                  {capabilities.map((capability) => (
  <div
    key={capability}
    className="group/capability border-t border-black/10 py-5"
  >
    <div className="flex items-center gap-3">
      <div className="h-px w-5 bg-black/15 transition-all duration-300 group-hover/capability:w-8 group-hover/capability:bg-black/35" />

      <p className="text-lg font-medium tracking-tight transition-transform duration-300 group-hover/capability:translate-x-1">
        {capability}
      </p>
    </div>
  </div>
))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Progression */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Professional Progression
  </p>
</div>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  A progression toward information systems and technology.
                </h2>
<div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-black/35">
  <span>Operations</span>
  <div className="h-px w-8 bg-black/15" />
  <span>Data & Information</span>
  <div className="h-px w-8 bg-black/15" />
  <span>IT & Systems</span>
</div>
                <p className="mt-8 max-w-3xl border-l border-black/15 pl-5 text-base leading-7 text-black/60 sm:text-lg">
                  My professional background began with operational and
                  government-process responsibilities, progressed into data
                  and information-management work, and later expanded into
                  hands-on IT support and infrastructure experience.
                </p>

               <p className="mt-6 max-w-3xl pl-5 text-base leading-7 text-black/50 sm:text-lg">
                  Together with my graduate work in Management Information
                  Systems, these experiences have given me exposure to both
                  organizational processes and the technical systems that
                  support them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Beyond Professional Experience */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Beyond Professional Experience
  </p>
</div>
              </div>

              <div>
                <p className="max-w-4xl text-2xl font-medium leading-relaxed tracking-tight text-black/70 sm:text-3xl">
                  Professional experience and technical project work are
                  presented separately throughout this portfolio.
                </p>

               <p className="mt-8 max-w-3xl border-l border-black/15 pl-5 text-base leading-7 text-black/60 sm:text-lg">
                  This page focuses specifically on formal employment and
                  professional responsibilities. Technical applications,
                  systems-analysis work, database projects, and research are
                  documented separately in the Projects and Research sections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Step */}
       {/* Next Step */}
<section className="border-t border-black/10">
  <div className="mx-auto max-w-7xl px-6 py-24">
    <div className="relative overflow-hidden bg-black px-8 py-12 text-white sm:px-12 sm:py-16">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-32 right-24 h-72 w-72 rounded-full border border-white/[0.06]" />

      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-white/25" />

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
            Explore More
          </p>
        </div>

        <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          See how my technical and academic work complements my
          professional experience.
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/projects"
            className="group inline-flex items-center gap-3 bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
          >
            View Projects

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="/research"
            className="group inline-flex items-center gap-3 border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white"
          >
            View Research

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      <Footer />
    </>
  );
}