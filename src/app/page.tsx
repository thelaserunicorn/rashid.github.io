import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="font-serif text-4xl text-foreground">
          Hello, I'm Rashid
        </h1>
        <p className="text-lg text-secondary leading-relaxed font-sans">
          Welcome to my portfolio. I build things with code and write about my
          experiences along the way.
        </p>
        <p className="text-secondary leading-relaxed font-sans">
          Here you&apos;ll find my{" "}
          <Link href="/projects" className="text-accent hover:underline">
            projects
          </Link>{" "}
          and{" "}
          <Link href="/blog" className="text-accent hover:underline">
            blog posts
          </Link>{" "}
          about software development.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl text-foreground">About Me</h2>
        <p className="text-secondary leading-relaxed font-sans">
          I&apos;m a software developer passionate about building minimal,
          functional applications. When I&apos;m not coding, you can find me
          exploring new technologies or documenting what I learn.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl text-foreground">Get in Touch</h2>
        <p className="text-secondary leading-relaxed font-sans">
          Feel free to reach out or follow along on my journey through this
          blog.
        </p>
        <a
          href="mailto:rashideram2@gmail.com"
          className="inline-block bg-accent text-white px-4 py-2 rounded font-sans hover:opacity-90 transition-opacity"
        >
          Send me an email
        </a>
      </section>
    </div>
  );
}
