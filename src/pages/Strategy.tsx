import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  TrendingDown,
  Maximize2,
  ShieldAlert,
  Sliders,
  CheckCircle2,
  ArrowRight,
  Database,
  Cpu,
  BellRing,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import { BRAND } from '../data/brand';
import { ImageModal, ModalImage } from '../components/ImageModal';

interface StrategyProps {
  onOpenDemo: () => void;
}

export const Strategy: React.FC<StrategyProps> = ({ onOpenDemo }) => {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const chartImage: ModalImage[] = [
    {
      src: '/images/ai-strategy-chart.png',
      alt: 'AI Smart Strategies Telugu Original Candlestick Chart Setup with BUY, SELL, and SL indications',
      title: 'Original AI Strategy Candlestick Chart Setup',
      caption: 'Illustrative strategy screenshot displaying predefined BUY indications (green), SELL targets (red), and Stop-Loss (SL) parameters across intraday market swings.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Lightbox Modal */}
      <ImageModal
        images={chartImage}
        currentIndex={modalIndex}
        onClose={() => setModalIndex(null)}
      />

      {/* STRATEGY HERO */}
      <section className="bg-gradient-to-b from-brand-lightBg via-white to-white py-12 lg:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
            <span>TECHNICAL ARCHITECTURE &amp; METHODOLOGY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            OUR AI STRATEGY SETUP
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore how predefined market conditions, trading indications, and risk-management rules work together in our strategy.
          </p>
        </div>
      </section>

      {/* PROMINENT STRATEGY CHART SECTION */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
            {/* Chart Header Bar */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue block">
                  Original Strategy Reference
                </span>
                <h2 className="text-lg font-bold text-brand-navy">
                  Candlestick Indication &amp; Risk Boundary Framework
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setModalIndex(0)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-brand-navy bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-colors self-start sm:self-auto"
                aria-label="Enlarge candlestick chart"
              >
                <Maximize2 className="w-3.5 h-3.5 text-brand-blue" />
                <span>Click to Enlarge Chart</span>
              </button>
            </div>

            {/* Chart Container - Preserving Aspect Ratio and Full Image Labels */}
            <div
              className="relative p-2 sm:p-6 bg-slate-900/5 flex items-center justify-center cursor-pointer group"
              onClick={() => setModalIndex(0)}
            >
              <img
                src="/images/ai-strategy-chart.png"
                alt="AI Smart Strategies Telugu Original Candlestick Chart Setup with BUY, SELL, and SL indications"
                className="w-full h-auto max-h-[600px] object-contain rounded-xl border border-slate-200 bg-white shadow-sm transition-transform duration-200 group-hover:scale-[1.005]"
              />

              {/* Hover Overlay Hint */}
              <div className="absolute inset-0 bg-brand-navy/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/90 text-white text-xs font-semibold shadow-lg">
                  <Maximize2 className="w-4 h-4 text-brand-electric" />
                  View High-Resolution Chart
                </span>
              </div>
            </div>

            {/* Caption & Context */}
            <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-200/80 flex items-start gap-3">
              <Info className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800">Illustrative Strategy Screenshot:</strong> This historical chart demonstrates how algorithmic conditions identify potential entry zones (BUY 300, BUY 200, BUY 250), structure defensive Stop-Loss boundaries (SL 270, SL 185, SL 230), and map potential target zones (SELL 350, SELL 320, SELL 400).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLAIN THE TRADING INDICATIONS */}
      <section className="py-14 bg-brand-lightBg border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-2">
              DECODING THE SYSTEM
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight mb-3">
              Understanding Strategy Indications
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every indication generated by our system is rooted in quantifiable structural conditions. We do not rely on subjective guesswork or black-box predictions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* BUY INDICATION */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-emerald-500/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-brand-success">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">
                    Signal Type 01
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy">BUY INDICATION</h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                A BUY indication may appear when predefined algorithmic buying conditions are satisfied—such as price action reaching support zones, volume confirmation, and momentum alignment.
              </p>

              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-900 space-y-1">
                <span className="font-semibold block text-emerald-950">Important Qualification:</span>
                <p>
                  A BUY indication represents a potential entry opportunity based on configured strategy rules. It is not an absolute forecast or guarantee of profit.
                </p>
              </div>
            </div>

            {/* SELL INDICATION */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-rose-500/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-brand-risk">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block">
                    Signal Type 02
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy">SELL INDICATION</h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                A SELL indication may identify a potential exit or selling opportunity based on configured trading rules—such as approaching resistance bands, target milestones, or momentum exhaustion.
              </p>

              <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-100 text-xs text-rose-900 space-y-1">
                <span className="font-semibold block text-rose-950">Disciplined Exits:</span>
                <p>
                  SELL indications help lock in accrued gains or release margin without hesitation, preventing profitable setups from turning into unwarranted drawdowns.
                </p>
              </div>
            </div>

            {/* ENTRY ZONES */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-brand-blue/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-blue">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue block">
                    Execution Parameter 03
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy">ENTRY ZONES</h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Configured rules evaluate multiple data streams to identify strategic entry price levels where risk-to-reward metrics remain structurally favorable before taking action.
              </p>

              <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-950 space-y-1">
                <span className="font-semibold block text-blue-950">Zone Validation:</span>
                <p>
                  Entering within defined zones prevents chasing runaway rallies or entering volatile whipsaws at sub-optimal prices.
                </p>
              </div>
            </div>

            {/* STOP-LOSS AND TARGETS */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-amber-500/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
                    Capital Protection 04
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy">STOP-LOSS AND TARGETS</h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Predefined stop-loss and target levels structure strict risk management on every trade, specifying maximum planned risk before an order is placed.
              </p>

              <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-100 text-xs text-amber-950 space-y-1">
                <span className="font-semibold block text-amber-950">Market Realities Disclaimer:</span>
                <p>
                  Stop-loss execution prices are not guaranteed during market gaps, extreme illiquidity, exchange freezes, or rapid volatility slippage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY WORKFLOW */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-2">
              SYSTEMATIC PROCESS
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight mb-4">
              Strategy Execution Workflow
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              From continuous data ingestion to final authorized order transmission, every step operates within strict safeguards.
            </p>
          </div>

          {/* Workflow Steps Container */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Step 1 */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 relative hover:border-brand-blue/50 transition-all">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-xs mb-3">
                  1
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-4 h-4 text-brand-blue" />
                  <h3 className="text-sm font-bold text-brand-navy">Market Data</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time tick, price, and volume feeds from exchange streams.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 relative hover:border-brand-blue/50 transition-all">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-xs mb-3">
                  2
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-brand-blue" />
                  <h3 className="text-sm font-bold text-brand-navy">Strategy Conditions</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mathematical filtering across price action levels and moving averages.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 relative hover:border-brand-blue/50 transition-all">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-xs mb-3">
                  3
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <BellRing className="w-4 h-4 text-brand-blue" />
                  <h3 className="text-sm font-bold text-brand-navy">Trading Indication</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  BUY or SELL signals generated when predefined criteria trigger simultaneously.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 relative hover:border-brand-blue/50 transition-all">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs mb-3">
                  4
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <h3 className="text-sm font-bold text-brand-navy">Risk Checks</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verification of stop-loss levels, quantity limits, and allocated capital safeguards.
                </p>
              </div>

              {/* Step 5 */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 relative hover:border-emerald-500/50 transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-brand-success flex items-center justify-center font-bold text-xs mb-3">
                  5
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-brand-success" />
                  <h3 className="text-sm font-bold text-brand-navy">Authorized Execution</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Order routing via compatible broker API subject to active user authorization.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <p>
                <strong>Execution Note:</strong> Actual automated execution is strictly dependent upon supported broker integrations, account permissions, market liquidity, and configured safeguard parameters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS STRATEGY? (EDITORIAL LAYOUT) */}
      <section className="py-16 sm:py-20 bg-brand-lightBg border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-6">
              Why This Strategy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">Predefined Trading Rules</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Eliminates guesswork by executing trades only when pre-established criteria align.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">Reduced Manual Indicator Analysis</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Synthesizes multiple indicators into clear indications without chart clutter.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">Structured Entry and Exit</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Clear price reference levels protect against premature exits and late FOMO entries.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">Configurable Risk Controls</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Customizable position sizing and stop-loss limits aligned with your risk appetite.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">Less Screen Fatigue</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Reduces the cognitive load and emotional strain of staring at monitors all day.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">Telugu Onboarding Guidance</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Comprehensive personal walkthrough in Telugu to clarify all operational steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY CTA */}
      <section className="py-16 bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            SEE THE STRATEGY IN ACTION
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Book a free strategy session with our Telugu specialists to examine the rules, test setup parameters, and discuss integration requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-blue-600 shadow-md transition-all"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/results-services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/10 transition-all"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
