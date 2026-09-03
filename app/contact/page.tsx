import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const profiles = [
    {
      name: "LinkedIn",
      description: "Professional profile, experience, education, and career updates.",
      href: "https://www.linkedin.com/in/omar-alotaibi11071998/",
    },
    {
      name: "GitHub",
      description: "Technical projects, repositories, and development work.",
      href: "https://github.com/OmarAlotaibi-dev",
    },
    {
      name: "Credly",
      description: "Professional certifications and verified digital credentials.",
      href: "https://www.credly.com/users/omar_alotaibi/badges/credly",
    },
  ];

  const interests = [
    "Business & Systems Analysis",
    "Digital Transformation",
    "Information Systems",
    "Data & Analytics",
    "Technical & IT Roles",
    "Technology-Focused Project Work",
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#F7F8FA] text-[#111827]">
        {/* Hero */}
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-[#2563EB]/70" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Contact
  </p>
</div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s connect.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl">
              Open to professional opportunities and conversations where
              business, information systems, and technology come together.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-black/35">
  <span>Connect</span>
  <div className="h-px w-8 bg-[#2563EB]/40" />
  <span>Collaborate</span>
 <div className="h-px w-8 bg-[#2563EB]/40" />
  <span>Opportunities</span>
</div>
          </div>
        </section>

        {/* Contact Details */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-[#2563EB]/70" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Get in Touch
  </p>
</div>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  The easiest way to reach me is by email.
                </h2>

                <p className="mt-8 max-w-2xl border-l border-[#2563EB]/35 pl-5 text-base leading-7 text-black/60 sm:text-lg">
                  For professional opportunities, technical discussions,
                  collaborations, or conversations related to my work and
                  background, feel free to get in touch.
                </p>

                <div className="mt-10">
<a
  href="mailto:Alotaibiomar7@outlook.sa"
  className="group inline-flex items-center gap-3 bg-[#111827] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB]"
>
  Send Email

  <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2563EB]">
    →
  </span>
</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
 <div className="h-px w-8 bg-[#2563EB]/70" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Location
  </p>
</div>
              </div>

              <div>
<div className="group flex items-center gap-4">
<div className="h-2 w-2 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-[#2563EB]" />

  <p className="text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
    Riyadh, Saudi Arabia
  </p>
</div>
              </div>
            </div>
          </div>
        </section>

        {/* Profiles */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-[#2563EB]/70" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Professional Profiles
  </p>
</div>
              </div>

              <div className="divide-y divide-black/10 border-y border-black/10">
                {profiles.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.href}
                    target={
                      profile.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      profile.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group grid gap-4 py-7 transition-colors duration-300 hover:bg-black/[0.015] sm:grid-cols-[80px_180px_1fr_auto] sm:items-center"
                    
                  >
                    <div className="flex items-center gap-3">
  <span className="font-mono text-xs tracking-wide text-black/35">
    {String(profiles.indexOf(profile) + 1).padStart(2, "0")}
  </span>

 <div className="h-px w-6 bg-black/10 transition-all duration-300 group-hover:w-10 group-hover:bg-[#2563EB]/70" />
</div>
                   <p className="text-lg font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                      {profile.name}
                    </p>

                    <p className="max-w-xl text-sm leading-6 text-black/55">
                      {profile.description}
                    </p>

<span className="inline-flex items-center gap-2 text-sm font-medium text-black/60">
  View
  <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2563EB]">
    →
  </span>
</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Interests */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-[#2563EB]/70" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Professional Interests
  </p>
</div>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Roles that connect business needs with technology.
                </h2>

                <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                  {interests.map((interest) => (
  <div
    key={interest}
    className="group/interest border-t border-black/10 py-5"
  >
    <div className="flex items-center gap-3">
     <div className="h-px w-5 bg-black/15 transition-all duration-300 group-hover/interest:w-8 group-hover/interest:bg-[#2563EB]/70" />

      <p className="text-lg font-medium tracking-tight transition-transform duration-300 group-hover/interest:translate-x-1">
        {interest}
      </p>
    </div>
  </div>
))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume CTA */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="relative overflow-hidden bg-[#111827] px-8 py-12 text-white sm:px-12 sm:py-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
<div className="pointer-events-none absolute -bottom-32 right-24 h-72 w-72 rounded-full border border-white/[0.06]" />
<div className="relative z-10">

  

<div className="flex items-center gap-3">
 <div className="h-px w-8 bg-[#60A5FA]/80" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
    Resume
  </p>
</div>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Looking for a concise overview of my background?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
                View my resume for a summary of my education, professional
                experience, technical capabilities, research, and selected
                work.
              </p>

<div className="mt-8 flex flex-wrap gap-3">
  <a
    href="/resume"className="group inline-flex items-center gap-3 bg-white px-6 py-3 text-sm font-medium text-[#111827] transition-all duration-300 hover:-translate-y-0.5 hover:text-[#2563EB]"
    
  >
    View Resume
<span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2563EB]">
      →
    </span>
  </a>

              <a
  href="/resume.pdf"
  download
 className="group inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#60A5FA]/70 hover:text-[#60A5FA]"
>
  Download Resume

  <span className="transition-transform duration-300 group-hover:translate-y-1">
    ↓
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