import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Maximize2,
  AlertTriangle,
  Cpu,
  Send,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Info,
  Layers,
  ChevronRight
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { BRAND } from '../data/brand';
import { ImageModal, ModalImage } from '../components/ImageModal';

interface ResultsServicesProps {
  onOpenDemo: () => void;
}

export const ResultsServices: React.FC<ResultsServicesProps> = ({ onOpenDemo }) => {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const resultImages: ModalImage[] = [
    {
      src: '/images/trading-result-1.png',
      alt: 'Historical Trading Example - Intraday NIFTY Options P&L Statement',
      title: 'Historical Trading Result 1 — Intraday NIFTY P&L Statement',
      caption: 'Historical intraday order execution statement for NIFTY 18 Aug Put options. Provided as an illustrative historical example. Past results do not guarantee future performance.'
    },
    {
      src: '/images/trading-result-2.png',
      alt: 'Historical Trading Example - Broker Position & P&L Statement',
      title: 'Historical Trading Result 2 — Options Position Statement',
      caption: 'Broker position execution statement showing executed trade on NIFTY 18 Aug 24300 Put. Individual outcomes vary based on execution timing, liquidity, and broker conditions.'
    },
    {
      src: '/images/trading-result-3.png',
      alt: 'Historical Trading Example - Terminal Portfolio Position Overview',
      title: 'Historical Trading Result 3 — Terminal Portfolio Overview',
      caption: 'Trading terminal portfolio overview showing executed NIFTY 18th Aug Call & Put positions. Trading in derivatives involves substantial risk of capital loss.'
    }
  ];

  const whatsappInfoUrl = `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(
    'Hello AI Smart Strategies Telugu, I would like to receive details regarding the Personal WhatsApp Trading Information service.'
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Lightbox Modal */}
      <ImageModal
        images={resultImages}
        currentIndex={activeModalIndex}
        onClose={() => setActiveModalIndex(null)}
        onNavigate={(newIndex) => setActiveModalIndex(newIndex)}
      />

      {/* RESULTS HERO */}
      <section className="bg-gradient-to-b from-brand-lightBg via-white to-white py-12 lg:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
            <span>PERFORMANCE TRANSPARENCY &amp; SERVICES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            OUR TRADING RESULTS
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore selected historical trading screenshots and learn more about the services offered by AI Smart Strategies Telugu.
          </p>
        </div>
      </section>

      {/* HISTORICAL RESULTS GALLERY */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue block mb-1">
                Authentic Trading Statements
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Historical Trading Examples
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Original screenshots demonstrating system execution records across selected market days.
            </p>
          </div>

          {/* Mandatory Disclaimer Box Above Gallery */}
          <div className="mb-8 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-950 leading-relaxed">
              <strong className="font-bold">Important Notice:</strong> {BRAND.resultsDisclaimer} These historical examples reflect past executions under specific market liquidity conditions and are provided strictly for illustrative comprehension.
            </div>
          </div>

          {/* Screenshot Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resultImages.map((image, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-card transition-all flex flex-col overflow-hidden group cursor-pointer"
                onClick={() => setActiveModalIndex(idx)}
              >
                {/* Image Container */}
                <div className="relative bg-slate-100/60 p-3 sm:p-4 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-h-[380px] w-auto object-contain rounded-lg transition-transform duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-navy/90 text-white text-xs font-semibold shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-brand-electric" />
                      Enlarge Statement
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-brand-blue border border-blue-100">
                        Record #{idx + 1}
                      </span>
                      <span className="text-xs text-slate-400">Authentic Terminal Record</span>
                    </div>
                    <h3 className="text-sm font-bold text-brand-navy mb-1.5">
                      {image.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {image.caption}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-blue group-hover:text-blue-600">
                    <span>Click to inspect details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE SERVICES SECTION */}
      <section className="py-16 sm:py-20 bg-brand-lightBg border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-2">
              DESIGNED FOR TELUGU TRADERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
              Our Three Structured Services
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Choose the level of technology and support that fits your market routine. Every service is backed by our Telugu technical onboarding team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* SERVICE 1 — PERSONAL WHATSAPP TRADING INFORMATION */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-sm hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 border border-emerald-100">
                  <WhatsAppIcon className="w-6 h-6 fill-emerald-600 text-emerald-600" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  Service 01
                </span>
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  Personal WhatsApp Trading Information
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Receive AI-generated trading information directly through WhatsApp, including potential buy/sell indications, entry levels, stop-loss levels, and targets, subject to the selected service.
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Key Benefits</h4>
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Convenient real-time access to trading information on your phone</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Potential entry and exit indications with clear reference levels</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Predefined risk boundaries and stop-loss advisory guidelines</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Direct Telugu-speaking support desk for queries and clarifications</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <a
                  href={whatsappInfoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-emerald-700 text-emerald-700" />
                  <span>Get WhatsApp Information</span>
                </a>
              </div>
            </div>

            {/* SERVICE 2 — AI AUTOMATED TRADING (MAIN SERVICE) */}
            <div className="bg-brand-navy text-white rounded-2xl border-2 border-brand-blue p-8 shadow-2xl relative flex flex-col justify-between -translate-y-2 lg:-translate-y-3">
              {/* Highlight Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-brand-blue text-white shadow-md border border-white/20">
                  MAIN SERVICE
                </span>
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-blue/20 text-brand-electric flex items-center justify-center mb-6 border border-brand-blue/40 mt-2">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-electric block mb-1">
                  Service 02
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                  AI Automated Trading
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Connect a compatible trading account through an authorized integration to use configured strategy rules and supported automated order execution.
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Comprehensive Architecture</h4>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0 mt-0.5" />
                      <span>Reduced need for manual, emotional order placement</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0 mt-0.5" />
                      <span>Automated entry and exit processing where supported</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0 mt-0.5" />
                      <span>Configurable stop-loss and target rules tailored to your risk</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0 mt-0.5" />
                      <span>Reduced manual chart monitoring throughout the trading session</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0 mt-0.5" />
                      <span>Multi-account capability subject to verified technical capacity</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0 mt-0.5" />
                      <span>Guided onboarding and complete technical assistance</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0 mt-0.5" />
                      <span>Free demonstration before selecting the service</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-blue-600 active:bg-blue-700 shadow-lg transition-all"
                >
                  <Zap className="w-4 h-4" />
                  <span>Book Automated Trading Demo</span>
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  *Requires compatible broker account authorization.
                </p>
              </div>
            </div>

            {/* SERVICE 3 — VIP TELEGRAM MEMBERSHIP */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-sm hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-brand-blue flex items-center justify-center mb-6 border border-sky-100">
                  <Send className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue block mb-1">
                  Service 03
                </span>
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  VIP Telegram Membership
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Join our VIP Telegram channel for AI-generated trading indications, potential entry zones, stop-loss levels, and targets.
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Key Benefits</h4>
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>Structured intraday trading indications delivered instantly</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>Potential entry and exit zones mapped for major index contracts</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>Configured risk levels and stop-loss notifications</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                      <span>Access to regular community updates and strategy explanations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <a
                  href={BRAND.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-brand-blue bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
                >
                  <Send className="w-4 h-4 text-brand-blue" />
                  <span>Join VIP Telegram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Operational Boundaries Note */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
            <h4 className="font-bold text-brand-navy text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              Important Implementation &amp; Operational Boundaries
            </h4>
            <p>
              • Broker integration availability is subject to compatible broker APIs (e.g., Zerodha, Angel One, Upstox, etc.) and user authorization. We do not claim universal compatibility with every broker.
            </p>
            <p>
              • Trade orders are routed through API protocols; execution prices may differ from expected indications due to prevailing market liquidity, spreads, and exchange order matching speeds.
            </p>
            <p>
              • Client security is paramount: private broker credentials, two-factor authentication (TOTP/PIN), and API secrets are never stored unencrypted or exposed in frontend code.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            EXPERIENCE THE STRATEGY BEFORE YOU DECIDE
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Book a free demonstration to understand the strategy, available services, setup requirements, and associated risks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-blue-600 shadow-md transition-all"
            >
              <span>Book Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/10 transition-all"
            >
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
