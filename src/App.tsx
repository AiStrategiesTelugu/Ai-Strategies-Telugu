import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { Home } from './pages/Home';
import { Strategy } from './pages/Strategy';
import { ResultsServices } from './pages/ResultsServices';
import { AboutContact } from './pages/AboutContact';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { BRAND } from './data/brand';

// Scroll to top on navigation component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Update document title dynamically based on route
    switch (pathname) {
      case '/':
        document.title = 'AI SMART STRATEGIES TELUGU — Trade With AI | Automated Trading & Strategy';
        break;
      case '/strategy':
        document.title = 'AI Strategy Setup — AI SMART STRATEGIES TELUGU | Candlestick Indications & Risk Rules';
        break;
      case '/results-services':
        document.title = 'Trading Results & Services — AI SMART STRATEGIES TELUGU | Automated Trading & WhatsApp Alerts';
        break;
      case '/about':
        document.title = 'About Us & Contact — AI SMART STRATEGIES TELUGU | Founder A. Jagadeesh & Office Details';
        break;
      default:
        document.title = 'AI SMART STRATEGIES TELUGU — Trade With AI';
    }
  }, [pathname]);

  return null;
};

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-brand-primaryText font-sans">
        <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenDemo={() => setIsDemoModalOpen(true)} />} />
            <Route path="/strategy" element={<Strategy onOpenDemo={() => setIsDemoModalOpen(true)} />} />
            <Route path="/results-services" element={<ResultsServices onOpenDemo={() => setIsDemoModalOpen(true)} />} />
            <Route path="/about" element={<AboutContact onOpenDemo={() => setIsDemoModalOpen(true)} />} />
            <Route path="*" element={<Home onOpenDemo={() => setIsDemoModalOpen(true)} />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Demo Booking Modal */}
        <DemoModal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
        />

        {/* Floating WhatsApp Quick Action Button */}
        <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
          <a
            href={BRAND.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white text-white" />
            <span className="text-xs font-bold pr-1 hidden sm:inline">WhatsApp Help</span>
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
