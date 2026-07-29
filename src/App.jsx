import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
  }, [loading]);

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

      <main>
        <Suspense fallback={<div className="min-h-[70vh]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </>
  );
}
