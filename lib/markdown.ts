import { allBlogPosts } from "content-collections";
import { type BlogPost as BlogPostType } from "content-collections";

export const getLatestPosts = ({ limit = 3 }: { limit?: number }) => {
  const latestPosts = allBlogPosts.slice(0, limit).sort((a, b) => {
    const dateA = new Date(a.publishedAt);
    const dateB = new Date(b.publishedAt);
    return dateB.getTime() - dateA.getTime();
  });

  const formattedLatestPosts = latestPosts.map((post: BlogPostType) => {
    return {
      title: post.title,
      timeToRead: post.timeToRead || 5,
      publishedAt: post.publishedAt,
      description: post.description,
      slug: post.slugAsParams,
    };
  });

  if (!latestPosts) return [];
  return [...formattedLatestPosts];
};

export const getAllPosts = async () => {
  const allPosts = allBlogPosts;
  const formattedPosts = allPosts.map((post: BlogPostType) => {
    return {
      title: post.title,
      timeToRead: post.timeToRead || 5,
      publishedAt: post.publishedAt,
      description: post.description,
      slug: post.slugAsParams,
    };
  });

  if (!allPosts) return [];
  return [...formattedPosts];
};

export const getPostBySlug = async (slug: string) => {
  const allPosts = allBlogPosts;
  const post = allPosts.find(
    (post: BlogPostType) => post.slugAsParams === slug
  );
  return post;
};
