import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, LayoutGrid } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { serviceCategories, services } from '../../data/services';
import { whatsappLink } from '../../config/site';

export default function Services() {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(
    () => (filter === 'All' ? services : services.filter((item) => item.category === filter)),
    [filter]
  );

  return (
    <section id="services" className="section bg-slate-50/60 dark:bg-ink-900/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          icon={LayoutGrid}
          title="Everything your network needs, in one place"
          description="Twenty-five focused services covering design, deployment, security, servers and automation."
        />

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {serviceCategories.map((category) => {
              const isActive = filter === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  aria-pressed={isActive}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-600 to-brand-400 text-white shadow-glow'
                      : 'glass text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((service, index) => (
              <motion.article
                key={service.title}
                layout
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.03, 0.25),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card card-hover group relative flex flex-col gap-4 rounded-3xl p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/15 to-sky-400/10 text-brand-600 ring-1 ring-inset ring-brand-500/15 transition group-hover:scale-105 dark:text-brand-300">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>
                </div>

                <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 transition group-hover:text-brand-600 dark:group-hover:text-brand-300">
                  {service.category}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </span>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.1}>
          <div className="card mt-12 flex flex-col items-center gap-5 rounded-4xl p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Not sure which service fits your setup?
              </h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                Send a short description of your site and you will get a clear recommendation.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-primary shrink-0"
            >
              Get a recommendation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
