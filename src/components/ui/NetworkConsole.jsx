import { motion } from 'framer-motion';
import {
  Activity,
  Check,
  Cloud,
  Radio,
  Router,
  Server,
  ShieldCheck,
  Wifi,
} from 'lucide-react';

const nodes = [
  { icon: Cloud, label: 'Cloud edge', x: '50%', y: '12%', delay: 0.1 },
  { icon: ShieldCheck, label: 'Security', x: '18%', y: '48%', delay: 0.2 },
  { icon: Router, label: 'Core router', x: '50%', y: '48%', delay: 0.3, primary: true },
  { icon: Server, label: 'Services', x: '82%', y: '48%', delay: 0.4 },
  { icon: Wifi, label: 'Wireless', x: '32%', y: '84%', delay: 0.5 },
  { icon: Radio, label: 'Remote site', x: '68%', y: '84%', delay: 0.6 },
];

const lines = [
  ['50%', '18%', '22%', '48%'],
  ['50%', '18%', '50%', '48%'],
  ['50%', '18%', '78%', '48%'],
  ['22%', '52%', '46%', '52%'],
  ['54%', '52%', '78%', '52%'],
  ['48%', '55%', '34%', '80%'],
  ['52%', '55%', '66%', '80%'],
];

export default function NetworkConsole() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[590px]"
      aria-label="Illustration of a monitored network infrastructure"
    >
      <div className="absolute -inset-10 -z-10 rounded-full bg-brand-500/20 blur-[80px] dark:bg-brand-500/25" />

      <div className="console-shell overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 shadow-[0_40px_100px_-35px_rgba(15,23,42,0.45)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#09111f]/80 dark:shadow-[0_40px_120px_-35px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between border-b border-slate-200/80 px-5 py-4 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Network Operations
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Protected
          </span>
        </div>

        <div className="grid gap-4 p-4 sm:p-5">
          <div className="relative h-[270px] overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-50/75 dark:border-white/[0.08] dark:bg-white/[0.025]">
            <div className="absolute inset-0 bg-grid-light bg-[size:28px_28px] opacity-60 dark:bg-grid-dark" />

            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <linearGradient id="network-line" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#60a5fa" stopOpacity="0.18" />
                  <stop offset="0.5" stopColor="#2f80ff" stopOpacity="0.7" />
                  <stop offset="1" stopColor="#7dd3fc" stopOpacity="0.18" />
                </linearGradient>
              </defs>
              {lines.map(([x1, y1, x2, y2], index) => (
                <motion.line
                  key={`${x1}-${y1}-${index}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#network-line)"
                  strokeWidth="1.5"
                  strokeDasharray="5 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 + index * 0.08 }}
                />
              ))}
            </svg>

            {nodes.map(({ icon: Icon, label, x, y, delay, primary }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18, delay }}
                className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
                style={{ left: x, top: y }}
              >
                <span
                  className={`relative mx-auto flex items-center justify-center rounded-2xl border shadow-soft ${
                    primary
                      ? 'h-14 w-14 border-brand-300/70 bg-gradient-to-br from-brand-600 to-brand-400 text-white shadow-glow'
                      : 'h-11 w-11 border-slate-200 bg-white text-brand-600 dark:border-white/10 dark:bg-ink-800 dark:text-brand-300'
                  }`}
                >
                  {primary ? (
                    <span className="absolute -inset-2 -z-10 animate-pulse rounded-3xl bg-brand-500/20" />
                  ) : null}
                  <Icon className={primary ? 'h-6 w-6' : 'h-4.5 w-4.5'} aria-hidden="true" />
                </span>
                <span className="mt-1.5 block whitespace-nowrap text-[9px] font-semibold text-slate-500 dark:text-slate-400">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            <Metric icon={Activity} value="99.9%" label="Uptime ready" />
            <Metric icon={ShieldCheck} value="24/7" label="Monitoring" />
            <Metric icon={Check} value="100%" label="Documented" />
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="glass absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-lift sm:flex"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/12 text-emerald-600 dark:text-emerald-300">
          <ShieldCheck className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
            Security posture
          </span>
          <span className="mt-0.5 block text-xs font-bold text-slate-900 dark:text-white">
            All systems protected
          </span>
        </span>
      </motion.div>
    </motion.div>
  );
}

function Metric({ icon: Icon, value, label }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-3 dark:border-white/[0.08] dark:bg-white/[0.035]">
      <div className="flex items-center gap-1.5">
        <Icon className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
        <span className="font-display text-sm font-bold text-slate-900 dark:text-white">{value}</span>
      </div>
      <p className="mt-1 text-[9px] font-medium text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}
