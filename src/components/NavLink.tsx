"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`font-sans ${isActive ? "text-foreground" : "text-secondary hover:text-foreground"}`}
      style={{ transition: "color 0.2s" }}
    >
      {children}
    </Link>
  );
}
