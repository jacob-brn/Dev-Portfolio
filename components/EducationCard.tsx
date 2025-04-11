import { EducationProps } from "@/config/config";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const EducationCard = (props: EducationProps) => {
  return (
    <div className="overflow-hidden group">
      <div className="py-2 cursor-pointer">
        <div className="flex flex-row items-center gap-x-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={props.schoolLogoUrl}
              alt={`${props.schoolName} logo`}
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-grow">
            <div className="flex flex-col">
              <h4 className="inline-flex text-foreground font-semibold text-base items-center ">
                {props.schoolName}
                <ChevronRight
                  className={cn(
                    "opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 size-4"
                  )}
                />
              </h4>
              <p className="text-sm text-muted-foreground">{props.degree}</p>
            </div>
          </div>

          {/* Date Range */}
          <div className="text-right flex-shrink-0">
            <p className="text-muted-foreground text-sm font-medium">
              {props.startDate} - {props.endDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
