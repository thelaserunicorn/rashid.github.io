import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-serif text-4xl text-foreground">Blog</h1>
        <p className="mt-2 text-secondary font-sans">
          Thoughts on software development and technology.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-secondary font-sans">No posts yet. Check back soon!</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="space-y-2">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="font-serif text-xl text-foreground hover:text-accent transition-colors">
                  {post.title}
                </h2>
              </Link>
              <time className="text-sm text-secondary font-sans">{formatDate(post.date)}</time>
              <p className="text-secondary font-sans">{post.description}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
