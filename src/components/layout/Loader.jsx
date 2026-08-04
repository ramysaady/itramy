import { motion } from 'framer-motion';
import Logo from '../ui/Logo';
import { site } from '../../config/site';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-white dark:bg-ink-950"
      role="status"
      aria-live="polite"
      aria-label="Loading IT Ramy website"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Logo className="h-16 w-auto sm:h-20" />
      </motion.div>

      <div className="text-center">
        <p className="font-display text-lg font-bold text-slate-900 dark:text-white">
          {site.name}
        </p>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
          {site.role}
        </p>
      </div>

      <div className="h-1 w-44 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand-600 to-sky-300"
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}
