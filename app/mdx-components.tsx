import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  img: ({ src, alt }) => (
    <Image
      src={src as string}
      alt={alt as string}
      width={9999}
      height={9999}
      quality={100}
      loading="lazy"
      className="w-full h-full rounded-lg border-border border shadow-md"
    />
  ),
  p: ({ children }) => <p className="text-foreground">{children}</p>,
  h1: ({ children }) => (
    <h1 className="text-3xl font-semibold text-foreground">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold text-foreground">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-foreground">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold text-foreground">{children}</h4>
  ),
  h5: ({ children }) => (
    <h5 className="text-lg font-semibold text-foreground">{children}</h5>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
};

export default mdxComponents;
