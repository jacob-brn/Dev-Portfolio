import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaDocker, FaPython } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { RiNodejsLine, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui, SiSupabase } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";

interface SiteConfigProps {
  title: string;
  appUrl: string;
  ogImageUrl: string;
  githubUsername: string;
}
interface NavbarLinksProps {
  label: string;
  icon: React.ReactNode;
  link: string;
}

interface JobProps {
  companyLogoUrl: string;
  companyName: string;
  jobTitle: string;
  jobDescription: string;
  startDate: string;
  endDate: string;
}

interface EducationProps {
  schoolLogoUrl: string;
  schoolName: string;
  degree: string;
  startDate: string;
  endDate: string;
}

interface SkillsProps {
  name: string;
  icon: React.ReactNode;
}

interface ProjectProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  tech: SkillsProps[];
  websiteUrl?: string;
  githubUrl?: string;
}

const siteConfig: SiteConfigProps = {
  title: "Jacob Brn",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "",
  ogImageUrl: (process.env.NEXT_PUBLIC_APP_URL + "/og") as string,
  githubUsername: "jacob-brn",
};

const navbarSocialLinks: NavbarLinksProps[] = [
  {
    label: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/jacob-brn/Optiq-UI",
  },
  {
    label: "X",
    icon: <FaXTwitter />,
    link: "https://x.com/jacob_brn",
  },
];

const jobs: JobProps[] = [
  {
    companyLogoUrl: "/globalbank.png",
    companyName: "Global Bank",
    jobTitle: "Frontend Engineer",
    jobDescription:
      "As a Frontend Engineer at Global Bank, I am responsible for designing and implementing user-friendly, responsive interfaces for the bank's digital platforms. My role involves collaborating with cross-functional teams to ensure the seamless integration of UI/UX designs with backend services, enhancing the overall user experience for clients and stakeholders.",
    startDate: "January 2023",
    endDate: "Present",
  },
  {
    companyLogoUrl: "/acmecorp.png",
    companyName: "Acme Corp",
    jobTitle: "Frontend Engineer",
    jobDescription:
      "During my time at Acme Corp, I worked as a Frontend Engineer, focusing on the development of intuitive and efficient web interfaces. I collaborated with the design and development teams to create high-performance, accessible websites and applications, optimizing both aesthetics and functionality to meet client needs",
    startDate: "January 2022",
    endDate: "December 2022",
  },
];

const education: EducationProps[] = [
  {
    schoolLogoUrl: "/acmeuniversity.png",
    schoolName: "University of Acme",
    degree: "Bachelor's Degree of Computer Science",
    startDate: "2018",
    endDate: "2022",
  },
];

const skills: SkillsProps[] = [
  {
    name: "Next.js",
    icon: <TbBrandNextjs />,
  },
  {
    name: "React.js",
    icon: <RiReactjsFill />,
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript />,
  },
  {
    name: "TailwindCSS",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "shadcn/ui",
    icon: <SiShadcnui className="size-4!" />,
  },
  {
    name: "Framer Motion",
    icon: <TbBrandFramerMotion />,
  },
  {
    name: "Node.js",
    icon: <RiNodejsLine />,
  },
  {
    name: "Docker",
    icon: <FaDocker />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="size-4!" />,
  },
  {
    name: "Postgres",
    icon: <BiLogoPostgresql />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
];

const projects: ProjectProps[] = [
  {
    title: "Optiq UI",
    description:
      "Developed an UI Library. Free and open-source animated components built with TailwindCSS, Framer Motion and Typescript.",
    tech: [
      {
        name: "Next.js",
        icon: <TbBrandNextjs />,
      },
      {
        name: "React.js",
        icon: <RiReactjsFill />,
      },
      {
        name: "TypeScript",
        icon: <BiLogoTypescript />,
      },
      {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill />,
      },
      {
        name: "shadcn/ui",
        icon: <SiShadcnui className="size-4!" />,
      },
      {
        name: "Framer Motion",
        icon: <TbBrandFramerMotion />,
      },
    ],
    thumbnailUrl: "/optiq-ui-saas-template.mp4",
    websiteUrl: "https://www.optiqui.com/",
    githubUrl: "https://github.com/jacob-brn/optiqui",
  },
  {
    title: "Optiq UI Pro",
    description:
      "Developed a Pro version of Optiq UI. Collection of templates for building your next product. Built with React, NextJS, TailwindCSS, Framer Motion and Typescript.",
    tech: [
      {
        name: "Next.js",
        icon: <TbBrandNextjs />,
      },
      {
        name: "React.js",
        icon: <RiReactjsFill />,
      },
      {
        name: "TypeScript",
        icon: <BiLogoTypescript />,
      },
      {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill />,
      },
      {
        name: "shadcn/ui",
        icon: <SiShadcnui className="size-4!" />,
      },
      {
        name: "Framer Motion",
        icon: <TbBrandFramerMotion />,
      },
      {
        name: "Node.js",
        icon: <RiNodejsLine />,
      },
      {
        name: "Docker",
        icon: <FaDocker />,
      },
      {
        name: "Supabase",
        icon: <SiSupabase className="size-4!" />,
      },
      {
        name: "Postgres",
        icon: <BiLogoPostgresql />,
      },
    ],
    thumbnailUrl: "/optiq-ui-pro.mp4",
    websiteUrl: "https://www.pro.optiqui.com/",
  },
];

export type {
  NavbarLinksProps,
  JobProps,
  EducationProps,
  SkillsProps,
  ProjectProps,
};
export { siteConfig, navbarSocialLinks, jobs, education, skills, projects };
