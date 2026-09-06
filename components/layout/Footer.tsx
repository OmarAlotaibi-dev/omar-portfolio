import Link from "next/link";

export default function Footer() {
  return (
   <footer className="border-t border-black/10 bg-[#F7F8FA] text-[#111827]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        {/* Identity */}
        <div>
          <Link
            href="/"
            className="font-semibold tracking-tight transition-colors hover:text-[#2563EB]"
          >
            Omar Adnan Alotaibi
          </Link>

          <p className="mt-1 text-sm text-black/45">
            Management Information Systems & Technology
          </p>

          <p className="mt-1 text-xs text-black/35">
            Riyadh, Saudi Arabia
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-black/45">
          <a
            href="https://www.linkedin.com/in/omar-alotaibi11071998/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#2563EB]"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/OmarAlotaibi-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#2563EB]"
          >
            GitHub
          </a>

          <Link
            href="/resume"
           className="transition-colors hover:text-[#2563EB]"
          >
            Resume
          </Link>

          <Link
            href="/contact"
          className="transition-colors hover:text-[#2563EB]"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-black/35">
          © {new Date().getFullYear()} Omar Adnan Alotaibi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}