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
              className="inline-flex items-center text-sm text-black/45 transition-colors hover:text-black"
            >
              ← Back to Projects
            </a>

            <div className="mt-16 max-w-5xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                Full-Stack Web Development
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Tech Support Pro
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60 sm:text-xl">
                A full-stack customer support and ticket management system
                with user and admin dashboards, authentication, role-based
                access, ticket workflows, and MySQL database integration.
              </p>
            </div>

            <div className="mt-12 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-black/40">
                  Type
                </p>

                <p className="mt-2 text-sm font-medium">
                  Full-Stack Web Application
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-black/40">
                  Architecture
                </p>

                <p className="mt-2 text-sm font-medium">
                  PHP + MySQL
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-black/40">
                  Status
                </p>

                <p className="mt-2 text-sm font-medium">
                  Completed
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Project Preview */}
<section className="border-t border-black/10">
  <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02]">
      <Image
        src="/projects/tech-support-pro.png"
        alt="Tech Support Pro ticket management application interface"
        width={1700}
        height={950}
        className="h-auto w-full"
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Overview
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Managing support requests through a structured web system.
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  System Roles
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="border-t border-black/10 pt-6">
                  <p className="text-sm text-black/40">
                    User
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    Customer Dashboard
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-black/55">
                    Users can create an account, sign in, submit support
                    tickets, view their requests, and follow ticket status
                    changes.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-6">
                  <p className="text-sm text-black/40">
                    Administrator
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Ticket Workflow
                </p>
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
                      className="border-t border-black/10 pt-5"
                    >
                      <p className="text-xs text-black/35">
                        {step.number}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold tracking-tight">
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  What I Built
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="border-t border-black/10 pt-5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    Authentication
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Implemented user registration and login functionality with
                    password handling and session-based authentication.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    Role-Based Access
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Separated user and administrator capabilities through
                    role-based access and validation.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    Ticket Management
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Built functionality for creating, reviewing, updating, and
                    tracking support tickets through multiple statuses.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    Database Integration
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Connected the application to a MySQL database for users,
                    tickets, roles, and application data.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    User Dashboard
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Created a user-facing interface for accessing and managing
                    submitted support requests.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-5">
                  <h3 className="text-lg font-semibold tracking-tight">
                    Admin Dashboard
                  </h3>

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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Database
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Relational data behind the application.
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg">
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Technologies
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
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
                    className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/60"
                  >
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
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/45">
                  Key Takeaways
                </p>
              </div>

              <div>
                <ul className="divide-y divide-black/10 border-y border-black/10">
                  <li className="py-6 text-base text-black/65">
                    Connecting front-end interfaces with PHP application logic
                    and a relational database.
                  </li>

                  <li className="py-6 text-base text-black/65">
                    Implementing authentication, sessions, and role-based
                    application access.
                  </li>

                  <li className="py-6 text-base text-black/65">
                    Designing a ticket workflow with multiple application
                    states.
                  </li>

                  <li className="py-6 text-base text-black/65">
                    Building separate user and administrator experiences within
                    the same application.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="border-t border-black/10">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.18em] text-black/45">
              Project Repository
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/OmarAlotaibi-dev/tech-support-pro"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-black/85"
              >
                View on GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}