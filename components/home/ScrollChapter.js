"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const chapters = [
  { id: "s-hero",         label: "Welcome"         },
  { id: "s-about",        label: "About BSA"       },
  { id: "s-what-we-do",   label: "What We Do"      },
  { id: "s-milestone",    label: "Milestones"      },
  { id: "s-initiatives",  label: "Our Initiatives" },
  { id: "s-partners",     label: "Partners"        },
  { id: "s-testimonials", label: "Stories"         },
  { id: "s-subscribe",    label: "Stay Connected"  },
];

export default function ScrollChapter() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("s-hero");
  const [hoveredId, setHoveredId] = useState(null);

  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const visibilityMap = {};

    const updateActive = () => {
      const centerY = window.innerHeight / 2;
      let closest = null;
      let closestDistance = Infinity;

      chapters.forEach(({ id }) => {
        if (!visibilityMap[id]) return;
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - centerY);
        if (dist < closestDistance) {
          closestDistance = dist;
          closest = id;
        }
      });

      if (closest) setActiveId(closest);
    };

    const observers = chapters
      .map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return null;
        const obs = new IntersectionObserver(
          ([entry]) => {
            visibilityMap[id] = entry.isIntersecting;
            updateActive();
          },
          { threshold: 0.1 }
        );
        obs.observe(el);
        return obs;
      })
      .filter(Boolean);

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  if (!isHome) return null;

  const activeIndex = chapters.findIndex((c) => c.id === activeId);

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-6 z-40 hidden lg:flex flex-col items-center"
      style={{ top: "50%", transform: "translateY(-50%)" }}
    >
      {chapters.map((chapter, i) => {
        const isActive = chapter.id === activeId;
        const isPast = i < activeIndex;
        const isHovered = hoveredId === chapter.id;
        // Show label when: this dot is hovered, OR it's active and nothing else is hovered
        const showLabel = isHovered || (isActive && !hoveredId);

        return (
          <div key={chapter.id} className="flex flex-col items-center">
            {/* Dot row — 24×24 hit area */}
            <div
              className="relative flex items-center justify-center"
              style={{ width: "24px", height: "24px" }}
            >
              {/* Label — always visible for active dot, hover-only for others */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "calc(100% + 6px)",
                  top: "50%",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  opacity: showLabel ? 1 : 0,
                  transform: showLabel
                    ? "translateY(-50%) translateX(0)"
                    : "translateY(-50%) translateX(6px)",
                  transition: "opacity 0.18s ease, transform 0.18s ease",
                }}
              >
                <span
                  className="font-body font-medium text-white rounded-full"
                  style={{
                    fontSize: "11px",
                    lineHeight: 1,
                    backgroundColor: isActive && !isHovered ? "#E63F8E" : "#02345A",
                    padding: "5px 11px",
                    letterSpacing: "0.01em",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  {chapter.label}
                </span>
                <span
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "4px solid transparent",
                    borderBottom: "4px solid transparent",
                    borderLeft: `5px solid ${isActive && !isHovered ? "#E63F8E" : "#02345A"}`,
                    flexShrink: 0,
                    transition: "border-color 0.2s ease",
                  }}
                />
              </div>

              {/* Pulse ring — active dot only */}
              {isActive && (
                <span
                  className="absolute rounded-full animate-ping"
                  style={{
                    width: "16px",
                    height: "16px",
                    backgroundColor: "rgba(230,63,142,0.22)",
                    pointerEvents: "none",
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Dot button */}
              <button
                onClick={() =>
                  document.getElementById(chapter.id)?.scrollIntoView({ behavior: "smooth" })
                }
                onMouseEnter={() => setHoveredId(chapter.id)}
                onMouseLeave={() => setHoveredId(null)}
                aria-label={`Jump to ${chapter.label}`}
                aria-current={isActive ? "true" : undefined}
                style={{
                  width: isActive ? "11px" : "7px",
                  height: isActive ? "11px" : "7px",
                  borderRadius: "50%",
                  backgroundColor: isActive
                    ? "#E63F8E"
                    : isPast
                    ? "rgba(230,63,142,0.3)"
                    : "transparent",
                  border: isActive
                    ? "2px solid #E63F8E"
                    : isPast
                    ? "1.5px solid rgba(230,63,142,0.45)"
                    : "1.5px solid #CBD5E1",
                  boxShadow: !isActive && isHovered ? "0 0 0 3px rgba(230,63,142,0.18)" : "none",
                  transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)",
                  cursor: "pointer",
                  outline: "none",
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </div>

            {/* Connector line */}
            {i < chapters.length - 1 && (
              <div
                style={{
                  width: "1.5px",
                  height: "20px",
                  backgroundColor: isPast ? "rgba(230,63,142,0.35)" : "#E2EBF6",
                  transition: "background-color 0.4s ease",
                  flexShrink: 0,
                }}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
