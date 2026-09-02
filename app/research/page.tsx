import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ResearchPage() {
  const researchAreas = [
    "Database Systems",
    "SQL & NoSQL",
    "Artificial Intelligence",
    "Data Governance",
    "Digital Transformation",
    "Blockchain & DeFi",
  ];

  const researchProjects = [
    {
      number: "01",
      category: "Database Systems",
      title: "SQL vs NoSQL Database Performance",
      description:
        "A research study reviewing more than 140 academic and technical sources to compare SQL and NoSQL database architectures, with a focus on performance, scalability, consistency, and architectural trade-offs.",
      tags: [
        "SQL",
        "NoSQL",
        "Database Performance",
        "Scalability",
        "Data Management",
      ],
    },
    {
      number: "02",
      category: "AI Policy & Governance",
      title: "Saudi Arabia's National AI Policy",
      description:
        "Research examining Saudi Arabia's artificial intelligence policy landscape, including SDAIA's role in AI governance, data governance, digital transformation, implementation, and future challenges.",
      tags: [
        "Artificial Intelligence",
        "SDAIA",
        "AI Governance",
        "Data Governance",
        "Digital Transformation",
      ],
    },
    {
      number: "03",
      category: "Blockchain & Emerging Technology",
      title: "Blockchain & Decentralized Finance",
      description:
        "Research exploring blockchain architecture, smart contracts, decentralized applications, cryptography, and decentralized finance, including their benefits, limitations, and potential financial and enterprise applications.",
      tags: [
        "Blockchain",
        "Smart Contracts",
        "DApps",
        "Cryptography",
        "DeFi",
      ],
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
    Research
  </p>
</div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Research across databases, AI policy, and emerging technology.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl">
              Selected academic research covering database systems,
              artificial intelligence policy and governance, digital
              transformation, and blockchain technologies.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-black/35">
  <span>Databases</span>
  <div className="h-px w-8 bg-black/15" />
  <span>AI Policy</span>
  <div className="h-px w-8 bg-black/15" />
  <span>Emerging Technology</span>
</div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Research Areas
  </p>
</div>
              </div>

              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {researchAreas.map((area) => (
                  <div
  key={area}
  className="group border-t border-black/10 py-5"
>
  <div className="flex items-center gap-3">
    <div className="h-px w-5 bg-black/15 transition-all duration-300 group-hover:w-8 group-hover:bg-black/35" />

    <p className="text-lg font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1">
      {area}
    </p>
  </div>
</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Projects */}
        {researchProjects.map((research) => (
          <section
            key={research.number}
            className="group border-t border-black/10 transition-colors duration-300 hover:bg-black/[0.015]"
          >
            <div className="mx-auto max-w-7xl px-6 py-24">
              <div className="grid gap-10 lg:grid-cols-[120px_0.7fr_1.3fr] lg:gap-12">
                <div>
                  <p className="text-sm text-black/35">
                    {research.number}
                  </p>
                </div>

                <div>
  <div className="flex items-center gap-3">
    <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />

    <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/40">
      {research.category}
    </p>
  </div>

  <h2 className="mt-4 text-3xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
    {research.title}
  </h2>
</div>

                <div>
                  <p className="max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                    {research.description}
                  </p>

<div className="mt-8 grid gap-x-6 sm:grid-cols-2">
  {research.tags.map((tag) => (
    <div
      key={tag}
      className="flex items-center gap-3 border-t border-black/10 py-3 text-xs font-medium uppercase tracking-[0.12em] text-black/45"
    >
      <span className="h-px w-4 bg-black/15" />
      {tag}
    </div>
  ))}
</div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Research Approach */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Research Approach
  </p>
</div>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Connecting technical analysis with broader business and
                  policy context.
                </h2>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-black/35">
  <span>Technical Analysis</span>
  <div className="h-px w-8 bg-black/15" />
  <span>Business Context</span>
  <div className="h-px w-8 bg-black/15" />
  <span>Policy Context</span>
</div>

                <p className="mt-8 max-w-3xl border-l border-black/15 pl-5 text-base leading-7 text-black/60 sm:text-lg">
                  My research work examines both technical systems and the
                  broader environments in which technology is adopted. This
                  includes database architecture and performance, artificial
                  intelligence governance, digital transformation, and
                  emerging decentralized technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Direction */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Research Direction
  </p>
</div>
              </div>

              <div>
                <p className="max-w-4xl text-2xl font-medium leading-relaxed tracking-tight text-black/70 sm:text-3xl">
                  Exploring how data, information systems, artificial
                  intelligence, and emerging technologies shape technical and
                  organizational decision-making.
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