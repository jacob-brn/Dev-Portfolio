import { useMDXComponent } from "@content-collections/mdx/react";
import mdxComponents from "@/app/mdx-components";

const MDX = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code || "");

  if (!code) return null;
  return <Component components={mdxComponents} />;
};

export default MDX;
