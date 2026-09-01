export default function SelectedCredentials() {
  const credentials = [
    {
      issuer: "Fortinet",
      title: "Fortinet Certified Associate Cybersecurity",
    },
    {
      issuer: "Fortinet",
      title: "Fortinet NSE 3 Certified in Cybersecurity",
    },
    {
      issuer: "Fortinet",
      title: "Fortinet FortiGate 7.6 Operator",
    },
    {
      issuer: "AWS",
      title: "AWS Cloud Practitioner Essentials",
    },
    {
      issuer: "IBM SkillsBuild",
      title: "Back-End Development",
    },
    {
      issuer: "IBM SkillsBuild",
      title: "Front-End Web Development",
    },
  ];

  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Section Title */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
              Selected Credentials
            </p>

            <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
              Professional credentials supporting my technical foundation.
            </h2>
          </div>

          {/* Credentials */}
          <div>
            <div className="divide-y divide-black/10 border-y border-black/10">
              {credentials.map((credential, index) => (
                <div
                  key={`${credential.issuer}-${credential.title}`}
                  className="grid gap-4 py-6 sm:grid-cols-[50px_140px_1fr] sm:items-center"
                >
                  <p className="text-sm text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-black/40">
                    {credential.issuer}
                  </p>

                  <p className="text-base font-medium leading-6 tracking-tight text-black/75">
                    {credential.title}
                  </p>
                </div>
              ))}
            </div>

<div className="mt-8 flex flex-wrap gap-3">
  <a
    href="/skills"
    className="inline-flex rounded-full border border-black/20 px-5 py-2.5 text-sm font-medium transition-all hover:border-black hover:bg-black hover:text-white"
  >
    View All Credentials →
  </a>

  <a
    href="https://www.credly.com/users/omar_alotaibi/badges/credly"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-black/85"
  >
    View on Credly ↗
  </a>
</div>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-black/45">
              Additional certifications, course credentials, and specialized
              training are listed in the Technical Skills section.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}