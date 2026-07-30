import { CheckCircle2, MapPin, UserRound } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import Counter from '../ui/Counter';
import SpotlightCard from '../ui/SpotlightCard';
import { aboutSecondary, aboutText, expertise, stats } from '../../data/about';
import { site } from '../../config/site';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="About Me"
          icon={UserRound}
          title="Networks that businesses can depend on"
          description="A hands-on specialist focused on infrastructure that stays fast, secure and simple to operate."
        />

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal direction="right" className="lg:col-span-5">
            <div className="relative">
              <div className="card overflow-hidden rounded-4xl p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink-950">
                  <img
                    src="/images/ramy.png"
                    alt={`${site.name}, ${site.role}`}
                    width={800}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-[center_18%] grayscale contrast-[1.05]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-display text-xl font-bold text-white">{site.name}</p>
                    <p className="mt-1 text-sm text-slate-300">{site.role}</p>
                  </div>
                </div>
              </div>

              <div className="card absolute -bottom-6 left-6 right-6 rounded-2xl px-5 py-4">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                  <MapPin className="h-4 w-4 text-brand-500" aria-hidden="true" />
                  {site.location}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  On-site across Lebanon &middot; remote support worldwide
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal direction="left">
              <p className="text-lg font-medium leading-relaxed text-slate-800 dark:text-slate-100">
                {aboutText}
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.08}>
              <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-400">
                {aboutSecondary}
              </p>
            </Reveal>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {expertise.map((item, index) => (
                <Reveal key={item.title} delay={0.05 * index}>
                  <div className="card card-hover flex h-full items-start gap-3 rounded-2xl p-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
                      <item.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="flex items-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-white">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.06 * index}>
              <SpotlightCard className="card card-hover h-full rounded-3xl p-7 text-center">
                <p className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
                  <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                <div className="mx-auto mt-5 h-px w-12 bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
