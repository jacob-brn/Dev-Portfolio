import {
  defineCollection,
  defineConfig,
  preprocess,
} from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import codeImport from "remark-code-import";

const BlogPost = defineCollection({
  name: "BlogPost",
  directory: "content/blog",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string(),
    timeToRead: z.number().optional(),
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm, codeImport],
      rehypePlugins: [
        rehypeAutolinkHeadings,
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: "github-dark",
            onVisitLine(node: { children: string | any[] }) {
              // Implement line numbering logic here
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }];
              }
            },
            onVisitHighlightedLine(node: {
              properties: { className: string[] };
            }) {
              node.properties.className.push("highlighted");
            },
            onVisitHighlightedWord(node: {
              properties: { className: string[] };
            }) {
              node.properties.className = ["word"];
            },
          },
        ],
      ],
    });

    return {
      ...document,
      slug: `/${document._meta.path}`,
      slugAsParams: document._meta.path,
      body: {
        raw: document.content,
        code: body,
      },
    };
  },
});

export default defineConfig({
  collections: [BlogPost],
});
