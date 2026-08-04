import { Github, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';
import Logo from '../ui/Logo';
import { navLinks, site, whatsappLink } from '../../config/site';

const socials = [
  { icon: MessageCircle, label: 'WhatsApp', href: whatsappLink },
  { icon: Linkedin, label: 'LinkedIn', href: site.linkedin },
  { icon: Github, label: 'GitHub', href: site.github },
  { icon: Mail, label: 'Email', href: `mailto:${site.email}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-slate-50/60 dark:border-white/10 dark:bg-ink-900/50">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-auto" />
              <div>
                <p className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {site.name}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{site.role}</p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {site.description} Serving ISPs, hotels, restaurants, schools, offices and small
              businesses.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPin className="h-4 w-4 text-brand-500" aria-hidden="true" />
              {site.location}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 dark:text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 dark:text-white">
              Get in touch
            </h3>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-whatsapp mt-5 w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Message on WhatsApp
            </a>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:-translate-y-0.5 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 pt-8 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Built with React, Tailwind CSS and deployed on Cloudflare.
          </p>
        </div>
      </div>
    </footer>
  );
}
