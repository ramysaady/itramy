import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="glass relative flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-300"
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="flex"
      >
        {isDark ? (
          <Sun className="h-[18px] w-[18px]" aria-hidden="true" />
        ) : (
          <Moon className="h-[18px] w-[18px]" aria-hidden="true" />
        )}
      </motion.span>
    </button>
  );
}
