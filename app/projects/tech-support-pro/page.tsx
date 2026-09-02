import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TechSupportProPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="border-b border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
<a
  href="/projects"
  className="group inline-flex items-center gap-2 text-sm font-medium text-black/45 transition-colors hover:text-black"
>
  <span className="transition-transform duration-300 group-hover:-translate-x-1">
    ←
  </span>

  <span className="border-b border-black/20 pb-1 transition-colors duration-300 group-hover:border-black/50">
    Back to Projects
  </span>
</a>

            <div className="mt-16 max-w-5xl">
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Full-Stack Web Development
  </p>
</div>

              <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Tech Support Pro
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl">
                A full-stack customer support and ticket management system
                with user and admin dashboards, authentication, role-based
                access, ticket workflows, and MySQL database integration.
              </p>
            </div>

            <div className="mt-12 grid gap-8 border-y border-black/10 py-7 sm:grid-cols-3 sm:divide-x sm:divide-black/10">
<div className="sm:pr-8">
  <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/35">
    Type
  </p>

  <p className="mt-3 text-sm font-medium tracking-tight text-black/75">
    Full-Stack Web Application
  </p>
</div>

<div className="sm:px-8">
  <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/35">
    Architecture
  </p>

  <p className="mt-3 text-sm font-medium tracking-tight text-black/75">
    PHP + MySQL
  </p>
</div>

              <div className="sm:pl-8">
  <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/35">
    Status
  </p>

  <p className="mt-3 text-sm font-medium tracking-tight text-black/75">
    Completed
  </p>
</div>
            </div>
          </div>
        </section>
        {/* Project Preview */}
<section className="border-t border-black/10">

  <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">

    <div className="group overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02] p-2 transition-all duration-300 hover:border-black/20">

      <Image
        src="/projects/tech-support-pro.png"
        alt="Tech Support Pro ticket management application interface"
        width={1700}
        height={950}
        className="h-auto w-full rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
        priority
      />
    </div>
  </div>
</section>

        {/* Overview */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Overview
  </p>
</div>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Managing support requests through a structured web system.
                </h2>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-black/35">
  <span>Interface</span>

  <div className="h-px w-8 bg-black/15" />

  <span>PHP</span>

  <div className="h-px w-8 bg-black/15" />

  <span>MySQL</span>
</div>

                <p className="mt-8 max-w-3xl border-l border-black/15 pl-5 text-base leading-7 text-black/60 sm:text-lg">
                  Tech Support Pro is a full-stack customer support application
                  designed to manage technical support requests through a
                  ticket-based workflow.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  The application connects a web interface with PHP backend
                  logic and a MySQL database, supporting user registration and
                  authentication, ticket submission, status tracking, admin
                  management, and role-based access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* System Roles */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    System Roles
  </p>
</div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
<div className="group border-t border-black/10 py-7">
  <div className="flex items-center gap-3">
    <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />

    <span className="text-xs font-medium uppercase tracking-[0.14em] text-black/40">
      User
    </span>
  </div>

  <h2 className="mt-3 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
    Customer Dashboard
  </h2>

  <p className="mt-4 text-sm leading-6 text-black/55">
    Users can create an account, sign in, submit support
    tickets, view their requests, and follow ticket status
    changes.
  </p>
</div>

                <div className="group border-t border-black/10 py-7">
  <div className="flex items-center gap-3">
    <span className="h-1.5 w-1.5 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />

    <span className="text-xs font-medium uppercase tracking-[0.14em] text-black/40">
      Administrator
    </span>
  </div>

  <h2 className="mt-3 text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
    Admin Dashboard
  </h2>

  <p className="mt-4 text-sm leading-6 text-black/55">
    Administrators can review submitted tickets, manage ticket
    status, respond to support requests, and access system
    management functions.
  </p>
</div>
              </div>
            </div>
          </div>
        </section>

        {/* Ticket Workflow */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Ticket Workflow
  </p>
</div>

              </div>

              <div>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  From submission to resolution.
                </h2>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  {[
                    {
                      number: "01",
                      title: "Submitted",
                      description:
                        "A user creates and submits a new support request.",
                    },
                    {
                      number: "02",
                      title: "In Progress",
                      description:
                        "The ticket is reviewed and moved into active support.",
                    },
                    {
                      number: "03",
                      title: "Resolved",
                      description:
                        "The technical issue is marked as resolved after support work.",
                    },
                    {
                      number: "04",
                      title: "Closed",
                      description:
                        "The completed support request reaches its final status.",
                    },
                  ].map((step) => (
<div
  key={step.number}
  className="group border-t border-black/10 py-6"
>
<div className="flex items-center gap-3">
  <span className="font-mono text-xs tracking-wide text-black/35">
    {step.number}
  </span>

  <div className="h-px w-6 bg-black/10 transition-all duration-300 group-hover:w-10 group-hover:bg-black/30" />
</div>

<h3 className="mt-3 text-lg font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
  {step.title}
</h3>

                      <p className="mt-3 text-sm leading-6 text-black/55">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Built */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    What I Built
  </p>
</div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="group border-t border-black/10 py-5">
  <div className="flex items-center gap-3">
    <div className="h-px w-5 bg-black/15 transition-all duration-300 group-hover:w-8 group-hover:bg-black/35" />

    <h3 className="text-lg font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1">
      Authentication
    </h3>
  </div>

  <p className="mt-3 text-sm leading-6 text-black/55">
    Implemented user registration and login functionality with
    password handling and session-based authentication.
  </p>
</div>

<div className="group border-t border-black/10 py-5">
  <div className="flex items-center gap-3">
    <div className="h-px w-5 bg-black/15 transition-all duration-300 group-hover:w-8 group-hover:bg-black/35" />

    <h3 className="text-lg font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1">
      Role-Based Access
    </h3>
  </div>

  <p className="mt-3 text-sm leading-6 text-black/55">
    Separated user and administrator capabilities through
    role-based access and validation.
  </p>
</div>

                <div className="group border-t border-black/10 py-5">
  <div className="flex items-center gap-3">
    <div className="h-px w-5 bg-black/15 transition-all duration-300 group-hover:w-8 group-hover:bg-black/35" />

    <h3 className="text-lg font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1">
      Ticket Management
    </h3>
  </div>

  <p className="mt-3 text-sm leading-6 text-black/55">
    Built functionality for creating, reviewing, updating, and
    tracking support tickets through multiple statuses.
  </p>
</div>

               <div className="group border-t border-black/10 py-5">
  <div className="flex items-center gap-3">
    <div className="h-px w-5 bg-black/15 transition-all duration-300 group-hover:w-8 group-hover:bg-black/35" />

    <h3 className="text-lg font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1">
      Database Integration
    </h3>
  </div>

  <p className="mt-3 text-sm leading-6 text-black/55">
    Connected the application to a MySQL database for users,
    tickets, roles, and application data.
  </p>
</div>

                <div className="group border-t border-black/10 py-5">
  <div className="flex items-center gap-3">
    <div className="h-px w-5 bg-black/15 transition-all duration-300 group-hover:w-8 group-hover:bg-black/35" />

    <h3 className="text-lg font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1">
      User Dashboard
    </h3>
  </div>

  <p className="mt-3 text-sm leading-6 text-black/55">
    Created a user-facing interface for accessing and managing
    submitted support requests.
  </p>
</div>

                <div className="group border-t border-black/10 py-5">
  <div className="flex items-center gap-3">
    <div className="h-px w-5 bg-black/15 transition-all duration-300 group-hover:w-8 group-hover:bg-black/35" />

    <h3 className="text-lg font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1">
      Admin Dashboard
    </h3>
  </div>

  <p className="mt-3 text-sm leading-6 text-black/55">
    Created administrative functionality for handling support
    requests and monitoring ticket activity.
  </p>
</div>
              </div>
            </div>
          </div>
        </section>

        {/* Database */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Database
  </p>
</div>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Relational data behind the application.
                </h2>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-black/35">
  <span>Users</span>

  <div className="h-px w-8 bg-black/15" />

  <span>Tickets</span>

  <div className="h-px w-8 bg-black/15" />

  <span>Roles</span>

  <div className="h-px w-8 bg-black/15" />

  <span>Status</span>
</div>

                <p className="mt-8 max-w-3xl border-l border-black/15 pl-5 text-base leading-7 text-black/60 sm:text-lg">
                  The application uses MySQL to store and manage users,
                  authentication-related data, support tickets, ticket status,
                  and information required by the user and administrator
                  workflows.
                </p>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
                  The database design follows relational database principles,
                  with the project documentation identifying a normalized
                  structure through Third Normal Form.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Technologies
  </p>
</div>
              </div>

              <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "PHP",
                  "MySQL",
                  "HTML",
                  "CSS",
                  "Apache",
                  "XAMPP",
                  "Git",
                  "GitHub",
                ].map((technology) => (
<span
  key={technology}
  className="group flex items-center gap-3 border-t border-black/10 px-1 py-4 text-sm font-medium text-black/60 transition-colors duration-300 hover:text-black"
>
  <span className="h-px w-4 bg-black/15 transition-all duration-300 group-hover:w-6 group-hover:bg-black/35" />

  {technology}
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
<div className="flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Key Takeaways
  </p>
</div>
              </div>

              <div>
                <ul className="divide-y divide-black/10 border-y border-black/10">
<li className="group flex items-start gap-4 py-6 text-base text-black/65">
  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />

  <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
    Connecting front-end interfaces with PHP application logic
    and a relational database.
  </span>
</li>

<li className="group flex items-start gap-4 py-6 text-base text-black/65">
  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />

  <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
    Implementing authentication, sessions, and role-based
    application access.
  </span>
</li>

<li className="group flex items-start gap-4 py-6 text-base text-black/65">
  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />

  <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
    Designing a ticket workflow with multiple application
    states.
  </span>
</li>

<li className="group flex items-start gap-4 py-6 text-base text-black/65">
  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black/20 transition-colors duration-300 group-hover:bg-black/60" />

  <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
    Building separate user and administrator experiences within
    the same application.
  </span>
</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
<div className="mb-8 flex items-center gap-3">
  <div className="h-px w-8 bg-black/20" />

  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
    Project Repository
  </p>
</div>

            <div className="mt-8 max-w-sm">
             <a
  href="https://github.com/OmarAlotaibi-dev/tech-support-pro"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center justify-between gap-8 bg-black px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-black/85"
>
  <span>View on GitHub</span>

  <span className="text-white/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">
    ↗
  </span>
</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}