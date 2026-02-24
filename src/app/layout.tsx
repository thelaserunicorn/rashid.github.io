import type { Metadata } from "next";
import { Instrument_Serif, Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NavLink } from "@/components/NavLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rashid",
  description: "A minimal portfolio with a markdown blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body
        className={`${instrumentSerif.variable} ${bricolage.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <header className="border-b border-border">
              <nav className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
                  <Link href="/" className="font-serif text-xl">
                    Rashid
                  </Link>
                <div className="flex gap-6 text-sm items-center">
                  <NavLink href="/projects">Projects</NavLink>
                  <NavLink href="/blog">Blog</NavLink>
                  <ThemeToggle />
                </div>
              </nav>
            </header>
            <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
              {children}
            </main>
            <footer className="border-t border-border">
              <div className="max-w-3xl mx-auto px-6 py-6 text-sm text-secondary font-sans">
                &copy; {new Date().getFullYear()} Rashid
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
