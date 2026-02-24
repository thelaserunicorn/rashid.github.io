import { getPostBySlug, getPostSlugs, formatDate } from "@/lib/posts";
import { notFound } from "next/navigation";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

const marked = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);

marked.setOptions({
  gfm: true,
  breaks: true,
});

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = await marked.parse(post.content);

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="font-serif text-4xl text-foreground">{post.title}</h1>
        <time className="text-sm text-secondary font-sans">{formatDate(post.date)}</time>
      </header>
      <div
        className="prose prose-stone prose-lg max-w-none font-sans
          prose-headings:font-serif prose-headings:text-foreground prose-headings:font-normal
          prose-p:text-secondary prose-p:leading-relaxed
          prose-strong:font-normal prose-strong:text-foreground
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-code:text-foreground prose-code:bg-surface prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-surface prose-pre:text-foreground prose-pre:rounded-lg
          prose-blockquote:border-l-accent prose-blockquote:text-secondary
          prose-hr:border-border"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
