import NavBar from "@/components/navbar";
import { getAllPosts } from "@/lib/markdown";
import { JSX } from "react";
import { siteConfig } from "@/config/config";
import BlogPostCard from "@/components/BlogPostCard";

export const metadata = {
  title: `Blog | ${siteConfig.title}`,
  description: `${siteConfig.title} blog`,
};

const BlogPage = async (): Promise<JSX.Element> => {
  const posts = await getAllPosts();

  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.publishedAt);
    const dateB = new Date(b.publishedAt);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="relative min-h-screen w-full max-w-3xl mx-auto border-x flex flex-col">
      <NavBar />
      <div className="absolute top-0 -left-4 w-4 h-full border text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(-315deg,currentColor_0_1px,#0000_0_50%)]"></div>
      <div className="hidden md:block absolute top-0 -right-4 w-4 h-full border text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(-315deg,currentColor_0_1px,#0000_0_50%)]"></div>
      <div className="w-full h-14 text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
      <div className="w-full border-y">
        <div className="grid lg:grid-cols-1 divide-x">
          <div className="p-6 grid gap-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              Latest Blog Posts
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-[44px] text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />
      <div className="w-full border-y p-6 flex flex-grow flex-col gap-y-4">
        {sortedPosts.map((post, index) => (
          <BlogPostCard {...post} key={index} />
        ))}
      </div>
      <div className="w-full h-14 text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
    </div>
  );
};

export default BlogPage;
