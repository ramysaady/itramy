import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Unplug } from 'lucide-react';
import Seo from '../components/ui/Seo';
import { site, whatsappLink } from '../config/site';

export default function NotFound() {
  return (
    <>
      <Seo
        title={`Page not found | ${site.name}`}
        description="The page you requested does not exist. Return to the IT Ramy homepage."
        noindex
      />

      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5 py-28">
        <div className="absolute inset-0 -z-10 bg-grid-light bg-[size:64px_64px] opacity-60 dark:bg-grid-dark" />
        <div
          className="absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-400/20 blur-[110px]"
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="glass inline-flex h-16 w-16 items-center justify-center rounded-3xl text-brand-600 dark:text-brand-300">
            <Unplug className="h-7 w-7" aria-hidden="true" />
          </span>

          <p className="mt-8 font-display text-6xl font-extrabold text-slate-900 sm:text-7xl dark:text-white">
            404
          </p>

          <h1 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
            This route does not resolve
          </h1>

          <p className="lede mt-4">
            The page you requested is unreachable. Head back to the homepage or send a message and
            you will get a direct answer.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn-primary w-full sm:w-auto">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to homepage
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Contact on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
