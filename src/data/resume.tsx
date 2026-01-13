import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, } from "lucide-react";

export const DATA = {
  name: "Aneesh",
  initials: "BVS",
  url: "https://dillion.io",
  location: "Visakhapatnam, IN",
  locationLink: "https://www.google.com/maps/place/visakhapatnam",
  description:
    "Software Engineer turning ideas into products. Building things that solve real problems. Learning, experimenting, and sharing my journey.  ",
  summary:
    "I started my journey experimenting with small projects, and that curiosity slowly turned into a passion for creating products and exploring entrepreneurship.I enjoy solving real problems, learning new skills, and sharing my experiences online. Right now, I’m focused on growing, building, and turning ideas into something people can actually use.This portfolio is a glimpse of the journey I’m on and everything I’m excited to create next.",
  avatarUrl: "/ane.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "MongoDB",
    "Postgres",
    "Docker",
    "Javascript",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      name: "Blog",
      href: "https://soulscript.hashnode.dev",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "bvsa2020@gmail.com",
    tel: "+91 9110502795",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rooney011",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bvs-aneesh",
        icon: Icons.linkedin,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:bvsa2020@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Grafx IT Solutions vizag",
      href: "https://atomic.finance",
      badges: [],
      location: "vizag",
      title: "Intern",
      logoUrl: "/grafx.jpg",
      start: "Oct 2024",
      end: "Dec 2024",
      description:
        "I have learned Python along with key data science libraries like NumPy, Pandas, and Matplotlib. I’ve worked on multiple dataset-based projects where I performed data cleaning, analysis, and visualization to extract meaningful insights.",
    },
  ],
  education: [
    {
      school: "Avanthi Institute of Engineering and Technology",
      // href: "https://aietta.ac.in/",
      degree: "BTech-Computer Science Engineering",
      logoUrl: "/AVEVlogo.png",
      start: "2023",
      end: "2027",
      description:
        "I'm currently pursuing my BTech in Computer Science Engineering at Avanthi Institute of Engineering and Technology.",
    },
  ],
  projects: [
    // {
    //   title: "Crimson Pages",
    //   href: "https://chatcollect.com",
    //   dates: "",
    //   active: true,
    //   description:
    //     "This is a simple web application for book lovers to track notes, ratings, and thoughts on books they’ve read.",
    //   technologies: [
    //     "HTML",
    //     "CSS",
    //     "JavaScript",
    //     "EJS",
    //     "Node.js"
    //   ],
    //   links: [
    //     {
    //       type: "github",
    //       href: "https://github.com/rooney011/Crimson-Pages.git",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "",
    // },
    {
      title: "Paylink",
      href: "https://chatcollect.com",
      dates: "Sep 2025 - Oct 2025",
      active: true,
      description:
        "A user-friendly web platform for seamless USDC transactions, enabling quick and secure stablecoin payments with an experience similar to sending a message.",
      technologies: [
        "React",
        "MongoDB",
        "JavaScript",
        "EJS",
        "Node.js"
      ],
      links: [
        {
          type: "github",
          href: "https://github.com/rooney011/PayLink",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Oss-Chatbot with RAG",
      href: "https://chatcollect.com",
      dates: "Nov 2025 - Present",
      active: true,
      description:
        "Web-based chatbot application that leverages Retrieval-Augmented Generation (RAG) to provide accurate and context-aware responses using open-source documents.",
      technologies: [
        "Next.js",
        "RAG",
        "NLP",
        "Embeddings",
      ],
      links: [
        {
          type: "github",
          href: "https://github.com/rooney011/oss-chatbot-with-rag.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    // {
    //   title: "Portfolio Template",
    //   href: "https://chatcollect.com",
    //   dates: "",
    //   active: true,
    //   description:
    //     "A sleek and modern portfolio template built with Next.js and Tailwind CSS, designed to showcase projects and skills effectively for developers and designers.",
    //   technologies: [
    //     "Next.js",
    //     "Tailwind CSS",
    //     "TypeScript",
    //   ],
    //   links: [
    //     {
    //       type: "github",
    //       href: "https://github.com/rooney011/portfolio",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //     {
    //       type: "website",
    //       href: "https://portfolio-aneesh.vercel.app",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "",
    // },
    {
      title: "Fincil - AI Financial Council",
      href: "https://github.com/rooney011/Fincil.git",
      dates: "Dec 2025 - Jan 2026",
      active: true,
      description:
        "A multi-agent financial advisory platform where a 'Council' of AI personas (Miser, Visionary, Judge) debate user transactions in real-time. Features a Human-in-the-Loop negotiation interface, allowing users to rebut verdicts and force a re-evaluation of their spending choices.",
      technologies: [
        "React",
        "TypeScript",
        "Supabase",
        "CrewAI",
        "FastAPI",
        // "Tailwind CSS",
      ],
      links: [
        {
          type: "github",
          href: "https://github.com/rooney011/Fincil.git",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://fincil.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "CodeWeaver",
      href: "https://github.com/rooney011/CodeWeaver.git",
      dates: "Dec 2025 - Jan 2026",
      active: true,
      description:
        "An autonomous Site Reliability Engineering (SRE) agent that monitors applications, diagnoses critical failures using Large Language Models (LLMs), and executes remediation plans with human-in-the-loop validation.",
      technologies: [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "Docker",
      ],
      links: [
        {
          type: "github",
          href: "https://github.com/rooney011/CodeWeaver.git",
          icon: <Icons.github className="size-3" />,
        },
        // {
        //   type: "website",
        //   href: "http://localhost:3000", // Or your deployed URL
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "", // You can add a screenshot of the Mission Control here later
      video: "",
    },
  ],
  hackathons: [
    {
      title: "GenAi Hackathon",
      dates: "September 15th - 16th, 2025",
      location: "Vignan's Institute of Engineering for Women, Visakhapatnam",
      description:
        "Developed a web app (PayLink) that makes payments effortless by turning any bill or request into a simple shareable link. Users can pay you instantly—no apps, no setup, just a tap. With real-time tracking and secure transactions, PayLink is the fastest way to get paid anywhere.",
      image:
        "/gdg.jpg",
      mlh: "",
      links: [],
    },
    {
      title: "TECHNOVA-2025",
      dates: "September 19th - 20th, 2025",
      location: "ANITS College, Visakhapatnam",
      description:
        "Built a payments web app for elderly users with voice recognition in native languages and an integrated voice assistant. Designed a simple, high-contrast UI for effortless navigation.",

      image: "/anits.png",
      mlh: "",
      links: [],
    },
    {
      title: "Hogwarts Hackathon",
      dates: "December 6th - 7th, 2025",
      location: "Gayatri Vidya Parishad College(gvpcdpgc), Visakhapatnam",
      description:
        "Fincil turns personal finance into an intelligent debate, not a lonely spreadsheet. A Multi-Agent AI Council—your Miser, Visionary, and Digital Twin—analyzes your income, surplus, and goals to judge every spending decision. And with our unique Negotiation Loop, you can argue your case and stay fully in control of your financial destiny.",

      image: "/hogwarts.jpeg",
      mlh: "",
      links: [],
    },
    {
      title: "AI Buildathon by CrossStack",
      dates: "December 22nd - 27th, 2025",
      location: "ā-hub, visakhapatnam",
      description:
        "An autonomous Site Reliability Engineering (SRE) agent that monitors applications, diagnoses critical failures using Large Language Models (LLMs), and executes remediation plans with human-in-the-loop validation.",
      image: "/crosstack.PNG",
      mlh: "",
      links: [],
    },
    {
      title: "Google TechSprint",
      dates: "January 3rd - 4th, 2026",
      location: "GITAM University, Visakhapatnam",
      description:
        "Reconstructed Fincil, a proactive financial platform where a multi-agent AI Council debates and negotiates transactions in real-time to align daily spending with long-term wealth.",
      image: "/gdg.jpg",
      mlh: "",
      links: [],
    },
    {
      title: "Vibe Coding Hackathon",
      dates: "January 5th - 6th, 2026",
      location: "ANITS College, Visakhapatnam",
      description:
        "Drift is an intelligent browser extension that utilizes local AI to detect the micro-behaviors preceding distraction, proactively intervening to preserve your flow state before focus is lost.",
      image: "/anits.png",
      mlh: "",
      links: [],
    },
  ],
} as const;
