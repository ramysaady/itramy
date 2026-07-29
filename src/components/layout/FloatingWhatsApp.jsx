import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { site, whatsappLink } from '../../config/site';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Contact IT Ramy on WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4, ease: 'easeOut' }}
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 px-4 py-3.5 text-sm font-semibold text-white shadow-lift transition hover:from-emerald-500 hover:to-emerald-300"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-500/30" />
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-[9rem] sm:inline">
        Chat with me
      </span>
      <span className="sr-only">{`Message ${site.name} on WhatsApp`}</span>
    </motion.a>
  );
}
