"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-white/90 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
        aria-label="Main"
      >
        <a href="#home" aria-label="Yorkson Pharmacy home">
          <Image
            src="/yorkson-logo.png"
            alt="Yorkson Pharmacy"
            width={1139}
            height={300}
            priority
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-brand-blue"
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* <li>
            <a
              href="#booking"
              className="rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-navy"
            >
              Book an appointment
            </a>
          </li> */}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-navy md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul
          id="mobile-menu"
          className="border-t border-brand-navy/10 bg-white px-5 pb-4 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-brand-navy/10 py-3 text-base font-medium text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* <li className="pt-4">
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-brand-blue py-3 text-center font-semibold text-white"
            >
              Book an appointment
            </a>
          </li> */}
        </ul>
      )}
    </header>
  );
}
