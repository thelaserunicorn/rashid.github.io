"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme } = useTheme();

  return (
    <button
      onClick={() => document.dispatchEvent(new CustomEvent("toggle-theme"))}
      className="text-secondary hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
