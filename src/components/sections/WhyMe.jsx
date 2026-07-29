import { Award } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { process, reasons } from '../../data/whyMe';

export default function WhyMe() {
  return (
    <section id="why-me" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why Choose Me"
          icon={Award}
          title="Engineering standards, not quick fixes"
          description="Every project is delivered with the same discipline: planned, secured, documented and supported."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={0.06 * index}>
              <div className="card card-hover group relative h-full overflow-hidden rounded-3xl p-7">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-500/10 blur-2xl transition group-hover:bg-brand-500/20" />

                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-400 text-white shadow-glow">
                  <reason.icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <h3 className="relative mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                  {reason.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="text-center font-display text-xl font-bold text-slate-900 dark:text-white">
              How a project runs
            </h3>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={0.07 * index}>
                <div className="relative h-full rounded-3xl border border-dashed border-slate-300 p-6 transition hover:border-brand-400 dark:border-white/15 dark:hover:border-brand-400/50">
                  <span className="font-display text-3xl font-extrabold text-brand-500/30 dark:text-brand-400/30">
                    {item.step}
                  </span>
                  <h4 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
