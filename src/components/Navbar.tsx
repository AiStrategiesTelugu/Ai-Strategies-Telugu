import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND, NAV_LINKS } from '../data/brand';

interface NavbarProps {
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] h-[72px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-full">
          {/* Left: Brand Logo & Text */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg p-0.5"
            aria-label="AI Smart Strategies Telugu Home"
          >
            <img
              src="/images/ai-smart-strategies-logo.png"
              alt="AI Smart Strategies Telugu Logo"
              className="h-11 sm:h-12 w-auto object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-[#07182F] tracking-tight text-base sm:text-lg leading-tight uppercase font-sans">
                AI SMART STRATEGIES
              </span>
              <span className="text-sm font-bold text-brand-blue tracking-normal font-telugu leading-tight">
                తెలుగు
              </span>
            </div>
          </Link>

          {/* Center Navigation Links with Active Underline on Home */}
          <nav className="hidden lg:flex items-center gap-8 h-full" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors relative py-6 flex items-center ${
                    isActive
                      ? 'text-brand-blue after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-brand-blue after:rounded-full'
                      : 'text-slate-600 hover:text-[#07182F]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Phone & Book Free Demo Button */}
          <div className="hidden md:flex items-center gap-5">
            {/* Phone with WhatsApp Icon */}
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-bold text-[#07182F] hover:text-brand-blue transition-colors group"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <WhatsAppIcon className="w-4 h-4 fill-white" />
              </div>
              <span>{BRAND.phone}</span>
            </a>

            {/* Book Free Demo Button */}
            <button
              type="button"
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-blue-600 active:bg-blue-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue group"
            >
              <span>Book Free Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenDemo}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-brand-blue hover:bg-blue-600 shadow-sm"
            >
              Free Demo
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#07182F] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold ${
                    isActive
                      ? 'text-brand-blue bg-blue-50'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-[#07182F] bg-slate-50 border border-slate-200"
              >
                <span>Call Us</span>
              </a>
              <a
                href={BRAND.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenDemo();
              }}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-blue-600 shadow-sm"
            >
              <span>Book Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
