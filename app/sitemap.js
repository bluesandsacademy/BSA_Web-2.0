const BASE_URL = "https://bluesandsacademy.org";

const routes = [
  { path: "/",                              priority: 1.0, freq: "weekly"  },
  { path: "/about",                         priority: 0.8, freq: "monthly" },
  { path: "/about/story",                   priority: 0.7, freq: "monthly" },
  { path: "/about/team",                    priority: 0.7, freq: "monthly" },
  { path: "/about/advisory-board",          priority: 0.6, freq: "monthly" },
  { path: "/focus-areas",                   priority: 0.8, freq: "monthly" },
  { path: "/focus-areas/stem-training",     priority: 0.7, freq: "monthly" },
  { path: "/focus-areas/tech-competitions", priority: 0.7, freq: "monthly" },
  { path: "/focus-areas/rural-women",       priority: 0.7, freq: "monthly" },
  { path: "/focus-areas/disabilities",      priority: 0.7, freq: "monthly" },
  { path: "/programs",                      priority: 0.9, freq: "monthly" },
  { path: "/programs/tech-fingers",         priority: 0.8, freq: "monthly" },
  { path: "/programs/one-girl-one-laptop",  priority: 0.8, freq: "monthly" },
  { path: "/programs/techfingers-platform", priority: 0.8, freq: "monthly" },
  { path: "/stem-labs",                     priority: 0.8, freq: "monthly" },
  { path: "/insights",                      priority: 0.7, freq: "weekly"  },
  { path: "/insights/blog",                 priority: 0.7, freq: "weekly"  },
  { path: "/insights/newsletters",          priority: 0.6, freq: "monthly" },
  { path: "/insights/case-studies",         priority: 0.7, freq: "monthly" },
  { path: "/insights/careers",              priority: 0.7, freq: "weekly"  },
  { path: "/volunteer",                     priority: 0.8, freq: "monthly" },
  { path: "/contact",                       priority: 0.8, freq: "monthly" },
  { path: "/privacy",                       priority: 0.3, freq: "yearly"  },
];

export default function sitemap() {
  return routes.map(({ path, priority, freq }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }));
}
