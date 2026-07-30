import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import ThemeToggle from '../ui/ThemeToggle';
import { navLinks, site, whatsappLink } from '../../config/site';
import { useActiveSection } from '../../hooks/useActiveSection';

const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/80'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
        <a href="#top" className="flex items-center gap-3" aria-label="IT Ramy home">
          <Logo className="h-9 w-9" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold text-slate-900 dark:text-white">
              {site.name}
            </span>
            <span className="mt-0.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Network Specialist
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = active === id;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'text-brand-700 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-brand-500/10 dark:bg-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : null}
                <span className="relative">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Free assessment
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-slate-700 dark:text-slate-200 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="overflow-hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/95 lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-brand-500/10 hover:text-brand-700 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
                className="btn-whatsapp mt-3"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Contact on WhatsApp
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
