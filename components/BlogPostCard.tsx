import { cn } from "@/lib/utils";
import { Calendar, ChevronRight, Clock, Dot } from "lucide-react";
import moment from "moment";
import Link from "next/link";

interface BlogPostCardProps {
  title: string;
  description: string;
  publishedAt: string;
  timeToRead?: number;
  slug: string;
}

const BlogPostCard = (props: BlogPostCardProps) => {
  return (
    <Link href={`/blog/${props.slug}`} className="w-full">
      <div className="w-full border p-6 rounded-sm group cursor-pointer transition-all duration-300 hover:bg-secondary/80">
        <div className="flex flex-row items-center gap-x-4">
          <div className="flex-grow">
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-row items-center justify-between">
                <h4 className="inline-flex text-foreground font-semibold text-base items-center ">
                  {props.title}
                  <ChevronRight
                    className={cn(
                      "opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 size-4"
                    )}
                  />
                </h4>
                <div className="flex flex-row gap-x-1 items-center">
                  <span className="inline-flex items-center gap-x-1 text-sm text-muted-foreground">
                    <Calendar className="size-4" />
                    {moment(props?.publishedAt, "DD.MM.YYYY").format(
                      "DD.MM.YYYY"
                    )}
                  </span>
                  <Dot className="size-4 text-muted-foreground" />
                  <span className="inline-flex items-center gap-x-1 text-sm text-muted-foreground">
                    <Clock className="size-4" />
                    {props.timeToRead} min
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
