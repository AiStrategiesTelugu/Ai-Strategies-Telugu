import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  ArrowRight,
  ArrowDown,
  ChevronRight,
  ChevronDown,
  TrendingUp,
  Cpu,
  Target,
  ShieldCheck,
  Zap,
  Clock,
  Sliders,
  CheckCircle2,
  Send,
  BarChart2,
  Settings,
  Monitor,
  Check,
  Brain
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { BRAND } from '../data/brand';
import { MarketTicker } from '../components/MarketTicker';

interface HomeProps {
  onOpenDemo: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenDemo }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. MARKET TICKER BAR (DIRECTLY BELOW HEADER) */}
      <MarketTicker />

      {/* 2. EXACT HERO SECTION RECREATED FROM REFERENCE IMAGE */}
      <section className="relative overflow-hidden bg-[#F0F6FD] py-10 lg:py-16 border-b border-[#E1EEFC]">
        {/* Subtle Watermark Candlestick Chart Silhouettes */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 1200 400" className="w-full h-full text-brand-blue fill-current">
            {/* Background decorative candlestick silhouettes */}
            <rect x="100" y="150" width="16" height="80" rx="2" />
            <line x1="108" y1="120" x2="108" y2="260" stroke="currentColor" strokeWidth="3" />
            <rect x="250" y="100" width="16" height="110" rx="2" />
            <line x1="258" y1="70" x2="258" y2="240" stroke="currentColor" strokeWidth="3" />
            <rect x="400" y="80" width="16" height="90" rx="2" />
            <line x1="408" y1="50" x2="408" y2="200" stroke="currentColor" strokeWidth="3" />
            <rect x="550" y="140" width="16" height="120" rx="2" />
            <line x1="558" y1="110" x2="558" y2="290" stroke="currentColor" strokeWidth="3" />
            <rect x="700" y="90" width="16" height="140" rx="2" />
            <line x1="708" y1="60" x2="708" y2="260" stroke="currentColor" strokeWidth="3" />
            <rect x="850" y="130" width="16" height="90" rx="2" />
            <line x1="858" y1="100" x2="858" y2="245" stroke="currentColor" strokeWidth="3" />
            <rect x="1000" y="70" width="16" height="110" rx="2" />
            <line x1="1008" y1="40" x2="1008" y2="210" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* LEFT COLUMN: EXACT CONTENT HIERARCHY (~45-48% width) */}
            <div className="lg:col-span-5 space-y-5 text-left">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4FE] border border-[#CCE2FD]">
                <div className="w-4 h-4 rounded-full bg-brand-blue text-white flex items-center justify-center p-0.5 shadow-xs">
                  <Zap className="w-2.5 h-2.5 fill-white text-white" />
                </div>
                <span className="text-xs font-bold text-brand-blue tracking-wide uppercase font-sans">
                  AI-POWERED TRADING TECHNOLOGY
                </span>
                <span className="text-slate-300 font-light">|</span>
                <span className="text-xs font-bold text-brand-blue font-telugu">
                  తెలుగు
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black text-[#07182F] tracking-tight leading-[1.05]">
                TRADE WITH <span className="text-brand-blue">AI.</span>
              </h1>

              {/* Supporting Headline */}
              <div className="text-xl sm:text-2xl lg:text-[25px] font-extrabold text-[#07182F] tracking-tight leading-tight pt-1">
                <p>Smarter Analysis. Faster Decisions.</p>
                <p>Automated Trading.</p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#5A6E85] max-w-lg leading-relaxed">
                Explore AI-powered market analysis, rule-based trading indications, and automated trading technology designed to support a more systematic trading experience.
              </p>

              {/* CTA Buttons Side by Side */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                {/* Primary Button */}
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-brand-blue hover:bg-blue-600 active:bg-blue-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Free Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Secondary Button */}
                <Link
                  to="/strategy"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-brand-blue bg-white hover:bg-blue-50/80 border-2 border-brand-blue transition-all"
                >
                  <BarChart2 className="w-4 h-4 text-brand-blue" />
                  <span>Explore Our Strategy</span>
                </Link>
              </div>

              {/* Horizontal Row of Three Compact Feature Indicators */}
              <div className="pt-6 border-t border-[#DDEAF8] flex items-center gap-4 sm:gap-6 flex-wrap">
                {/* Indicator 1 */}
                <div className="flex items-center gap-2.5">
                  <BarChart2 className="w-6 h-6 text-brand-blue shrink-0 stroke-[2.2]" />
                  <div className="text-xs sm:text-sm font-extrabold text-[#07182F] leading-tight">
                    <div>AI-Based</div>
                    <div>Analysis</div>
                  </div>
                </div>

                {/* Thin Vertical Divider */}
                <div className="h-8 w-px bg-slate-300" />

                {/* Indicator 2 */}
                <div className="flex items-center gap-2.5">
                  <Settings className="w-6 h-6 text-brand-blue shrink-0 stroke-[2.2]" />
                  <div className="text-xs sm:text-sm font-extrabold text-[#07182F] leading-tight">
                    <div>Automated</div>
                    <div>Indications</div>
                  </div>
                </div>

                {/* Thin Vertical Divider */}
                <div className="h-8 w-px bg-slate-300" />

                {/* Indicator 3 */}
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-6 h-6 text-brand-blue shrink-0 stroke-[2.2]" />
                  <div className="text-xs sm:text-sm font-extrabold text-[#07182F] leading-tight">
                    <div>Risk</div>
                    <div>Management</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: PROMINENT ENLARGED 2ND IMAGE FROM USER (SHIFTED RIGHT) */}
            <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end overflow-visible lg:-mr-4 xl:-mr-8">
              <img
                src="/images/hero-trading-devices.png"
                alt="AI Smart Strategies Telugu Trading Devices - Laptop, Smartphone, and Automated Indications Panel"
                className="w-full h-auto max-h-[620px] lg:max-h-[700px] xl:max-h-[760px] object-contain drop-shadow-2xl scale-100 lg:scale-105 xl:scale-110 lg:translate-x-8 xl:translate-x-12 2xl:translate-x-16 transition-transform duration-300 origin-center lg:origin-right"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY TRADE WITH AI? (EXACT MATCH TO REFERENCE IMAGE) */}
      <section className="py-16 sm:py-20 bg-[#F4F8FD] border-b border-[#E1EEFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-xs sm:text-sm font-bold text-brand-blue tracking-wider uppercase mb-2 block font-sans">
              WHY TRADE WITH AI?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#07182F] tracking-tight leading-tight mb-4">
              THE FUTURE OF <span className="text-brand-blue">SMART TRADING</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              The stock market moves every second, AI can analyze market data, identify potential opportunities, and follow predefined trading rules, helping you trade more systematically.
            </p>
          </div>

          {/* Six Clean White Cards in a 3-column, 2-row Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {/* Card 1: Faster Market Analysis */}
            <div className="p-7 sm:p-8 rounded-2xl border border-[#E3EDF7] bg-white shadow-[0_4px_20px_rgba(7,24,47,0.03)] hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div className="mb-5 flex items-end">
                  <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none">
                    <rect x="4" y="18" width="6.5" height="14" rx="2" fill="#93C5FD" />
                    <rect x="14.5" y="11" width="6.5" height="21" rx="2" fill="#3B82F6" />
                    <rect x="25" y="4" width="6.5" height="28" rx="2" fill="#0878F9" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#07182F] mb-2 tracking-tight">
                  Faster Market Analysis
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Analyze market data and technical indicators efficiently within seconds.
                </p>
              </div>
            </div>

            {/* Card 2: Rule-Based Indications */}
            <div className="p-7 sm:p-8 rounded-2xl border border-[#E3EDF7] bg-white shadow-[0_4px_20px_rgba(7,24,47,0.03)] hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div className="mb-5 text-[#EF4444]">
                  <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none" stroke="currentColor">
                    <circle cx="18" cy="18" r="14" strokeWidth="2.4" />
                    <circle cx="18" cy="18" r="8" strokeWidth="2.4" />
                    <circle cx="18" cy="18" r="2.8" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#07182F] mb-2 tracking-tight">
                  Rule-Based Indications
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Identify potential buy and sell opportunities based on predefined conditions.
                </p>
              </div>
            </div>

            {/* Card 3: More Disciplined Decisions */}
            <div className="p-7 sm:p-8 rounded-2xl border border-[#E3EDF7] bg-white shadow-[0_4px_20px_rgba(7,24,47,0.03)] hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div className="mb-5 text-[#8B5CF6]">
                  <Brain className="w-9 h-9 stroke-[2.2]" />
                </div>
                <h3 className="text-lg font-bold text-[#07182F] mb-2 tracking-tight">
                  More Disciplined Decisions
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Help reduce emotional and impulsive trading decisions through rule-based systems.
                </p>
              </div>
            </div>

            {/* Card 4: Save Time */}
            <div className="p-7 sm:p-8 rounded-2xl border border-[#E3EDF7] bg-white shadow-[0_4px_20px_rgba(7,24,47,0.03)] hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div className="mb-5 text-[#00A6FF]">
                  <Clock className="w-9 h-9 stroke-[2.2]" />
                </div>
                <h3 className="text-lg font-bold text-[#07182F] mb-2 tracking-tight">
                  Save Time
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Reduce the need for continuous manual chart monitoring.
                </p>
              </div>
            </div>

            {/* Card 5: Automated Execution */}
            <div className="p-7 sm:p-8 rounded-2xl border border-[#E3EDF7] bg-white shadow-[0_4px_20px_rgba(7,24,47,0.03)] hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div className="mb-5 text-brand-blue">
                  <Settings className="w-9 h-9 stroke-[2.2]" />
                </div>
                <h3 className="text-lg font-bold text-[#07182F] mb-2 tracking-tight">
                  Automated Execution
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Authorized trades can be executed automatically based on configured rules.
                </p>
              </div>
            </div>

            {/* Card 6: Structured Risk Management */}
            <div className="p-7 sm:p-8 rounded-2xl border border-[#E3EDF7] bg-white shadow-[0_4px_20px_rgba(7,24,47,0.03)] hover:shadow-md transition-all text-left flex flex-col justify-between">
              <div>
                <div className="mb-5 text-[#00A6FF]">
                  <ShieldCheck className="w-9 h-9 stroke-[2.2]" />
                </div>
                <h3 className="text-lg font-bold text-[#07182F] mb-2 tracking-tight">
                  Structured Risk Management
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Predefined stop-loss, target and position management rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY AI SMART STRATEGIES TELUGU? (TWO-COLUMN WITH WORKSTATION VISUAL) */}
      <section className="py-16 sm:py-20 bg-[#F2F8FF] border-y border-[#E1EEFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Professional Trading Workstation Image ("Smarter Traders Use AI") */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-card border border-slate-200/90 bg-white group">
                <img
                  src="/images/trader-workstation.jpg"
                  alt="Smarter Traders Use AI - Professional Trading Workstation"
                  className="w-full h-auto object-cover rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Heading & Capabilities List */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue block mb-2">
                  WHY AI SMART STRATEGIES TELUGU?
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07182F] leading-tight">
                  TECHNOLOGY THAT MAKES TRADING MORE SYSTEMATIC.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We empower Telugu-speaking traders with robust trading technology, transparent algorithmic indications, and clear risk parameters—all supported with native Telugu technical onboarding and assistance.
              </p>

              {/* Concise Capabilities List */}
              <div className="space-y-3 pt-1">
                {[
                  "AI-based market analysis on major Indian indices (NIFTY & BANKNIFTY)",
                  "Automated buy and sell indications with predefined entry and stop-loss levels",
                  "Automated trading system integration with compatible broker APIs",
                  "Technical onboarding, system configuration, and dedicated Telugu assistance",
                  "Free live strategy demonstrations before making any commitment",
                  "Multi-client account architecture, subject to verified system capacity"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">{text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold text-white bg-brand-blue hover:bg-blue-600 shadow-sm transition-all"
                >
                  <span>Book Free Strategy Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS (3 SIMPLE STEPS) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-2">
              SIMPLE ONBOARDING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07182F] tracking-tight mb-4">
              GET STARTED IN 3 SIMPLE STEPS
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We make the setup simple, transparent, and guided in Telugu so you clearly understand the system rules and safeguards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-stretch">
            {/* Step 1 */}
            <div className="relative p-7 rounded-2xl border border-slate-200/90 bg-white hover:border-brand-blue/40 shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white font-extrabold text-sm flex items-center justify-center">
                    01
                  </div>
                  <Calendar className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold text-[#07182F] mb-2">1. Book a Demo</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Understand how the AI strategy generates indications, examine past chart examples, and review system safeguards and market limitations.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-bold text-brand-blue">
                Free &amp; Zero Obligation
              </div>

              {/* Desktop Arrow Head to Step 2 */}
              <div className="hidden md:flex absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 ml-4 z-20 text-brand-blue pointer-events-none">
                <ChevronRight className="w-8 h-8 stroke-[3]" />
              </div>
            </div>

            {/* Mobile Arrow Head between Step 1 and Step 2 */}
            <div className="md:hidden flex justify-center -my-2 text-brand-blue">
              <ChevronDown className="w-7 h-7 stroke-[3]" />
            </div>

            {/* Step 2 */}
            <div className="relative p-7 rounded-2xl border border-slate-200/90 bg-white hover:border-brand-blue/40 shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white font-extrabold text-sm flex items-center justify-center">
                    02
                  </div>
                  <Sliders className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold text-[#07182F] mb-2">2. Configure Your Strategy</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Review supported instruments, trading rules, risk controls, stop-loss parameters, and account integration requirements.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-bold text-brand-blue">
                Tailored Risk Controls
              </div>

              {/* Desktop Arrow Head to Step 3 */}
              <div className="hidden md:flex absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 ml-4 z-20 text-brand-blue pointer-events-none">
                <ChevronRight className="w-8 h-8 stroke-[3]" />
              </div>
            </div>

            {/* Mobile Arrow Head between Step 2 and Step 3 */}
            <div className="md:hidden flex justify-center -my-2 text-brand-blue">
              <ChevronDown className="w-7 h-7 stroke-[3]" />
            </div>

            {/* Step 3 */}
            <div className="relative p-7 rounded-2xl border border-slate-200/90 bg-white hover:border-brand-blue/40 shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white font-extrabold text-sm flex items-center justify-center">
                    03
                  </div>
                  <Monitor className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold text-[#07182F] mb-2">3. Monitor and Manage</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Review strategy indications in real time or monitor configured positions and risk limits with automated execution where supported.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-bold text-emerald-600">
                Disciplined Execution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR SERVICES */}
      <section className="py-16 sm:py-20 bg-[#F2F8FF] border-t border-[#E1EEFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-2">
              FOCUSED TRADING SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07182F] tracking-tight mb-4">
              CHOOSE THE RIGHT SERVICE FOR YOUR TRADING NEEDS
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Tailored technology offerings with native Telugu support and guided setup.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* SERVICE 1: WhatsApp Trading Information (Green Accents) */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                  <WhatsAppIcon className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  Service 01
                </span>
                <h3 className="text-xl font-bold text-[#07182F] mb-3">
                  WhatsApp Trading Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Receive AI-generated trading information directly through WhatsApp, including potential buy/sell indications, entry levels, stop-loss levels, and targets.
                </p>

                <div className="space-y-2.5 mb-8 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Convenient mobile access to trading indications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Potential entry, exit, and target zones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Predefined risk boundaries and stop-loss</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dedicated Telugu customer assistance</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={BRAND.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                  <span>Get WhatsApp Information →</span>
                </a>
              </div>
            </div>

            {/* SERVICE 2: AI Automated Trading (VISUALLY EMPHASIZED AS MAIN SERVICE) */}
            <div className="bg-white rounded-2xl border-2 border-brand-blue p-7 shadow-lg relative flex flex-col justify-between -translate-y-2">
              {/* Main Service Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-brand-blue text-white shadow-sm">
                  MAIN SERVICE
                </span>
              </div>

              <div>
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mb-5 border border-blue-100 mt-2">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue block mb-1">
                  Service 02
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#07182F] mb-3">
                  AI Automated Trading
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Connect a compatible trading account through an authorized integration to use configured strategy rules and supported automated order execution.
                </p>

                <div className="space-y-2.5 mb-8 text-xs text-slate-600">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Reduced need for manual order placement</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Automated entry &amp; exit processing where supported</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Configurable stop-loss and target rules</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Multi-account capability subject to system capacity</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Guided onboarding and complete technical assistance</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-bold text-white bg-brand-blue hover:bg-blue-600 shadow-md transition-all"
                >
                  <span>Book Automated Trading Demo →</span>
                </button>
              </div>
            </div>

            {/* SERVICE 3: VIP Telegram Membership (Purple / Sky Accents) */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5 border border-purple-100">
                  <Send className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Service 03
                </span>
                <h3 className="text-xl font-bold text-[#07182F] mb-3">
                  VIP Telegram Membership
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Join our VIP Telegram channel for AI-generated trading indications, potential entry zones, stop-loss levels, and targets.
                </p>

                <div className="space-y-2.5 mb-8 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Real-time trading indications delivered to your app</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Potential entry and exit zones for major indices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Configured risk levels and stop-loss notifications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Access to educational updates and channel briefings</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={BRAND.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-bold text-purple-900 bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-colors"
                >
                  <Send className="w-4 h-4 text-purple-600" />
                  <span>Join VIP Telegram →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA (DARK NAVY BANNER WITH SUBTLE FINANCIAL CHART IMAGERY) */}
      <section className="py-16 sm:py-20 bg-[#07182F] text-white relative overflow-hidden text-center">
        {/* Subtle Watermark Chart Lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 1000 300" className="w-full h-full">
            <path
              d="M 0 250 Q 200 200, 350 150 T 600 180 T 800 80 L 1000 50"
              fill="none"
              stroke="#0878F9"
              strokeWidth="4"
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-electric bg-white/10 px-3 py-1 rounded-full border border-white/15">
            START YOUR SYSTEMATIC TRADING JOURNEY
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            SEE THE STRATEGY IN ACTION
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Book a free demonstration to understand the strategy, available services, setup requirements, and associated risks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              type="button"
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-bold text-white bg-brand-blue hover:bg-blue-600 shadow-lg transition-all"
            >
              <span>Book Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={BRAND.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-700/60 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              <span>Contact on WhatsApp</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-2">
            Telugu Assistance: <a href={`tel:${BRAND.phoneRaw}`} className="text-white hover:underline">{BRAND.phone}</a> • MJF+292, 5th Cross Road, Sai Nagar, Ananthapur.
          </p>
        </div>
      </section>
    </div>
  );
};
