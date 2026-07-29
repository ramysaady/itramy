import { Clock, Linkedin, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { audiences, site, whatsappLink } from '../../config/site';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: site.linkedin,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: site.location,
    href: null,
  },
  {
    icon: Clock,
    label: 'Response time',
    value: site.responseTime,
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl border border-slate-200/70 bg-gradient-to-br from-ink-900 via-ink-800 to-brand-900 px-6 py-16 shadow-lift sm:px-12 sm:py-20 dark:border-white/10">
            <div className="absolute inset-0 bg-grid-dark bg-[size:48px_48px] opacity-40" aria-hidden="true" />
            <div
              className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-500/25 blur-[100px]"
              aria-hidden="true"
            />
            <div
              className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-400/20 blur-[100px]"
              aria-hidden="true"
            />

            <div className="relative grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-100 backdrop-blur-sm">
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  Contact
                </span>

                <h2 className="heading-lg mt-6 !text-white">
                  Let&apos;s build a network your business stops worrying about
                </h2>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
                  Send a message with your location, number of users and the issue you want solved.
                  You will get a clear plan, an honest hardware list and a fixed price.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-whatsapp w-full !px-8 !py-4 !text-base sm:w-auto"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    Contact on WhatsApp
                  </a>

                  <a
                    href={`mailto:${site.email}`}
                    className="btn w-full border border-white/20 bg-white/5 !px-8 !py-4 !text-base text-white hover:border-white/40 hover:bg-white/10 sm:w-auto"
                  >
                    <Mail className="h-5 w-5" aria-hidden="true" />
                    Send an email
                  </a>
                </div>

                <div className="mt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Who I work with
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {audiences.map((audience) => (
                      <span
                        key={audience}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                      >
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="grid gap-3">
                  {channels.map(({ icon: Icon, label, value, href }) => {
                    const content = (
                      <>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-brand-200">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                            {label}
                          </span>
                          <span className="mt-1 block truncate text-sm font-semibold text-white">
                            {value}
                          </span>
                        </span>
                      </>
                    );

                    return href ? (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith('mailto:') ? undefined : '_blank'}
                        rel="noreferrer noopener"
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand-300/40 hover:bg-white/10"
                      >
                        {content}
                      </a>
                    ) : (
                      <div
                        key={label}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>

                <p className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                  {site.availability}. Urgent outages are prioritised for existing clients.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
