import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata = {
  metadataBase: new URL("https://bluesandsacademy.org"),
  title: {
    default: "Blue Sands Academy — Closing the Gender Digital Gap",
    template: "%s | Blue Sands Academy",
  },
  description:
    "Blue Sands Academy empowers women and girls across Nigeria with ICT skills, STEM training, and tech entrepreneurship. Join us in closing the gender digital gap.",
  keywords: [
    "Blue Sands Academy",
    "BSA Nigeria",
    "women in tech Nigeria",
    "girls coding Nigeria",
    "ICT training for women",
    "STEM education girls Africa",
    "gender digital divide",
    "digital empowerment Nigeria",
    "tech skills women",
    "tech entrepreneurship women Nigeria",
  ],
  authors: [{ name: "Blue Sands Academy" }],
  creator: "Blue Sands Academy",
  publisher: "Blue Sands Academy",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://bluesandsacademy.org",
    siteName: "Blue Sands Academy",
    title: "Blue Sands Academy — Closing the Gender Digital Gap",
    description:
      "Empowering women and girls across Nigeria with ICT skills, STEM training, and tech entrepreneurship opportunities.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blue Sands Academy — Empowering Women in Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Sands Academy — Closing the Gender Digital Gap",
    description:
      "Empowering women and girls across Nigeria with ICT skills and STEM training.",
    images: ["/og-image.png"],
    creator: "@bluesandsacademy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bluesandsacademy.org",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Blue Sands Academy",
  alternateName: "BSA",
  url: "https://bluesandsacademy.org",
  description:
    "Closing the gender digital gap by empowering women and girls with ICT skills and STEM training across Nigeria.",
  logo: { "@type": "ImageObject", url: "https://bluesandsacademy.org/logo.png" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "general inquiry",
    email: "info@bluesandsacademy.org",
  },
  areaServed: { "@type": "Country", name: "Nigeria" },
  knowsAbout: [
    "ICT Skills Training",
    "STEM Education",
    "Women Empowerment",
    "Digital Literacy",
    "Tech Entrepreneurship",
    "Gender Digital Divide",
  ],
  sameAs: [
    "https://twitter.com/bluesandsacademy",
    "https://linkedin.com/company/bluesandsacademy",
    "https://facebook.com/bluesandsacademy",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-secondary antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
