// components/ui/ThemeToggle.tsx
"use client";

import React, { useState, useEffect } from 'react';
// The hook comes directly from the library your ThemeProvider wraps:
import { useTheme } from "next-themes"; 
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect runs only on the client, fixing hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a visible placeholder to maintain layout height/width while loading
    return (
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background/50 border border-border">
          <Moon className="w-5 h-5 text-transparent animate-pulse" />
      </div>
    );
  }
  
  // Logic to determine what the next theme will be and the current icon
  // Check against 'dark' AND 'system' preference for accuracy
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const nextTheme = isDark ? 'light' : 'dark';
  const Icon = isDark ? Sun : Moon;
  const label = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      className="flex items-center justify-center w-8 h-8 rounded-full text-foreground/70 hover:text-primary transition-colors duration-300 bg-background/50 border border-border"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};