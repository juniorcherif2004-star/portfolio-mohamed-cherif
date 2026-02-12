'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-secondary-200 dark:bg-secondary-700 hover:bg-secondary-300 dark:hover:bg-secondary-600 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-secondary-700 dark:text-secondary-200" />
      ) : (
        <Sun className="w-5 h-5 text-secondary-700 dark:text-secondary-200" />
      )}
    </button>
  );
}
