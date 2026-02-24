import Link from "next/link";

const projects = [
  {
    title: "Portfolio",
    description: "Minimal portfolio with Next.js and markdown blog",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/thelaserunicorn/thelaserunicorn.github.io",
  },
  {
    title: "Task API",
    description: "RESTful API with Node.js, Express, PostgreSQL",
    tech: ["Node.js", "Express", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Weather App",
    description: "Real-time weather dashboard with visualizations",
    tech: ["React", "OpenWeather", "Chart.js"],
    link: "#",
  },
  {
    title: "Notes App",
    description: "Note-taking with markdown and local storage",
    tech: ["Vue.js", "LocalStorage", "Markdown"],
    link: "#",
  },
  {
    title: "URL Shortener",
    description: "URL shortening with analytics and QR codes",
    tech: ["Python", "FastAPI", "SQLite"],
    link: "#",
  },
  {
    title: "Chat App",
    description: "Real-time messaging with WebSockets",
    tech: ["Node.js", "Socket.io", "Redis"],
    link: "#",
  },
  {
    title: "E-commerce",
    description: "Full-featured online store with payments",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    title: "CLI Tools",
    description: "Collection of useful command-line utilities",
    tech: ["Rust", "CLI", "TUI"],
    link: "#",
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
