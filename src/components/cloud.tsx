import { IconCloud } from "@/components/ui/icon-cloud";
import { useRef, useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
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
  "visualstudiocode",
  "figma",
  "tailwindcss",
  "npm",
  "python",
  "django",
  "mongodb",
  "jupyter",
  "linux",
  "c",
  "cpp",
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSelectedSlug(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex w-full flex-col items-center justify-center md:flex-row md:justify-between gap-8 p-4"
    >
      <div
        className="relative flex size-full max-w-lg items-center justify-center overflow-hidden"
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
            <Card className="p-4 md:p-6 border border-white/10 bg-black/5 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:shadow-primary/20 dark:bg-white/5 dark:border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="capitalize text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  {selectedSlug}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <CardDescription className="text-base md:text-lg font-medium text-foreground/80 leading-relaxed">
                  {slugDescriptions[selectedSlug] || selectedSlug}
                </CardDescription>
              </CardContent>
            </Card>

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
    </div>
  );
}
