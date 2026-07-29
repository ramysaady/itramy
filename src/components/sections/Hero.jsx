import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import ParticleField from '../ui/ParticleField';
import { audiences, site, whatsappLink } from '../../config/site';
import { useTypewriter } from '../../hooks/useTypewriter';

const rotating = [
  'MikroTik & RouterOS',
  'ISP Infrastructure',
  'Hotspot & PPPoE',
  'Servers & Automation',
  'Network Security',
];

const highlights = [
  { icon: ShieldCheck, label: 'Secure by design' },
  { icon: Zap, label: 'Built for uptime' },
  { icon: Sparkles, label: 'Fully documented' },
];

export default function Hero() {
  const typed = useTypewriter(rotating);

  return (
    <section id="top" className="relative isolate overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-36">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/70 via-white to-white dark:from-ink-900 dark:via-ink-950 dark:to-ink-950" />

      <div className="absolute inset-0 -z-10 bg-grid-light bg-[size:64px_64px] opacity-60 mask-fade-b dark:bg-grid-dark" />

      <div className="absolute inset-x-0 top-0 -z-10 h-[560px]">
        <ParticleField className="h-full w-full opacity-70 dark:opacity-90" />
      </div>

      <div
        className="absolute left-1/2 top-[-10rem] -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand-400/20 blur-[120px] dark:bg-brand-500/20"
        aria-hidden="true"
      />

      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {site.availability}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="heading-xl mt-7"
          >
            Professional <span className="gradient-text">IT &amp; Network</span> Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="lede mx-auto mt-6 max-w-2xl"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-7 flex min-h-[2rem] items-center justify-center gap-2 font-display text-base font-semibold text-slate-700 sm:text-lg dark:text-slate-200"
          >
            <span className="text-slate-500 dark:text-slate-400">Specialised in</span>
            <span className="text-brand-600 dark:text-brand-300">{typed}</span>
            <span className="inline-block h-5 w-[2px] animate-blink bg-brand-500" aria-hidden="true" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Contact on WhatsApp
            </a>

            <a href="#services" className="btn-ghost group w-full sm:w-auto">
              View Services
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-600 dark:text-slate-400"
          >
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2">
                <Icon className="h-4 w-4 text-brand-500" aria-hidden="true" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 sm:mt-20"
        >
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
            Trusted by
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {audiences.map((audience) => (
              <span
                key={audience}
                className="glass rounded-full px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 sm:text-sm"
              >
                {audience}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
