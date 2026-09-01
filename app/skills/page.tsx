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
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
              Technical Skills
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Technical capabilities across systems, software, data, and IT.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl">
              A multidisciplinary technical foundation developed through
              graduate study, technical projects, professional IT experience,
              and specialized training.
            </p>
          </div>
        </section>

        {/* Skill Groups */}
        <section>
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="divide-y divide-black/10 border-y border-black/10">
              {skillGroups.map((group, index) => (
                <article
                  key={group.title}
                  className="grid gap-8 py-10 lg:grid-cols-[120px_0.7fr_1.3fr]"
                >
                  <p className="text-sm text-black/35">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h2 className="text-2xl font-semibold tracking-tight">
                    {group.title}
                  </h2>

                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/60"
                      >
                        {skill}
                      </span>
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Certifications & Credentials
                </p>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                 Professional credentials.
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  Professional certifications, completion credentials, and
                  training badges across cybersecurity, cloud computing,
                  software development, and technology.
                </p>

                <div className="mt-12 space-y-10">
                  {credentials.map((credential) => (
                    <div key={credential.organization}>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {credential.organization}
                      </h3>

                      <div className="mt-5 divide-y divide-black/10 border-y border-black/10">
                        {credential.items.map((item) => (
                          <div
                            key={item}
                            className="py-4 text-sm leading-6 text-black/60"
                          >
                            {item}
                            
                          </div>
                        ))}
                        
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <a
                href="https://www.credly.com/users/omar_alotaibi/badges/credly"
                    target="_blank"
                        rel="noopener noreferrer"
                            className="inline-flex rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-black/85"
                                >
                                View Verified Credentials on Credly ↗
  </a>
</div>
        </section>
        

        {/* Training */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Specialized Training
                </p>
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
                      className="grid gap-4 py-7 sm:grid-cols-[0.8fr_1.2fr]"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-black/40">
                          {item.provider}
                        </p>

                        <h3 className="mt-2 text-lg font-semibold tracking-tight">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-sm leading-6 text-black/55">
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Technical Approach
                </p>
              </div>

              <div>
                <p className="max-w-3xl text-xl leading-9 text-black/70">
                  Understanding how business requirements, information
                  systems, software, databases, and infrastructure connect.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
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