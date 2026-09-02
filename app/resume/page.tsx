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
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Resume & Career
  </p>
</div>

            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              A concise view of my professional and technical background.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl">
              M.S. in Management Information Systems with professional
              experience and a multidisciplinary background across systems,
              software, databases, data, and IT.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-black/35">
  <span>Business</span>
  <div className="h-px w-8 bg-black/15" />
  <span>Systems</span>
  <div className="h-px w-8 bg-black/15" />
  <span>Technology</span>
</div>

            <div className="mt-10 flex flex-wrap gap-3">
             <a
  href="/resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="group inline-flex items-center gap-3 bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/85"
>
  View Resume PDF

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>

              <a
  href="/resume.pdf"
  download
  className="group inline-flex items-center gap-3 border border-black/20 px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-black"
>
  Download Resume

  <span className="transition-transform duration-300 group-hover:translate-y-1">
    ↓
  </span>
</a>
            </div>
          </div>
        </section>

        {/* Career Profile */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Career Profile
  </p>
</div>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Connecting business requirements with information systems
                  and technology.
                </h2>

               <p className="mt-8 max-w-3xl border-l border-black/15 pl-5 text-base leading-7 text-black/60 sm:text-lg">
                  My background combines Management Information Systems with
                  experience in IT operations, data and information
                  management, and academic work across systems analysis,
                  software development, database systems, data analytics,
                  cloud computing, and emerging technologies.
                </p>

                <p className="mt-6 max-w-3xl pl-5 text-base leading-7 text-black/50 sm:text-lg">
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
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Education
  </p>
</div>
              </div>

              <div className="divide-y divide-black/10 border-y border-black/10">
                {education.map((item) => (
                  <article
  key={`${item.degree}-${item.field}`}
  className="group grid gap-6 py-8 transition-colors duration-300 hover:bg-black/[0.015] sm:grid-cols-[1fr_auto]"
>
                    <div>
<div className="flex items-center gap-3">
  <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />

  <p className="text-xs font-medium uppercase tracking-[0.15em] text-black/40">
    {item.degree}
  </p>
</div>

                      <h2 className="mt-3 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                        {item.field}
                      </h2>
<div className="mt-4 flex items-center gap-3">
  <div className="h-px w-5 bg-black/15" />

  <p className="text-base text-black/60">
    {item.university}
  </p>
</div>

<p className="mt-2 pl-8 text-sm text-black/40">
  {item.location}
</p>
                    </div>

<div>
  <p className="font-mono text-xs tracking-wide text-black/40">
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
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Professional Experience
  </p>
</div>
              </div>

              <div className="divide-y divide-black/10 border-y border-black/10">
                {experience.map((item) => (
<article
  key={`${item.organization}-${item.title}`}
  className="group py-8 transition-colors duration-300 hover:bg-black/[0.015]"
>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h2 className="text-xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                          {item.title}
                        </h2>

<div className="mt-3 flex items-center gap-3">
  <div className="h-px w-5 bg-black/15" />

  <p className="text-sm text-black/55">
    {item.organization}
  </p>
</div>

<p className="mt-1 pl-8 text-sm text-black/40">
  {item.location}
</p>
                      </div>

                     <p className="shrink-0 font-mono text-xs tracking-wide text-black/40">
                        {item.period}
                      </p>
                    </div>
<p className="mt-6 max-w-3xl border-l border-black/15 pl-5 text-sm leading-7 text-black/60">
  {item.description}
</p>
                  </article>
                ))}

 <div className="py-7">
  <a
    href="/experience"
    className="group inline-flex items-center gap-3 text-sm font-medium"
  >
    View Full Experience

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
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
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Areas of Focus
  </p>
</div>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  A multidisciplinary information systems background.
                </h2>

                <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                  {focusAreas.map((item) => (
  <div
    key={item}
    className="group/focus border-t border-black/10 py-5"
  >
    <div className="flex items-center gap-3">
      <div className="h-px w-5 bg-black/15 transition-all duration-300 group-hover/focus:w-8 group-hover/focus:bg-black/35" />

      <p className="text-lg font-medium tracking-tight transition-transform duration-300 group-hover/focus:translate-x-1">
        {item}
      </p>
    </div>
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
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Selected Work
  </p>
</div>
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
  className="group border-t border-black/10 py-6 transition-colors duration-300 hover:bg-black/[0.015]"
>
  <div className="flex items-center gap-3">
  <span className="font-mono text-xs tracking-wide text-black/35">
    01
  </span>

  <div className="h-px w-6 bg-black/10 transition-all duration-300 group-hover:w-10 group-hover:bg-black/30" />
</div>
<p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-black/40">
  Build
</p>

                    <h3 className="mt-4 text-xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
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
  className="group border-t border-black/10 py-6 transition-colors duration-300 hover:bg-black/[0.015]"
>
  <div className="flex items-center gap-3">
    <span className="font-mono text-xs tracking-wide text-black/35">
      02
    </span>

    <div className="h-px w-6 bg-black/10 transition-all duration-300 group-hover:w-10 group-hover:bg-black/30" />
  </div>
<p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-black/40">
  Research
</p>

                    <h3 className="mt-4 text-xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
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
  className="group border-t border-black/10 py-6 transition-colors duration-300 hover:bg-black/[0.015]"
>
  <div className="flex items-center gap-3">
    <span className="font-mono text-xs tracking-wide text-black/35">
      03
    </span>

    <div className="h-px w-6 bg-black/10 transition-all duration-300 group-hover:w-10 group-hover:bg-black/30" />
  </div>
<p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-black/40">
  Technical
</p>

                   <h3 className="mt-4 text-xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                      Skills
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/55">
                      Systems, software, databases, data, cloud,
                      infrastructure, and development practices.
                    </p>

<div className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
  <span>Explore</span>

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</div>
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
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Beyond the Resume
  </p>
</div>
              </div>

              <div>
<h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
  The resume is the summary.
  <span className="block text-black/45">
    The portfolio provides the context.
  </span>
</h2>

<p className="mt-8 max-w-3xl border-l border-black/15 pl-5 text-base leading-7 text-black/60 sm:text-lg">
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
            <div className="relative overflow-hidden bg-black px-8 py-12 text-white sm:px-12 sm:py-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
<div className="pointer-events-none absolute -bottom-32 right-24 h-72 w-72 rounded-full border border-white/[0.06]" />

<div className="relative z-10">
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-white/25" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
    Contact
  </p>
</div>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Interested in discussing an opportunity?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
                Contact me directly or explore my professional profiles for
                more information about my background and work.
              </p>

<a
  href="/contact"
  className="group mt-8 inline-flex items-center gap-3 bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
>
  Contact Me

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
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