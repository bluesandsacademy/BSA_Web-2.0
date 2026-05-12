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

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const transparent = isHome && !scrolled && !menuOpen;
  const headerOnDark = transparent || menuOpen;

  return (
    <>
      <header
        role="banner"
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          menuOpen
            ? "bg-secondary"
            : transparent
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
              headerOnDark ? "text-white" : "text-secondary",
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
              <span className={headerOnDark ? "text-accent" : "text-primary"}>
                Academy
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
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
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA + mobile hamburger */}
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
                headerOnDark ? "text-white hover:bg-white/10" : "text-secondary hover:bg-surface",
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Full-screen mobile overlay ── */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className="fixed inset-0 z-40 bg-secondary lg:hidden flex flex-col"
        style={{
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
          visibility: menuOpen ? "visible" : "hidden",
        }}
      >
        {/* Top spacer — clears the fixed navbar */}
        <div className="h-16 shrink-0" />

        {/* Nav links — vertically centered */}
        <nav aria-label="Mobile navigation" className="flex-1 flex flex-col justify-center px-8">
          <ul role="list" className="flex flex-col">
            {navLinks.map(({ label, href }, i) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <li key={href} className="relative pl-5">
                  {/* Pink left accent bar — same design language as the hero slider */}
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-full transition-all duration-300"
                    style={{
                      height: "2rem",
                      backgroundColor: active ? "#e63f8e" : "transparent",
                    }}
                    aria-hidden="true"
                  />
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3.5 font-display font-bold leading-none"
                    style={{
                      fontSize: "clamp(1.9rem, 7vw, 2.6rem)",
                      letterSpacing: "-0.025em",
                      color: active ? "#e63f8e" : "white",
                      opacity: menuOpen ? 1 : 0,
                      transform: menuOpen ? "translateX(0)" : "translateX(-12px)",
                      transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1), color 0.2s ease",
                      transitionDelay: menuOpen ? `${120 + i * 65}ms` : "0ms",
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom — CTA + small note */}
        <div
          className="px-8 pb-12"
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
            transitionDelay: menuOpen ? `${120 + navLinks.length * 65}ms` : "0ms",
          }}
        >
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-6 py-4 rounded-full font-body font-bold text-sm text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#e63f8e" }}
          >
            Partner With Us
          </Link>
          <p className="text-center font-body text-xs mt-4" style={{ color: "rgba(255,255,255,0.3)" }}>
            Blue Sands Academy · Nigeria
          </p>
        </div>
      </div>
    </>
  );
}
