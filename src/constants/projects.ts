import { p1, p3, p2, p4, p5, p7 } from "../assets";

export interface projectsProps {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
}

const projects: projectsProps[] = [
  {
    name: "Wireframe2Code",
    description:
      "Transform your wireframes into fully responsive, production-ready code in seconds with our AI platform. Simplify your development process and focus on creativity.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: p2,
    source_code_link: "https://wireframe-to-code-guruji.vercel.app/",
  },
  {
    name: "AI Tools Suite",
    description:
      "Explore a suite of AI-driven tools for text, image, and code generation. Built with cutting-edge APIs, it enables seamless collaboration and secure user authentication.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: p1,
    source_code_link: "https://inworld.ai/",
  },
  {
    name: "Email Template Builder",
    description:
      "Design and customize professional email templates effortlessly with our intuitive platform. Streamline your email marketing campaigns and enhance engagement.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: p3,
    source_code_link: "https://ai-email-template.vercel.app/",
  },
  {
    name: "Video Gen",
    description:
      "Generate high-quality videos effortlessly using AI. Customize content, and streamline your video production process with ease.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Next",
        color: "pink-text-gradient",
      },
    ],
    image: p7,
    source_code_link: "https://wireframe-to-code-guruji.vercel.app/",
  },
  {
    name: "bntr",
    description:
      "Automate customer interactions across chat, voice, SMS, and email – so you can reclaim your time for what matters most.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "nest.js",
        color: "pink-text-gradient",
      },
    ],
    image: p5,
    source_code_link: "https://bntr.ai/",
  },
  {
    name: "re/quest",
    description:
      "Craft your AI with your own data, create agents suited to your needs, and tap into a wealth of personalized insights.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "LLM",
        color: "pink-text-gradient",
      },
    ],
    image: p4,
    source_code_link: "https://www.re-quest.ai/",
  },
];

export default projects;
