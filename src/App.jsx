import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Loader from './components/layout/Loader';
import BackToTop from './components/layout/BackToTop';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import ScrollProgress from './components/layout/ScrollProgress';
import Home from './pages/Home';
import { useTheme } from './hooks/useTheme';

const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
  }, [loading]);

  useEffect(() => {
    if (location.pathname !== '/') window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence>{loading ? <Loader /> : null}</AnimatePresence>

      <ScrollProgress />

      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense fallback={<div className="min-h-[70vh]" />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>

      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </>
  );
}
