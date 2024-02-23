import { MDXRemote } from "next-mdx-remote";

export default function ActivityMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  //   const res = await fetch('https://...')
  //   const markdown = await res.text()
  return <MDXRemote source={markdown || ""} />;
}
