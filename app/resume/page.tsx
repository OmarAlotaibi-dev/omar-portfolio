import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ResumePage() {
  const focusAreas = [
    "Business Analysis",
    "Systems Analysis",
    "Information Systems",
    "Software & Web Development",
    "Database Systems",
    "Data & Analytics",
    "Cloud & IT Infrastructure",
    "Digital Transformation",
  ];

  const experience = [
    {
      period: "May 2025 – July 2025",
      title: "IT Intern",
      organization:
        "Saudi Arabian Permanent Mission to the United Nations",
      location: "New York, USA",
      description:
        "Supported IT operations across Windows troubleshooting, Active Directory, device setup, Cisco networking equipment, printers, and LAN/VPN connectivity.",
    },
    {
      period: "March 2021 – March 2022",
      title: "Data Entry Specialist — Development Department",
      organization: "Wallan Trading Company",
      location: "Riyadh, Saudi Arabia",
      description:
        "Worked across data verification, record digitization, cloud-based document management, data quality, and workflow improvement.",
    },
    {
      period: "January 2018 – February 2020",
      title: "Government Transactions Officer",
      organization: "Sawaaed Al-Azm Contracting Co.",
      location: "Riyadh, Saudi Arabia",
      description:
        "Managed government transactions, regulatory documentation, permits, renewals, records, and coordination with government entities.",
    },
  ];

  const education = [
    {
      degree: "Master of Science",
      field: "Management Information Systems",
      university: "Fairleigh Dickinson University",
      location: "New Jersey, USA",
      date: "January 2026",
    },
    {
      degree: "Bachelor of Arts ",
      field: "Information Science, Information Resources Management and Services",
      university: "King Saud University",
      location: "Riyadh, Saudi Arabia",
      date: "December 2020",
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
              Resume & Career
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              A concise view of my professional and technical background.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl">
              M.S. in Management Information Systems with professional
              experience and a multidisciplinary background across systems,
              software, databases, data, and IT.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
              >
                View Resume PDF
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-black"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Career Profile */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Career Profile
                </p>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Connecting business requirements with information systems
                  and technology.
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  My background combines Management Information Systems with
                  experience in IT operations, data and information
                  management, and academic work across systems analysis,
                  software development, database systems, data analytics,
                  cloud computing, and emerging technologies.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  I am particularly interested in roles where understanding
                  business requirements and technical systems are both
                  important to solving problems and improving how
                  organizations work.
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

              <div className="divide-y divide-black/10 border-y border-black/10">
                {education.map((item) => (
                  <article
                    key={`${item.degree}-${item.field}`}
                    className="grid gap-6 py-8 sm:grid-cols-[1fr_auto]"
                  >
                    <div>
                      <p className="text-sm text-black/40">
                        {item.degree}
                      </p>

                      <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                        {item.field}
                      </h2>

                      <p className="mt-3 text-base text-black/60">
                        {item.university}
                      </p>

                      <p className="mt-2 text-sm text-black/40">
                        {item.location}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-black/40">
                        {item.date}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Professional Experience
                </p>
              </div>

              <div className="divide-y divide-black/10 border-y border-black/10">
                {experience.map((item) => (
                  <article
                    key={`${item.organization}-${item.title}`}
                    className="py-8"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h2 className="text-xl font-semibold tracking-tight">
                          {item.title}
                        </h2>

                        <p className="mt-2 text-sm text-black/55">
                          {item.organization}
                        </p>

                        <p className="mt-1 text-sm text-black/40">
                          {item.location}
                        </p>
                      </div>

                      <p className="shrink-0 text-sm text-black/40">
                        {item.period}
                      </p>
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-7 text-black/60">
                      {item.description}
                    </p>
                  </article>
                ))}

                <div className="py-7">
                  <a
                    href="/experience"
                    className="text-sm font-medium transition-opacity hover:opacity-60"
                  >
                    View Full Experience →
                  </a>
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

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  A multidisciplinary information systems background.
                </h2>

                <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                  {focusAreas.map((item) => (
                    <div
                      key={item}
                      className="border-t border-black/10 pt-5"
                    >
                      <p className="text-lg font-medium tracking-tight">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Selected Work
                </p>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Explore the work behind the resume.
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  The portfolio provides additional context around my
                  technical projects, systems analysis and design work,
                  academic research, and technical capabilities.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <a
                    href="/projects"
                    className="group rounded-2xl border border-black/10 p-6 transition-colors hover:border-black/30"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-black/40">
                      Build
                    </p>

                    <h3 className="mt-4 text-xl font-semibold tracking-tight">
                      Projects
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/55">
                      Software development, APIs, databases, and systems
                      analysis work.
                    </p>

                    <p className="mt-6 text-sm font-medium transition-transform group-hover:translate-x-1">
                      Explore →
                    </p>
                  </a>

                  <a
                    href="/research"
                    className="group rounded-2xl border border-black/10 p-6 transition-colors hover:border-black/30"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-black/40">
                      Research
                    </p>

                    <h3 className="mt-4 text-xl font-semibold tracking-tight">
                      Academic Research
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/55">
                      Databases, AI policy and governance, blockchain, and
                      emerging technology.
                    </p>

                    <p className="mt-6 text-sm font-medium transition-transform group-hover:translate-x-1">
                      Explore →
                    </p>
                  </a>

                  <a
                    href="/skills"
                    className="group rounded-2xl border border-black/10 p-6 transition-colors hover:border-black/30"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-black/40">
                      Technical
                    </p>

                    <h3 className="mt-4 text-xl font-semibold tracking-tight">
                      Skills
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/55">
                      Systems, software, databases, data, cloud,
                      infrastructure, and development practices.
                    </p>

                    <p className="mt-6 text-sm font-medium transition-transform group-hover:translate-x-1">
                      Explore →
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Philosophy */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Beyond the Resume
                </p>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  The resume is the summary. The portfolio provides the
                  context.
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  A resume is intentionally concise. This portfolio expands on
                  selected projects, research, technical capabilities, and
                  professional experience without turning the resume itself
                  into a long technical document.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="rounded-3xl bg-black px-8 py-12 text-white sm:px-12 sm:py-16">
              <p className="text-sm uppercase tracking-[0.18em] text-white/50">
                Contact
              </p>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Interested in discussing an opportunity?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
                Contact me directly or explore my professional profiles for
                more information about my background and work.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-80"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}