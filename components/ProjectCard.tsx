import { ProjectProps, SkillsProps } from "@/config/config";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import TechPill from "./TechPill";

const ProjectCard = (props: ProjectProps) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-5 border rounded-xl">
      <div className="col-span-1 md:col-span-2">
        <video
          className="pointer-events-none mx-auto h-full w-full object-cover object-top rounded-t-xl md:rounded-t-none md:rounded-l-xl"
          src={props.thumbnailUrl}
          autoPlay
          loop
        />
      </div>
      <div className="col-span-1 md:col-span-3 px-4 md:px-6 py-4 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
          <h4 className="text-foreground font-semibold text-2xl tracking-tight pr-1">
            {props.title}
          </h4>
          <div className="flex flex-row gap-x-1.5">
            {props.websiteUrl && (
              <Link href={props.websiteUrl}>
                <Button
                  variant={"outline"}
                  className="cursor-pointer gap-x-1 items-center justify-center"
                >
                  <Globe className="size-4" />
                  <span>Website</span>
                </Button>
              </Link>
            )}
            {props.githubUrl && (
              <Link href={props.githubUrl}>
                <Button
                  variant={"default"}
                  className="cursor-pointer gap-x-1 items-center justify-center"
                >
                  <FaGithub />
                  <span>Source</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
        <p className="text-muted-foreground text-sm">{props.description}</p>
        <div className="flex flex-row flex-wrap gap-2">
          {props.tech.map((tech: SkillsProps, index: number) => (
            <TechPill {...tech} key={`skill-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
