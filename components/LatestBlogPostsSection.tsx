import { getLatestPosts } from "@/lib/markdown";
import { JSX } from "react";
import BlogPostCard from "./BlogPostCard";

const LatestBlogPostsSection = async (): Promise<JSX.Element> => {
  const latestPosts = await getLatestPosts({ limit: 2 });

  return (
    <div className="w-full border-y p-6 flex flex-row flex-wrap gap-4">
      {latestPosts.map((post, index) => (
        <BlogPostCard {...post} key={index} />
      ))}
    </div>
  );
};

export default LatestBlogPostsSection;
