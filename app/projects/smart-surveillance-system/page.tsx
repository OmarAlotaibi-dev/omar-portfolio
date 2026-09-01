import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SmartSurveillanceSystemPage() {
  const functionalities = [
    {
      number: "01",
      title: "Motion Detection",
      description:
        "Analyzed motion-detection scenarios covering visitors, animals, debris, vehicles, notifications, and system responses.",
    },
    {
      number: "02",
      title: "Live Feed",
      description:
        "Modeled how homeowners access live video after a notification or directly through the application.",
    },
    {
      number: "03",
      title: "Video Playback",
      description:
        "Defined scenarios for accessing recorded motion events through missed notifications and the video library.",
    },
    {
      number: "04",
      title: "Account Sign Up",
      description:
        "Modeled successful and unsuccessful account-registration scenarios, confirmation, and validation behavior.",
    },
    {
      number: "05",
      title: "Family Member Management",
      description:
        "Analyzed the process of adding household members and handling duplicate-member scenarios.",
    },
    {
      number: "06",
      title: "User Login",
      description:
        "Modeled successful login, invalid credentials, and account-suspension scenarios.",
    },
  ];

  const projectArtifacts = [
    "System Scenarios",
    "Initial Use Cases",
    "Refined Use Cases",
    "Sequence Diagrams",
    "State Diagrams",
    "Initial Class Diagram",
    "Refined Class Diagram",
    "Object Diagram",
    "Attributes & Operations",
    "Interface Specifications",
    "Preconditions & Postconditions",
    "MVC Architecture",
    "Deployment Diagram",
    "Access Control Rules",
  ];

  const contributions = [
    "System Scenario Development",
    "Sequence Diagram Development",
    "Behavioral Flow Analysis",
    "Homeowner Access Control",
    "Account Access Control",
    "Surveillance Camera Access Control",
    "Motion Access Control",
    "User Access Control",
    "WiFi Access Control",
    "Configure System Settings Boundary Use Case",
  ];

  const methods = [
    "Systems Analysis",
    "Requirements Analysis",
    "UML",
    "Scenario Modeling",
    "Use Case Modeling",
    "Sequence Diagrams",
    "State Diagrams",
    "Class Diagrams",
    "Object Modeling",
    "MVC",
    "Access Control",
    "Technical Documentation",
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
            <a
              href="/projects"
              className="inline-flex items-center text-sm text-black/45 transition-colors hover:text-black"
            >
              ← Back to Projects
            </a>

            <div className="mt-16 max-w-5xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                Systems Analysis & Design
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Smart Surveillance Camera Information System
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl">
                An academic group project focused on analyzing and designing a
                proposed smart surveillance camera information system through
                scenarios, behavioral modeling, UML, object design, access
                control, and system architecture.
              </p>
            </div>

            <div className="mt-12 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-black/40">
                  Type
                </p>

                <p className="mt-2 text-sm font-medium">
                  Academic Group Project
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-black/40">
                  Course
                </p>

                <p className="mt-2 text-sm font-medium">CSCI 7727</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-black/40">
                  Focus
                </p>

                <p className="mt-2 text-sm font-medium">
                  Systems Analysis & Design
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-black/40">
                  Score
                </p>

                <p className="mt-2 text-sm font-medium">94 / 100</p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Overview
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  From system behavior to structured design.
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  The project analyzed a proposed smart surveillance camera
                  information system covering motion detection, notifications,
                  live video, recorded video playback, account management,
                  household users, and system configuration.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  The project focused on systems analysis and design rather
                  than software implementation. The final documentation
                  progressed from scenarios and use cases into behavioral UML
                  models, object design, access-control rules, and system
                  architecture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Diagram */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                Featured Diagram
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Motion Detection Sequence Diagram
              </h2>

              <p className="mt-5 text-base leading-7 text-black/60">
                One of the sequence diagrams I developed for the project,
                modeling the interaction between the visitor, motion sensor,
                event controller, camera, and motion object during a detected
                motion event.
              </p>
            </div>

            <figure>
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <Image
                  src="/projects/smart-surveillance-sequence.png"
                  alt="Motion Detection sequence diagram for the Smart Surveillance Camera Information System"
                  width={1234}
                  height={606}
                  className="h-auto w-full"
                  priority
                />
              </div>

              <figcaption className="mt-4 text-sm leading-6 text-black/45">
                Motion Detection Sequence Diagram — developed as part of my
                contribution to the system&apos;s behavioral analysis.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* System Scope */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  System Scope
                </p>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Six core system functionalities were analyzed.
                </h2>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  {functionalities.map((item) => (
                    <div
                      key={item.number}
                      className="border-t border-black/10 pt-5"
                    >
                      <p className="text-xs text-black/35">{item.number}</p>

                      <h3 className="mt-2 text-lg font-semibold tracking-tight">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-black/55">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analysis Process */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Analysis Process
                </p>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Progressing from scenarios to detailed system models.
                </h2>

                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  <div className="border-t border-black/10 pt-5">
                    <p className="text-xs text-black/35">01</p>

                    <h3 className="mt-2 text-lg font-semibold">
                      Scenario Analysis
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/55">
                      Defined realistic user and system scenarios to describe
                      how each major functionality should behave.
                    </p>
                  </div>

                  <div className="border-t border-black/10 pt-5">
                    <p className="text-xs text-black/35">02</p>

                    <h3 className="mt-2 text-lg font-semibold">
                      Use Case Refinement
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/55">
                      The team developed initial and refined use cases,
                      including actors, flows, entry conditions, exit
                      conditions, and quality requirements.
                    </p>
                  </div>

                  <div className="border-t border-black/10 pt-5">
                    <p className="text-xs text-black/35">03</p>

                    <h3 className="mt-2 text-lg font-semibold">
                      Behavioral Modeling
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/55">
                      Converted system behavior and interactions into sequence
                      diagrams and other UML models.
                    </p>
                  </div>

                  <div className="border-t border-black/10 pt-5">
                    <p className="text-xs text-black/35">04</p>

                    <h3 className="mt-2 text-lg font-semibold">
                      Detailed Design
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/55">
                      Extended the analysis into class and object design,
                      architecture, access control, and detailed system
                      specifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Artifacts */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Project Artifacts
                </p>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  A complete systems analysis and design documentation package.
                </h2>

                <div className="mt-10 grid gap-x-8 sm:grid-cols-2">
                  {projectArtifacts.map((artifact) => (
                    <div
                      key={artifact}
                      className="border-t border-black/10 py-4 text-sm text-black/60"
                    >
                      {artifact}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Object Design */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Object Design
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Extending the analysis into object-level specifications.
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  Part B extended the project into object design with interface
                  specifications, invariants, preconditions, and postconditions
                  for system entities including WiFi, Account, Motion, Camera,
                  User, and Owner.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  These artifacts defined expected object behavior and system
                  constraints at the design level rather than representing a
                  coded implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* System Architecture */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  System Architecture
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Client/Server architecture with MVC.
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  The system design used Client/Server as the base
                  architectural style together with Model-View-Controller to
                  organize data, interface, and control responsibilities.
                </p>

                <div className="mt-10 grid gap-8 sm:grid-cols-3">
                  <div className="border-t border-black/10 pt-5">
                    <h3 className="text-lg font-semibold">Model</h3>

                    <p className="mt-3 text-sm leading-6 text-black/55">
                      Manages system data and business logic.
                    </p>
                  </div>

                  <div className="border-t border-black/10 pt-5">
                    <h3 className="text-lg font-semibold">View</h3>

                    <p className="mt-3 text-sm leading-6 text-black/55">
                      Presents system information and interfaces to users.
                    </p>
                  </div>

                  <div className="border-t border-black/10 pt-5">
                    <h3 className="text-lg font-semibold">Controller</h3>

                    <p className="mt-3 text-sm leading-6 text-black/55">
                      Coordinates user interactions and system behavior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Contribution */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  My Contribution
                </p>
              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Leading key behavioral analysis and contributing to system
                  design.
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  In Part A, I developed the system scenarios across the core
                  functionalities and created the corresponding sequence
                  diagrams, translating user interactions and expected system
                  behavior into structured behavioral models.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  In Part B, my documented contributions included
                  access-control analysis for Homeowner, Account, Surveillance
                  Camera, Motion, User, and WiFi entities.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  I also developed the Configure System Settings boundary use
                  case, defining its trigger, interaction flow, configuration
                  options, entry and exit conditions, and quality requirements.
                </p>

                <div className="mt-10 grid gap-x-8 sm:grid-cols-2">
                  {contributions.map((item) => (
                    <div
                      key={item}
                      className="border-t border-black/10 py-4 text-sm text-black/60"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methods */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Methods & Concepts
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {methods.map((method) => (
                  <span
                    key={method}
                    className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/60"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Key Takeaways
                </p>
              </div>

              <div>
                <ul className="divide-y divide-black/10 border-y border-black/10">
                  <li className="py-6 text-base text-black/65">
                    Translating real-world system behavior into structured
                    scenarios and interaction flows.
                  </li>

                  <li className="py-6 text-base text-black/65">
                    Converting behavioral requirements into UML sequence
                    diagrams.
                  </li>

                  <li className="py-6 text-base text-black/65">
                    Understanding how use cases evolve from initial analysis
                    into refined system models.
                  </li>

                  <li className="py-6 text-base text-black/65">
                    Applying access-control analysis across actors, system
                    entities, and operations.
                  </li>

                  <li className="py-6 text-base text-black/65">
                    Connecting behavioral analysis with object design,
                    architecture, and detailed system documentation.
                  </li>

                  <li className="py-6 text-base text-black/65">
                    Collaborating within a team while owning defined analysis
                    and design deliverables.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Project Note */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                Project Note
              </p>

              <p className="mt-5 text-base leading-7 text-black/60">
                This was an academic group project focused on systems analysis,
                modeling, and design documentation. It was not implemented as
                a production software application.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}