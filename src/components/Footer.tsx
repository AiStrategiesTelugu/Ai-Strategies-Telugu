import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Send, AlertTriangle, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND, NAV_LINKS } from '../data/brand';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/images/ai-smart-strategies-logo.png"
                alt="AI Smart Strategies Telugu Logo"
                className="h-11 w-auto object-contain rounded"
              />
              <div>
                <span className="font-extrabold text-[#07182F] tracking-tight text-lg block leading-none">
                  AI STRATEGIES
                </span>
                <span className="text-xs font-bold text-brand-blue font-telugu">
                  తెలుగు <span className="text-slate-400 font-sans font-normal uppercase text-[9px]">Trading Tech</span>
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              Empowering Telugu-speaking traders with rule-based algorithmic analysis, disciplined execution rules, and transparent technological tools for Indian financial markets.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={BRAND.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-md border border-emerald-200 transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                <span>WhatsApp Desk</span>
              </a>
              <a
                href={BRAND.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-brand-blue bg-blue-50 hover:bg-blue-100 rounded-md border border-blue-200 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-brand-blue" />
                <span>Telegram: {BRAND.telegram.name}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs font-bold text-[#07182F] uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-brand-blue transition-colors flex items-center justify-between group text-slate-600"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-blue" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-[#07182F] uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/results-services" className="hover:text-brand-blue transition-colors text-slate-600">
                  AI Automated Trading
                </Link>
              </li>
              <li>
                <Link to="/results-services" className="hover:text-brand-blue transition-colors text-slate-600">
                  WhatsApp Trading Information
                </Link>
              </li>
              <li>
                <Link to="/results-services" className="hover:text-brand-blue transition-colors text-slate-600">
                  VIP Telegram Membership
                </Link>
              </li>
              <li>
                <Link to="/strategy" className="hover:text-brand-blue transition-colors text-slate-600">
                  Rule-Based AI Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold text-[#07182F] uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
              Contact &amp; Office
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <address className="not-italic text-xs text-slate-500 leading-relaxed">
                  <span className="font-semibold text-slate-700 block">{BRAND.name}</span>
                  {BRAND.address.line1},<br />
                  {BRAND.address.line2},<br />
                  {BRAND.address.state} – {BRAND.address.pincode}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="text-xs font-semibold text-slate-700 hover:text-brand-blue transition-colors"
                >
                  {BRAND.phone}
                </a>
              </div>

              <div className="pt-1">
                <span className="text-[11px] text-slate-400 block font-medium">Founder &amp; CEO</span>
                <span className="text-xs font-bold text-[#07182F]">{BRAND.founder}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Risk Disclaimer Box */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Mandatory Risk Disclosure &amp; Financial Disclaimer
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {BRAND.disclaimer}
              </p>
              <p className="text-[11px] text-slate-400 leading-relaxed pt-0.5">
                AI Smart Strategies Telugu does not offer investment advisory, portfolio management services (PMS), or guaranteed profit schemes. Trading in derivatives (F&amp;O) carries substantial financial risk. Please evaluate your financial position and consult an authorized financial advisor before trading.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {currentYear} {BRAND.name}. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
            <span>Financial Technology &amp; Automated Strategy Assistance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
