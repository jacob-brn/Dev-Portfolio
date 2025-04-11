import { SkillsProps } from "@/config/config";

const TechPill = (skill: SkillsProps) => {
  return (
    <div className="inline-flex flex-row items-center gap-x-1 border px-2 py-1 rounded-sm cursor-pointer transition-all duration-300 hover:bg-accent select-none">
      <span className="[&_svg]:size-5 text-foreground/80">{skill.icon}</span>
      <span className="text-base font-semibold">{skill.name}</span>
    </div>
  );
};

export default TechPill;
