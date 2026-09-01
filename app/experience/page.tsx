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
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
              Professional Experience
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Experience across IT, data, operations, and information
              management.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl">
              Professional experience spanning technical support,
              infrastructure, data operations, workflow improvement, records,
              and organizational processes.
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="divide-y divide-black/10 border-y border-black/10">
              {experience.map((item, index) => (
                <article
                  key={`${item.organization}-${item.title}`}
                  className="grid gap-10 py-14 lg:grid-cols-[120px_0.8fr_1.2fr]"
                >
                  {/* Number */}
                  <div>
                    <p className="text-sm text-black/35">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  {/* Role */}
                  <div>
                    <p className="text-sm uppercase tracking-[0.15em] text-black/40">
                      {item.period}
                    </p>

                    <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {item.title}
                    </h2>

                    <p className="mt-3 max-w-md text-sm leading-6 text-black/50">
                      {item.organization}
                    </p>
                  </div>

                  {/* Details */}
                  <div>
                    <p className="max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
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
                            className="py-4 text-sm leading-6 text-black/60"
                          >
                            {responsibility}
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
                              className="rounded-2xl border border-black/10 p-6"
                            >
                              <p className="text-base font-medium leading-7 text-black/75">
                                {impact}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-black/50"
                        >
                          {skill}
                        </span>
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Professional Capabilities
                </p>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Capabilities developed through professional work.
                </h2>

                <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                  {capabilities.map((capability) => (
                    <div
                      key={capability}
                      className="border-t border-black/10 pt-5"
                    >
                      <p className="text-lg font-medium tracking-tight">
                        {capability}
                      </p>
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Professional Progression
                </p>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  A progression toward information systems and technology.
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  My professional background began with operational and
                  government-process responsibilities, progressed into data
                  and information-management work, and later expanded into
                  hands-on IT support and infrastructure experience.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Beyond Professional Experience
                </p>
              </div>

              <div>
                <p className="max-w-3xl text-xl leading-9 text-black/70">
                  Professional experience and technical project work are
                  presented separately throughout this portfolio.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
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
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="rounded-3xl bg-black px-8 py-12 text-white sm:px-12 sm:py-16">
              <p className="text-sm uppercase tracking-[0.18em] text-white/50">
                Explore More
              </p>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                See how my technical and academic work complements my
                professional experience.
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/projects"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-80"
                >
                  View Projects
                </a>

                <a
                  href="/research"
                  className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white"
                >
                  View Research
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}