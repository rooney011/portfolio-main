import { IconCloud } from "@/components/ui/icon-cloud";

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
]

export function Cloud() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  )
}
