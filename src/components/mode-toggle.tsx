"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="cursor-pointer"
        aria-label="change theme"
        disabled
      >
        <Sun size={24} className="opacity-0" />
      </Button>
    );
  }

  const toggleTheme = () => {
    // استخدم resolvedTheme للحصول على الثيم الفعلي (dark أو light)
    // حتى لو كان theme هو "system"
    const currentTheme = resolvedTheme || theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  // استخدم resolvedTheme لعرض الأيقونة الصحيحة
  const currentTheme = resolvedTheme || theme;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="cursor-pointer"
      aria-label={currentTheme === "dark" ? "Activate sun mode" : "Activate dark mode"}
    >
      {currentTheme === "dark" ? (
        <Sun size={24} aria-hidden="true" />
      ) : (
        <Moon size={24} aria-hidden="true" />
      )}
      <span className="sr-only">
        {currentTheme === "dark" ? "Activate sun mode" :"Activate dark mode"}
      </span>
    </Button>
  );
}
