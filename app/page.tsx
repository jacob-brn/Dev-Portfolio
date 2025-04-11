import EducationCard from "@/components/EducationCard";
import GithubCommitChart from "@/components/GithubCommitChart";
import JobsSection from "@/components/JobsSection";
import LatestBlogPostsSection from "@/components/LatestBlogPostsSection";
import NavBar from "@/components/navbar";
import ProjectCard from "@/components/ProjectCard";
import TechPill from "@/components/TechPill";
import TextCubic from "@/components/TextCubic";
import {
  education,
  ProjectProps,
  projects,
  skills,
  SkillsProps,
} from "@/config/config";
import { FaGithub } from "react-icons/fa";

export const metadata = {};

export default function Home() {
  return (
    <div className="relative w-full max-w-3xl mx-auto border-x">
      <NavBar />
      <div className="absolute top-0 -left-4 w-4 h-full border text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(-315deg,currentColor_0_1px,#0000_0_50%)]"></div>
      <div className="hidden md:block absolute top-0 -right-4 w-4 h-full border text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(-315deg,currentColor_0_1px,#0000_0_50%)]"></div>
      <div className="w-full h-14 text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
      <div className="w-full border-y">
        <div className="grid lg:grid-cols-1 divide-x">
          <div className="p-6 grid gap-y-4">
            <TextCubic
              className="text-4xl md:text-6xl font-bold cursor-pointer"
              text="Hi,I'm Jacob👋"
            />
            <h2 className="text-xl tracking-tight max-w-xl">
              Indiehacker and UI/UX enthusiast. I love building things and
              helping people.
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full px-6 py-2 text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]">
        <h3 className="text-foreground font-semibold text-xl">About</h3>
      </div>
      <div className="w-full border-y p-6">
        <p className="text-base tracking-tight font-normal">
          At the beginning of 2023, I discovered this entire idea of
          indiehacking and decided to give it a try. I started heavily learning
          about frontend, backend, UI/UX, SEO, copywriting and everything that
          would be helpful in the future.
        </p>
      </div>
      <div className="w-full px-6 py-2 text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]">
        <h3 className="text-foreground font-semibold text-xl">
          Work Experience
        </h3>
      </div>
      <JobsSection />
      <div className="w-full  px-6 py-2 text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]">
        <h3 className="text-foreground font-semibold text-xl">Education</h3>
      </div>
      <div className="w-full border-y p-6">
        {education.map((education, index) => (
          <EducationCard {...education} key={index} />
        ))}
      </div>
      <div className="w-full flex items-center px-6 py-2 text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]">
        <h3 className="text-foreground font-semibold text-xl inline-flex items-center gap-x-2">
          <FaGithub className="size-6 cursor-pointer" />
          Commits
        </h3>
      </div>
      <GithubCommitChart />
      <div className="w-full px-6 py-2 text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]">
        <h3 className="text-foreground font-semibold text-xl">Skills</h3>
      </div>
      <div className="w-full border-y p-6 flex flex-row flex-wrap gap-2">
        {skills.map((skill: SkillsProps, index: number) => (
          <TechPill {...skill} key={`skill-${index}`} />
        ))}
      </div>
      <div className="w-full px-6 py-2 text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]">
        <h3 className="text-foreground font-semibold text-xl">Projects</h3>
      </div>
      <div className="w-full border-y p-6 flex flex-col gap-6">
        {projects.map((project: ProjectProps, index: number) => (
          <ProjectCard {...project} key={`project-${index}`} />
        ))}
      </div>
      <div className="w-full px-6 py-2 text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]">
        <h3 className="text-foreground font-semibold text-xl">Blog</h3>
      </div>
      <LatestBlogPostsSection />
      <div className="w-full h-14 text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
    </div>
  );
}
