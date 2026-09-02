import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SkillsPage() {
  const skillGroups = [
    {
      title: "Software & Web",
      skills: [
        "Java",
        "JavaScript",
        "PHP",
        "Node.js",
        "HTML",
        "CSS",
        "REST APIs",
        "JSON",
      ],
    },
    {
      title: "Systems Analysis & Design",
      skills: [
        "Business Analysis",
        "Systems Analysis",
        "Requirements Gathering",
        "Requirements Analysis",
        "Functional Requirements",
        "Non-Functional Requirements",
        "Process Mapping",
        "UML",
        "Use Case Modeling",
        "ERD",
        "RBAC",
        "MVC",
        "Technical Documentation",
      ],
    },
    {
      title: "Databases, Data & Analytics",
      skills: [
        "SQL",
        "MySQL",
        "Oracle",
        "PostgreSQL",
        "MongoDB",
        "Database Design",
        "Normalization",
        "R",
        "Power BI",
        "Excel",
        "Data Analysis",
        "Data Visualization",
        "Data Quality",
        "Hadoop",
        "Spark",
      ],
    },
    {
      title: "Cloud, Infrastructure & Security",
      skills: [
        "AWS",
        "Cloud Computing",
        "Active Directory",
        "Cisco Networking",
        "LAN",
        "VPN",
        "Fortinet",
        "FortiGate",
        "Firewalls",
        "Network Security",
        "Windows",
        "Linux",
        "IT Troubleshooting",
      ],
    },
    {
      title: "AI & Computer Vision Foundations",
      skills: [
        "AI Fundamentals",
        "AI Policy",
        "AI Governance",
        "Computer Vision",
        "YOLO",
        "Ultralytics",
        "OpenCV",
        "Object Detection Concepts",
      ],
    },
    {
      title: "Development Practices & Tools",
      skills: [
        "Git",
        "GitHub",
        "API Testing",
        "Postman",
        "Testing & QA",
        "Agile",
        "SDLC",
        "VS Code",
        "XAMPP",
        "MySQL Workbench",
      ],
    },
  ];

  const credentials = [
    {
      organization: "Fortinet",
      items: [
        "Fortinet Certified Associate Cybersecurity",
        "Fortinet NSE 3 Certified in Cybersecurity",
        "Fortinet FortiGate 7.6 Operator",
      ],
    },
    {
      organization: "AWS",
      items: [
        "AWS Cloud Practitioner Essentials",
        "Introduction to Cloud 101",
        "Introduction to Generative AI",
        "Getting Started with Storage",
        "Web Builder",
      ],
    },
    {
      organization: "IBM SkillsBuild",
      items: [
        "Back-End Development",
        "Front-End Web Development",
        "Web Development Fundamentals",
        "Agile Explorer",
        "Enterprise Design Thinking Practitioner",
        "Project Management Fundamentals",
      ],
    },
  ];

  const training = [
    {
      title: "Computer Vision for Developers",
      provider: "SDAIA",
      description:
        "Training covering computer vision fundamentals, Ultralytics, YOLO, OpenCV, and object-detection concepts.",
    },
    {
      title: "AI and Career Empowerment",
      provider: "University of Maryland",
      description:
        "Training covering artificial intelligence concepts, technology career development, and professional technology skills.",
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
    Technical Skills
  </p>
</div>

            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Technical capabilities across systems, software, data, and IT.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl">
              A multidisciplinary technical foundation developed through
              graduate study, technical projects, professional IT experience,
              and specialized training.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-black/35">
  <span>Systems</span>
  <div className="h-px w-8 bg-black/15" />
  <span>Software</span>
  <div className="h-px w-8 bg-black/15" />
  <span>Data</span>
  <div className="h-px w-8 bg-black/15" />
  <span>Infrastructure</span>
</div>
          </div>
        </section>

        {/* Skill Groups */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="divide-y divide-black/10 border-y border-black/10">
              {skillGroups.map((group, index) => (
<article
  key={group.title}
  className="group grid gap-8 py-10 transition-colors duration-300 hover:bg-black/[0.015] lg:grid-cols-[120px_0.7fr_1.3fr]"
>
<div className="flex items-center gap-3">
  <span className="font-mono text-xs tracking-wide text-black/35">
    {String(index + 1).padStart(2, "0")}
  </span>

  <div className="h-px w-8 bg-black/10 transition-all duration-300 group-hover:w-12 group-hover:bg-black/30" />
</div>

<h2 className="text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
  {group.title}
</h2>

                  <div className="grid gap-x-6 sm:grid-cols-2">
  {group.skills.map((skill) => (
    <div
      key={skill}
      className="flex items-center gap-3 border-t border-black/10 py-3"
    >
      <span className="h-1 w-1 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-black/45" />

      <span className="text-sm text-black/60">
        {skill}
      </span>
    </div>
  ))}
</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Certifications & Credentials
  </p>

</div>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                 Professional credentials.
                </h2>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-black/35">
  <span>Cybersecurity</span>
  <div className="h-px w-8 bg-black/15" />
  <span>Cloud</span>
  <div className="h-px w-8 bg-black/15" />
  <span>Software Development</span>
</div>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  Professional certifications, completion credentials, and
                  training badges across cybersecurity, cloud computing,
                  software development, and technology.
                </p>

                <div className="mt-12 space-y-10">
{credentials.map((credential, index) => (
  <div key={credential.organization} className="group/credential">
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs tracking-wide text-black/30">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="h-px w-6 bg-black/10 transition-all duration-300 group-hover/credential:w-10 group-hover/credential:bg-black/30" />

      <h3 className="text-xl font-semibold tracking-tight transition-transform duration-300 group-hover/credential:translate-x-1">
        {credential.organization}
      </h3>
    </div>

                      <div className="mt-5 divide-y divide-black/10 border-y border-black/10">
{credential.items.map((item) => (
  <div
    key={item}
    className="group/item flex items-center gap-3 py-4"
  >
    <span className="h-1 w-1 rounded-full bg-black/20 transition-colors duration-300 group-hover/item:bg-black/60" />

    <span className="text-sm leading-6 text-black/60 transition-transform duration-300 group-hover/item:translate-x-1 group-hover/item:text-black/80">
      {item}
    </span>
  </div>
))}
                        
                      </div>
                    </div>
                  ))}
                </div>
                             <div className="mt-10">
                  <a
                    href="https://www.credly.com/users/omar_alotaibi/badges/credly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-black px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/85"
                  >
                    View Verified Credentials on Credly

                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* Training */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Specialized Training
  </p>
</div>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Additional learning in AI and computer vision.
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  These areas represent specialized training and foundational
                  knowledge and are presented separately from project-based
                  implementation experience.
                </p>

                <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
                  {training.map((item) => (
                   <article
  key={item.title}
  className="group grid gap-4 py-7 transition-colors duration-300 hover:bg-black/[0.015] sm:grid-cols-[0.8fr_1.2fr]"
>
                      <div>
<div className="flex items-center gap-3">
  <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />

  <p className="text-xs font-medium uppercase tracking-[0.15em] text-black/40">
    {item.provider}
  </p>
</div>

                        <h3 className="mt-2 text-lg font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                          {item.title}
                        </h3>
                      </div>

<p className="border-l border-black/10 pl-5 text-sm leading-6 text-black/55 transition-colors duration-300 group-hover:border-black/25 group-hover:text-black/65">
  {item.description}
</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Approach */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Technical Approach
  </p>
</div>
              </div>

              <div>
<p className="max-w-4xl text-2xl font-medium leading-relaxed tracking-tight text-black/70 sm:text-3xl">
  Understanding how business requirements, information
  systems, software, databases, and infrastructure connect.
</p>

                <p className="mt-8 max-w-3xl border-l border-black/15 pl-5 text-base leading-7 text-black/60 sm:text-lg">
                  My background spans multiple layers of information
                  technology. Depending on the project, this can involve
                  analyzing requirements, modeling a system, working with
                  databases and APIs, developing applications, analyzing data,
                  testing, or supporting IT infrastructure.
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