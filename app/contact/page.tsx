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

      <main>
        {/* Hero */}
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
              Contact
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s connect.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl">
              Open to professional opportunities and conversations where
              business, information systems, and technology come together.
            </p>
          </div>
        </section>

        {/* Contact Details */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Get in Touch
                </p>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  The easiest way to reach me is by email.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-7 text-black/60 sm:text-lg">
                  For professional opportunities, technical discussions,
                  collaborations, or conversations related to my work and
                  background, feel free to get in touch.
                </p>

                <div className="mt-10">
                  <a
                    href="mailto:Alotaibiomar7@outlook.sa"
                    className="inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
                  >
                    Send Email
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Location
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold tracking-tight">
                  Riyadh, Saudi Arabia
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Profiles */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Professional Profiles
                </p>
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
                    className="group grid gap-4 py-7 sm:grid-cols-[180px_1fr_auto] sm:items-center"
                  >
                    <p className="text-lg font-semibold tracking-tight">
                      {profile.name}
                    </p>

                    <p className="max-w-xl text-sm leading-6 text-black/55">
                      {profile.description}
                    </p>

                    <span className="text-sm font-medium transition-transform group-hover:translate-x-1">
                      View →
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Professional Interests
                </p>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Roles that connect business needs with technology.
                </h2>

                <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                  {interests.map((interest) => (
                    <div
                      key={interest}
                      className="border-t border-black/10 pt-5"
                    >
                      <p className="text-lg font-medium tracking-tight">
                        {interest}
                      </p>
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
            <div className="rounded-3xl bg-black px-8 py-12 text-white sm:px-12 sm:py-16">
              <p className="text-sm uppercase tracking-[0.18em] text-white/50">
                Resume
              </p>

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
                  href="/resume"
                  className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-80"
                >
                  View Resume
                </a>

                <a
                  href="/resume.pdf"
                  className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white"
                >
                  Download PDF
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