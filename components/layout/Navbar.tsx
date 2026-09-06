"use client";

import { useState } from "react";
import Link from "next/link";

import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Research", href: "/research" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F7F8FA]/90 text-[#111827] backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Brand */}
{/* Brand */}
<Link
  href="/"
  onClick={() => setMenuOpen(false)}
  className="flex shrink-0 items-center gap-3 text-base font-semibold tracking-tight"
>
  <Image
    src="/omar-adnan-alotaibi.jpg"
    alt="Omar Adnan Alotaibi"
    width={40}
    height={40}
    priority
    className="h-10 w-10 rounded-full object-cover object-top"
  />

  <span>Omar Adnan Alotaibi</span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-black/55 transition-colors hover:text-[#2563EB]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
 className="hidden shrink-0 border border-[#111827]/20 px-4 py-2 text-sm font-medium text-[#111827] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB] hover:text-[#2563EB] md:inline-flex"
          >
            Resume PDF
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 md:hidden"
          >
            <div className="flex w-4 flex-col gap-1">
              <span
                className={`block h-px bg-black transition-transform ${
                  menuOpen ? "translate-y-[2.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px bg-black transition-opacity ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-black transition-transform ${
                  menuOpen ? "-translate-y-[2.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-black/10 py-5 md:hidden">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
className="border-b border-black/10 py-4 text-base font-medium text-black/70 transition-colors last:border-b-0 hover:text-[#2563EB]"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-5">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
className="inline-flex bg-[#111827] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#2563EB]"
              >
                Resume PDF
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}