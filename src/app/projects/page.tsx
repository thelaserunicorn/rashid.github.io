import Link from "next/link";

const projects = [
  {
    title: "GitPeek",
    description: "CLI tool that fetches and displays your GitHub commits (today and this week), grouped by repository",
    tech: ["Go", "CLI", "GitHub API"],
    link: "https://github.com/thelaserunicorn/gitpeek",
  },
  {
    title: "Snippetbox",
    description: "Web application that lets people paste and share snippets of text — like Pastebin or GitHub Gists",
    tech: ["Go", "HTML/CSS", "SQL"],
    link: "https://github.com/thelaserunicorn/snippetbox",
  },
  {
    title: "Monkey",
    description: "A small, interpreted or compiled programming language written in Go with C-like syntax",
    tech: ["Go", "Interpreter", "Lexer"],
    link: "https://github.com/thelaserunicorn/monkey",
  },
  {
    title: "Goku",
    description: "CLI tool to convert between JSON and YAML formats",
    tech: ["Go", "CLI", "JSON/YAML"],
    link: "https://github.com/thelaserunicorn/goku",
  },
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-serif text-4xl text-foreground">Projects</h1>
        <p className="mt-2 text-secondary font-sans">
          A collection of projects I&apos;ve worked on.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="border border-border rounded-lg p-4 bg-surface hover:border-accent/50 transition-colors"
          >
            <Link href={project.link}>
              <h2 className="font-serif text-lg text-foreground hover:text-accent transition-colors">
                {project.title}
              </h2>
            </Link>
            <p className="mt-2 text-sm text-secondary font-sans">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-1.5 py-0.5 bg-background border border-border rounded text-secondary font-sans"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
