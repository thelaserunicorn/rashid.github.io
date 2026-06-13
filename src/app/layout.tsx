import type { Metadata } from "next";
import { Instrument_Serif, Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
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
  icons: {
    icon: "/images.png",
  },
  openGraph: {
    title: "Rashid",
    description: "A minimal portfolio with a markdown blog",
    url: "https://rashid.pages.dev",
    siteName: "Rashid",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Rashid's Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashid",
    description: "A minimal portfolio with a markdown blog",
    images: ["/og-image.png"],
  },
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
                  <Link href="/" className="flex items-center">
                    <Image src="/images.png" alt="Rashid" width={32} height={32} className="rounded-full" />
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
                &copy; {new Date().getFullYear()} Rashid Iftekhar &middot; Thoughts on systems, software, and everything in between
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
