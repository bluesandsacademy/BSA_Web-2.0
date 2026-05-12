"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about/story" },
      { label: "Our Team", href: "/about/team" },
      { label: "Advisory Board", href: "/about/advisory-board" },
    ],
  },
  {
    label: "Focus Areas",
    href: "/focus-areas",
    children: [
      { label: "STEM Training", href: "/focus-areas/stem-training" },
      { label: "Tech Competitions", href: "/focus-areas/tech-competitions" },
      { label: "Rural Women", href: "/focus-areas/rural-women" },
      { label: "Disabilities", href: "/focus-areas/disabilities" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Tech Fingers", href: "/programs/tech-fingers" },
      { label: "One Girl One Laptop", href: "/programs/one-girl-one-laptop" },
      { label: "TechFingers Platform", href: "/programs/techfingers-platform" },
    ],
  },
  { label: "STEM Labs", href: "/stem-labs" },
  {
    label: "Insights",
    href: "/insights",
    children: [
      { label: "Blog", href: "/insights/blog" },
      { label: "Newsletters", href: "/insights/newsletters" },
      { label: "Case Studies", href: "/insights/case-studies" },
      { label: "Careers", href: "/insights/careers" },
    ],
  },
  { label: "Volunteer", href: "/volunteer" },
];

function DesktopDropdown({ link, pathname }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const timerRef = useRef(null);

  const active =
    pathname === link.href || pathname.startsWith(link.href + "/");

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  if (!link.children) {
    return (
      <li key={link.href}>
        <Link
          href={link.href}
          aria-current={active ? "page" : undefined}
          className={[
            "relative font-body font-medium text-sm py-1 transition-colors",
            active ? "text-primary" : "text-secondary/80 hover:text-primary",
          ].join(" ")}
        >
          {link.label}
          {active && (
            <span
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink rounded-full"
              aria-hidden="true"
            />
          )}
        </Link>
      </li>
    );
  }

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        className={[
          "relative flex items-center gap-1 font-body font-medium text-sm py-1 transition-colors cursor-pointer",
          active ? "text-primary" : "text-secondary/80 hover:text-primary",
        ].join(" ")}
      >
        {link.label}
        <svg
          className={[
            "w-3.5 h-3.5 transition-transform duration-200",
            open ? "rotate-180" : "",
          ].join(" ")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        {active && (
          <span
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink rounded-full"
            aria-hidden="true"
          />
        )}
      </button>

      {/* Dropdown panel */}
      <div
        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
        style={{
          opacity: open ? 1 : 0,
          transform: open
            ? "translateX(-50%) translateY(0)"
            : "translateX(-50%) translateY(-6px)",
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.18s ease, transform 0.18s ease",
        }}
      >
        <ul
          className="min-w-[200px] bg-white border border-bdr rounded-xl shadow-lg overflow-hidden py-1.5"
          role="menu"
        >
          {link.children.map((child) => {
            const childActive = pathname === child.href;
            return (
              <li key={child.href} role="none">
                <Link
                  href={child.href}
                  role="menuitem"
                  aria-current={childActive ? "page" : undefined}
                  className={[
                    "flex items-center gap-2 px-4 py-2.5 font-body text-sm transition-colors group",
                    childActive
                      ? "text-primary bg-surface"
                      : "text-secondary/80 hover:text-primary hover:bg-surface",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "w-1 h-1 rounded-full shrink-0 transition-colors",
                      childActive ? "bg-pink" : "bg-secondary/20 group-hover:bg-pink",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const pathname = usePathname();

  useEffect(() => { setMenuOpen(false); setExpandedMobile(null); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const headerOnDark = menuOpen;

  return (
    <>
      <header
        role="banner"
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          menuOpen
            ? "bg-secondary"
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
            {navLinks.map((link) => (
              <DesktopDropdown key={link.href} link={link} pathname={pathname} />
            ))}
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
        className="fixed inset-0 z-40 bg-secondary lg:hidden flex flex-col overflow-y-auto"
        style={{
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
          visibility: menuOpen ? "visible" : "hidden",
        }}
      >
        {/* Top spacer */}
        <div className="h-16 shrink-0" />

        {/* Nav links */}
        <nav aria-label="Mobile navigation" className="flex-1 flex flex-col justify-center px-8 py-6">
          <ul role="list" className="flex flex-col">
            {navLinks.map(({ label, href, children }, i) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              const isExpanded = expandedMobile === href;

              return (
                <li key={href} className="relative">
                  <div className="relative pl-5 flex items-center">
                    {/* Pink accent bar */}
                    <span
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-full transition-all duration-300"
                      style={{
                        height: "2rem",
                        backgroundColor: active ? "#e63f8e" : "transparent",
                      }}
                      aria-hidden="true"
                    />

                    {children ? (
                      /* Accordion toggle for items with children */
                      <button
                        type="button"
                        onClick={() => setExpandedMobile(isExpanded ? null : href)}
                        aria-expanded={isExpanded}
                        className="flex items-center gap-2 py-3.5 font-display font-bold leading-none w-full text-left cursor-pointer"
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
                        <svg
                          className={[
                            "w-6 h-6 shrink-0 transition-transform duration-300",
                            isExpanded ? "rotate-180" : "",
                          ].join(" ")}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    ) : (
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
                    )}
                  </div>

                  {/* Accordion children */}
                  {children && (
                    <div
                      className="overflow-hidden transition-all duration-300 ease-out pl-5"
                      style={{
                        maxHeight: isExpanded ? `${children.length * 48}px` : "0px",
                        opacity: isExpanded ? 1 : 0,
                      }}
                    >
                      <ul className="pb-2 flex flex-col gap-0.5 border-l border-white/10 pl-4 ml-1">
                        {children.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setMenuOpen(false)}
                                aria-current={childActive ? "page" : undefined}
                                className="block py-2 font-body font-semibold text-base transition-colors"
                                style={{
                                  color: childActive ? "#e63f8e" : "rgba(255,255,255,0.65)",
                                }}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom — CTA */}
        <div
          className="px-8 pb-12 shrink-0"
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
