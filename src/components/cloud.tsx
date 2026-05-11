import { IconCloud } from "@/components/ui/icon-cloud";
import { useRef, useState, useEffect } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "supabase",
  "vercel",
  "postman",
  "docker",
  "git",
  "github",
  "figma",
  "tailwindcss",
  "npm",
  "python",
  "django",
  "mongodb",
  "jupyter",
  "linux",
  "c",
  ];

const slugDescriptions: Record<string, string> = {
  typescript: "JavaScript with syntax for types.",
  javascript: "The programming language of the Web.",
  java: "A high-level, class-based, object-oriented programming language.",
  react: "A JavaScript library for building user interfaces.",
  html5: "The latest evolution of the standard that defines HTML.",
  css3: "The latest evolution of the Cascading Style Sheets language.",
  nodedotjs: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
  express: "Fast, unopinionated, minimalist web framework for Node.js.",
  nextdotjs: "The React Framework for the Web.",
  postgresql: "The World's Most Advanced Open Source Relational Database.",
  supabase: "The Open Source Firebase Alternative.",
  vercel: "Develop. Preview. Ship.",
  postman: "The Collaboration Platform for API Development.",
  docker: "Empowering App Development for Developers.",
  git: "Distributed version control system.",
  github: "Where the world builds software.",
  visualstudiocode: "Code editing. Redefined.",
  figma: "The collaborative interface design tool.",
  tailwindcss: "Rapidly build modern websites without ever leaving your HTML.",
  npm: "The package manager for JavaScript.",
  python: "A programming language that lets you work quickly.",
  django: "The Web framework for perfectionists with deadlines.",
  mongodb: "The application data platform.",
  jupyter: "Interactive computing across all programming languages.",
  linux: "Open source operating system.",
  c: "A general-purpose, procedural computer programming language.",
  cpp: "A general-purpose programming language created by Bjarne Stroustrup.",
};

export function Cloud() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const connectionRef = useRef<HTMLDivElement>(null);

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSelectedSlug(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // 10-second auto-dismiss
  useEffect(() => {
    if (!selectedSlug) return;
    const timer = setTimeout(() => {
      setSelectedSlug(null);
    }, 10000);
    return () => clearTimeout(timer);
  }, [selectedSlug]);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full flex-col items-center justify-center md:flex-row md:justify-between gap-8 p-4"
    >
      <div
        className="relative flex size-full max-w-lg items-center justify-center overflow-visible"
        ref={cloudRef}
      >
        <IconCloud
          images={images}
          onIconClick={(index) => setSelectedSlug(slugs[index])}
        />
      </div>
      <p className="text-muted-foreground text-xs text-center mt-2 md:hidden">
        Touch the bubble to get the description
      </p>

      {selectedSlug && (
        <>
          <div className="relative z-10 w-full max-w-md" ref={cardRef}>
            <div
              ref={connectionRef}
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-primary opacity-0 md:opacity-100"
            />
            {/* Custom info box — replaces shadcn Card */}
            <div
              className="dark:bg-black/50 bg-white/80 dark:border-white/10 border-black/10"
              style={{
                padding: "1.25rem 1.5rem",
                borderRadius: "16px",
                borderWidth: "1px",
                borderStyle: "solid",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.15), 0 0 0 1px rgba(128,128,128,0.05) inset",
                transition: "all 0.3s ease",
                animation: "fadeSlideIn 0.3s ease forwards",
              }}
            >
              {/* Title row with icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <img
                  src={`https://cdn.simpleicons.org/${selectedSlug}/${selectedSlug}`}
                  alt={selectedSlug}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                />
                <h3
                  className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                  style={{
                    margin: 0,
                    fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
                    fontWeight: 700,
                    textTransform: "capitalize",
                  }}
                >
                  {selectedSlug}
                </h3>
              </div>
              {/* Description */}
              <p
                className="text-foreground/80"
                style={{
                  margin: 0,
                  fontSize: "clamp(0.875rem, 3vw, 1.1rem)",
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                {slugDescriptions[selectedSlug] || selectedSlug}
              </p>
              {/* Auto-dismiss progress bar */}
              <div
                style={{
                  marginTop: "12px",
                  height: "2px",
                  borderRadius: "1px",
                  background: "rgba(255,255,255,0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    background:
                      "linear-gradient(90deg, #ffaa40, #9c40ff)",
                    animation: "shrinkBar 10s linear forwards",
                    transformOrigin: "left",
                  }}
                />
              </div>
            </div>
          </div>

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={cloudRef}
            toRef={connectionRef}
            duration={1.5}
            pathColor="rgba(156, 64, 255, 0.4)"
            gradientStartColor="#ffaa40"
            gradientStopColor="#9c40ff"
            curvature={-20}
            endYOffset={0}
          />
        </>
      )}

      {/* Keyframe animations injected via style tag */}
      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shrinkBar {
          from {
            transform: scaleX(1);
          }
          to {
            transform: scaleX(0);
          }
        }
      `}</style>
    </div>
  );
}
