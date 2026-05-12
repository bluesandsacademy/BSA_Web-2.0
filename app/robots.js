export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: "https://bluesandsacademy.org/sitemap.xml",
    host: "https://bluesandsacademy.org",
  };
}
