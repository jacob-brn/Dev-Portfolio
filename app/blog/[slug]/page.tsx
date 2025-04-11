import MDX from "@/components/MDX";
import NavBar from "@/components/navbar";
import { siteConfig } from "@/config/config";
import { getPostBySlug } from "@/lib/markdown";
import { Calendar, Clock } from "lucide-react";
import { JSX } from "react";
import moment from "moment";
import { absoluteUrl } from "@/lib/utils";

interface pageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: pageProps) {
  const { slug } = await params;
  const res = await getPostBySlug(slug);

  if (!res) return null;
  const { title, description } = res;

  const ogUrl = new URL(siteConfig.ogImageUrl);
  ogUrl.searchParams.set("title", title);
  ogUrl.searchParams.set("description", description);

  return {
    title: `${siteConfig.title} | ${
      title.split(" ").length > 4
        ? title.split(" ").slice(0, 4).join(" ") + "..."
        : title
    }`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "article",
      url: absoluteUrl(slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [ogUrl.toString()],
    },
  };
}

const BlogPostPage = async ({ params }: pageProps): Promise<JSX.Element> => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <div className="relative min-h-screen w-full max-w-3xl mx-auto border-x flex flex-col">
      <NavBar />
      <div className="absolute top-0 -left-4 w-4 h-full border text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(-315deg,currentColor_0_1px,#0000_0_50%)]"></div>
      <div className="hidden md:block absolute top-0 -right-4 w-4 h-full border text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(-315deg,currentColor_0_1px,#0000_0_50%)]"></div>
      <div className="w-full h-14 text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
      <div className="w-full border-y">
        <div className="grid lg:grid-cols-1 divide-x">
          <div className="p-6 grid gap-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-balance">
              {post?.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-[44px] text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />
      <div className="w-full border-b flex flex-grow flex-col">
        <div className="w-full border-y p-6 flex flex-col gap-y-4">
          <div className="flex justify-between items-center">
            <span className="inline-flex items-center gap-x-1 text-sm text-muted-foreground">
              <Calendar className="size-4" />
              <span>
                {moment(post?.publishedAt, "DD.MM.YYYY").format("DD.MM.YYYY")} (
                {moment(post?.publishedAt, "DD.MM.YYYY").fromNow()})
              </span>
            </span>
            <span className="inline-flex items-center gap-x-1 text-sm text-muted-foreground">
              <Clock className="size-4" />
              {post?.timeToRead} min
            </span>
          </div>
          <p className="text-muted-foreground">{post?.description}</p>
        </div>
        <main className="max-w-none prose p-6">
          <MDX code={post?.body.code as string} />
        </main>
      </div>
      <div className="w-full h-14 text-border bg-[size:15px_15px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
    </div>
  );
};

export default BlogPostPage;
