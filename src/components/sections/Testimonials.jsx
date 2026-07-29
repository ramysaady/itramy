import { Quote, Star } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section className="section bg-slate-50/60 dark:bg-ink-900/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          icon={Star}
          title="What clients say after handover"
          description="Feedback from providers, hospitality and education clients across Lebanon."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={0.08 * index}>
              <figure className="card card-hover flex h-full flex-col rounded-3xl p-7">
                <Quote className="h-7 w-7 text-brand-500/40" aria-hidden="true" />

                <div className="mt-4 flex gap-0.5" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {testimonial.quote}
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200/70 pt-5 dark:border-white/10">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-400 text-sm font-bold text-white">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {testimonial.role} &middot; {testimonial.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
