import { Briefcase } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/portfolio';

export default function Portfolio() {
  return (
    <section id="portfolio" className="section bg-slate-50/60 dark:bg-ink-900/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Portfolio"
          icon={Briefcase}
          title="Selected deployments"
          description="Real MikroTik, Ubiquiti and Ruijie infrastructure delivered for providers, hospitality, education and enterprise clients."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={0.05 * index}>
              <article className="card card-hover group flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.brand} deployment`}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    {project.brand}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-brand-600 dark:text-brand-300">
                    {project.metric}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
