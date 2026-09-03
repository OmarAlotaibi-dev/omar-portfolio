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
            <div className="flex items-center gap-3">
  <div className="h-px w-8 bg-[#2563EB]/70" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Selected Credentials
  </p>
</div>

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
  className="group grid gap-4 px-0 py-6 transition-all duration-300 hover:bg-black/[0.025] hover:px-5 sm:grid-cols-[70px_140px_1fr] sm:items-center"
>
                <div className="flex items-center gap-3">
  <span className="font-mono text-xs tracking-wider text-black/30">
    {String(index + 1).padStart(2, "0")}
  </span>

 <div className="h-px w-5 bg-black/10 transition-all duration-300 group-hover:w-8 group-hover:bg-[#2563EB]/70" />
</div>

                  <div className="flex items-center gap-2">
  <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-black/50" />

                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-black/40 transition-colors duration-300 group-hover:text-black/60">
                  {credential.issuer}
</p>
</div>

                  <p className="text-base font-medium leading-6 tracking-tight text-black/70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
                  {credential.title}
</p>


</div>
))}
</div>

<div className="mt-8 flex flex-wrap gap-3">
<a
  href="/skills"
  className="group inline-flex items-center gap-3 text-sm font-medium"
>
  <span className="border-b border-black/30 pb-1 transition-colors group-hover:border-black">
    View All Credentials
  </span>

 <span className="text-black/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#2563EB]">
    →
  </span>
</a>

<a
  href="https://www.credly.com/users/omar_alotaibi/badges/credly"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-3 bg-[#111827] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB]"
>
  <span>View on Credly</span>

  <span className="text-white/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
    ↗
  </span>
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