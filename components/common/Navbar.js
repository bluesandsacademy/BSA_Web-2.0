"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Focus Areas", href: "/focus-areas" },
  { label: "Programs", href: "/programs" },
  { label: "STEM Labs", href: "/stem-labs" },
  { label: "Insights", href: "/insights" },
  { label: "Volunteer", href: "/volunteer" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      role="banner"
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "bg-white border-b border-bdr shadow-sm",
      ].join(" ")}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4 lg:py-6"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Blue Sands Academy — Home"
          className={[
            "flex items-center gap-2 font-display font-bold text-base tracking-heading transition-colors",
            transparent ? "text-white" : "text-secondary",
          ].join(" ")}
        >
          <span
            className="w-8 h-8 rounded-[5px] flex items-center justify-center text-white text-sm font-extrabold shrink-0 bg-primary"
            aria-hidden="true"
          >
            B
          </span>
          <span>
            Blue Sands{" "}
            <span className={transparent ? "text-accent" : "text-primary"}>
              Academy
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {navLinks.map(({ label, href }) => {
            const active =
              pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "relative font-body font-medium text-sm py-1 transition-colors",
                    active
                      ? "text-primary"
                      : transparent
                      ? "text-white/85 hover:text-white"
                      : "text-secondary/80 hover:text-primary",
                  ].join(" ")}
                >
                  {label}
                  {active && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary text-white font-body font-semibold text-sm transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Partner With Us
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className={[
              "lg:hidden p-2 rounded-md transition-colors",
              transparent
                ? "text-white hover:bg-white/10"
                : "text-secondary hover:bg-surface",
            ].join(" ")}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white border-t border-bdr"
        >
          <ul className="px-6 py-4 flex flex-col gap-1" role="list">
            {navLinks.map(({ label, href }) => {
              const active =
                pathname === href || pathname.startsWith(href + "/");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "flex items-center py-3 px-4 rounded-lg font-body font-medium text-sm transition-colors",
                      active
                        ? "text-primary bg-surface"
                        : "text-secondary hover:bg-surface hover:text-primary",
                    ].join(" ")}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="px-6 pb-6">
            <Link
              href="/contact"
              className="block w-full text-center px-5 py-3.5 rounded-full bg-primary text-white font-body font-semibold text-sm transition-colors hover:bg-secondary"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
