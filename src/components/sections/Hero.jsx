import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import ParticleField from '../ui/ParticleField';
import NetworkConsole from '../ui/NetworkConsole';
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
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36 lg:flex lg:items-center lg:pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/80 via-white to-white dark:from-[#0b1628] dark:via-ink-950 dark:to-ink-950" />

      <div className="absolute inset-0 -z-10 bg-grid-light bg-[size:64px_64px] opacity-50 mask-fade-b dark:bg-grid-dark" />

      <div className="absolute inset-x-0 top-0 -z-10 h-[720px]">
        <ParticleField className="h-full w-full opacity-45 dark:opacity-70" />
      </div>

      <div
        className="aurora animate-aurora-one absolute -left-32 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-brand-400"
        aria-hidden="true"
      />
      <div
        className="aurora animate-aurora-two absolute -right-32 top-32 -z-10 h-[34rem] w-[34rem] rounded-full bg-cyan-300"
        aria-hidden="true"
      />

      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-16">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-2 lg:justify-start"
            >
              <span className="eyebrow">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {site.availability}
              </span>
              <span className="hidden rounded-full border border-slate-200/80 bg-white/65 px-3.5 py-1.5 text-xs font-semibold text-slate-500 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-400 sm:inline-flex">
                Tripoli &middot; Lebanon &middot; Remote
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="heading-xl mt-7"
            >
              Professional IT &amp; network solutions,{' '}
              <span className="gradient-text">engineered for uptime.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="lede mx-auto mt-6 max-w-xl lg:mx-0"
            >
              Reliable infrastructure for ISPs, hospitality and growing businesses—from core
              routing and security to servers, WiFi and intelligent automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-6 flex min-h-[2rem] items-center justify-center gap-2 text-sm font-semibold sm:text-base lg:justify-start"
            >
              <span className="text-slate-500 dark:text-slate-400">Specialised in</span>
              <span className="text-brand-700 dark:text-brand-300">{typed}</span>
              <span
                className="inline-block h-5 w-[2px] animate-blink bg-brand-500"
                aria-hidden="true"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-whatsapp w-full !px-7 sm:w-auto"
              >
                <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
                Get a free assessment
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a href="#services" className="btn-ghost group w-full sm:w-auto">
                Explore services
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
              Direct specialist access &middot; clear scope &middot; no obligation
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.46 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-medium text-slate-600 dark:text-slate-400 lg:justify-start"
            >
              {highlights.map(({ icon: Icon, label }) => (
                <li key={label} className="inline-flex items-center gap-2">
                  <Icon className="h-4 w-4 text-brand-500" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="relative">
            <NetworkConsole />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62 }}
          className="mt-20 border-t border-slate-200/70 pt-7 dark:border-white/10"
        >
          <div className="flex flex-col items-center gap-5 xl:flex-row xl:justify-between">
            <p className="shrink-0 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 xl:text-left">
              Built for demanding environments
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {audiences.map((audience) => (
              <span
                key={audience}
                  className="text-xs font-semibold text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
              >
                {audience}
              </span>
            ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
