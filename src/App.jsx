import { BrowserRouter as Router, Routes, Route, ScrollRestoration, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

// Eager load Home for fastest FCP
import Home from './pages/Home';

// Lazy load other pages for code splitting
const SafarisHub = lazy(() => import('./pages/SafarisHub'));
const SafariDetail = lazy(() => import('./pages/SafariDetail'));
const DestinationsHub = lazy(() => import('./pages/DestinationsHub'));
const DestinationDetail = lazy(() => import('./pages/DestinationDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-3 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <p className="text-sm text-on-surface-variant font-medium">Loading...</p>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Safaris */}
          <Route path="/safaris" element={<SafarisHub />} />
          <Route path="/safaris/:country" element={<SafarisHub />} />
          <Route path="/safari/:slug" element={<SafariDetail />} />
          
          {/* Destinations */}
          <Route path="/destinations" element={<DestinationsHub />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
          
          {/* Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* Fallback → Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
