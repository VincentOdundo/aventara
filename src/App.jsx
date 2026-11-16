import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

// Eager load Home for fastest FCP
import Home from './pages/Home';

// Lazy load other pages for code splitting
const SafarisHub = lazy(() => import('./pages/SafarisHub'));
const SafariDetail = lazy(() => import('./pages/SafariDetail'));
const DestinationsHub = lazy(() => import('./pages/DestinationsHub'));
const DestinationDetail = lazy(() => import('./pages/DestinationDetail'));
const Kenya = lazy(() => import('./pages/Kenya'));
const Tanzania = lazy(() => import('./pages/Tanzania'));
const About = lazy(() => import('./pages/About'));
const CompanyProfile = lazy(() => import('./pages/CompanyProfile'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sand-cream text-midnight-black font-body">
      <div className="flex flex-col items-center gap-4">
        <div className="w-11 h-11 border-3 border-savannah-gold/25 border-t-savannah-gold border-r-sunset-orange rounded-full animate-spin"></div>
        <p className="text-xs uppercase tracking-[0.25em] text-safari-brown font-headline font-bold">
          Loading Adventure...
        </p>
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

/**
 * The routes without a router around them, so the browser can wrap them in a
 * BrowserRouter and the static prerender (src/entry-server.jsx) in a
 * StaticRouter. Both must render the same tree for hydration to match.
 */
export function AppRoutes() {
  return (
    <>
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
          <Route path="/kenya" element={<Kenya />} />
          <Route path="/tanzania" element={<Tanzania />} />
          
          {/* Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sitemap" element={<Sitemap />} />

          {/* Anything else is a real 404, not a copy of the home page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
