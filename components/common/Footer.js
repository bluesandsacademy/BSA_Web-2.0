import Link from "next/link";

const footerNav = [
  {
    heading: "Organisation",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Founder's Story", href: "/about/story" },
      { label: "Our Team", href: "/about/team" },
      { label: "Advisory Board", href: "/about/advisory-board" },
    ],
  },
  {
    heading: "Programs",
    links: [
      { label: "Tech Fingers", href: "/programs/tech-fingers" },
      { label: "One Girl, One Laptop", href: "/programs/one-girl-one-laptop" },
      { label: "TechFingers Platform", href: "/programs/techfingers-platform" },
      { label: "STEM Labs", href: "/stem-labs" },
    ],
  },
  {
    heading: "Focus Areas",
    links: [
      { label: "STEM Training", href: "/focus-areas/stem-training" },
      { label: "Tech Competitions", href: "/focus-areas/tech-competitions" },
      { label: "Rural Women", href: "/focus-areas/rural-women" },
      { label: "Disabilities", href: "/focus-areas/disabilities" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Insights Hub", href: "/insights" },
      { label: "Blog", href: "/insights/blog" },
      { label: "Case Studies", href: "/insights/case-studies" },
      { label: "Careers", href: "/insights/careers" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  {
    label: "Twitter / X",
    href: "https://twitter.com/bluesandsacademy",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/bluesandsacademy",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/bluesandsacademy",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/bluesandsacademy",
    icon: (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main grid */}
        <div className="py-16 grid grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12 border-b border-white/10">
          {/* Brand column */}
          <div className="col-span-2">
            <Link
              href="/"
              aria-label="Blue Sands Academy — Home"
              className="inline-flex items-center gap-2.5 font-display font-bold text-base text-white mb-5"
            >
              <span
                className="w-8 h-8 rounded-[5px] flex items-center justify-center text-white text-sm font-extrabold shrink-0 bg-primary"
                aria-hidden="true"
              >
                B
              </span>
              Blue Sands Academy
            </Link>

            <p className="font-body text-sm text-white/55 leading-relaxed mb-7 max-w-[17rem]">
              Closing the gender digital gap — empowering women and girls
              across Nigeria with ICT skills and STEM training.
            </p>

            <nav aria-label="Social media links">
              <ul className="flex items-center gap-4" role="list">
                {socialLinks.map(({ label, href, icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-white/45 hover:text-white transition-colors"
                    >
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Nav columns */}
          {footerNav.map(({ heading, links }) => (
            <div key={heading}>
              <p className="font-body font-semibold text-[0.65rem] uppercase tracking-label text-white/35 mb-4">
                {heading}
              </p>
              <ul className="flex flex-col gap-2.5" role="list">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-body text-sm text-white/65 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/35 order-2 sm:order-1">
            © {new Date().getFullYear()} Blue Sands Academy. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="order-1 sm:order-2">
            <ul className="flex items-center gap-6" role="list">
              <li>
                <Link
                  href="/privacy"
                  className="font-body text-xs text-white/35 hover:text-white/65 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body text-xs text-white/35 hover:text-white/65 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
