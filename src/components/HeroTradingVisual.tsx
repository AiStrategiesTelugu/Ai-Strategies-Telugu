import React from 'react';
import { Check, CheckCircle2, TrendingUp, Cpu, Wifi, Activity } from 'lucide-react';

export const HeroTradingVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[560px] mx-auto lg:max-w-none select-none">
      {/* Background Soft Glow & Candlestick Silhouettes */}
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-brand-electric/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Composition Container */}
      <div className="relative z-10 pt-4 pb-6 px-2">
        {/* ============================================================ */}
        {/* 1. LAPTOP DEVICE MOCKUP */}
        {/* ============================================================ */}
        <div className="relative mx-auto w-[92%] sm:w-[94%] filter drop-shadow-2xl">
          {/* Laptop Lid / Bezel */}
          <div className="bg-[#121824] rounded-t-2xl p-2.5 sm:p-3 border border-[#2A3548] shadow-2xl">
            {/* Camera dot */}
            <div className="w-1.5 h-1.5 rounded-full bg-[#3A455A] mx-auto mb-2" />

            {/* Laptop Display Screen (Dark Trading Dashboard) */}
            <div className="relative bg-[#07111E] rounded-lg overflow-hidden border border-[#1A2638] text-white">
              {/* Terminal Top Navigation Bar */}
              <div className="h-7 bg-[#0B1728] border-b border-[#1A283D] px-2.5 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="font-bold text-slate-200 tracking-wide text-[11px] ml-1">
                    NIFTY 50 • 5m
                  </span>
                  <span className="text-emerald-400 font-semibold hidden sm:inline text-[10px]">
                    24,350.20 +0.42%
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-[10px]">
                  <span className="bg-[#16253D] px-1.5 py-0.5 rounded text-sky-300 font-mono text-[9px]">
                    AI INDICATOR v4.2
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1 font-mono text-[9px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    CONNECTED
                  </span>
                </div>
              </div>

              {/* Chart Body */}
              <div className="relative h-56 sm:h-64 p-2 bg-[#060D18] flex flex-col justify-between">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#15233818_1px,transparent_1px),linear-gradient(to_bottom,#15233818_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

                {/* Main Candlestick Chart SVG */}
                <svg
                  viewBox="0 0 500 210"
                  className="w-full h-full overflow-visible relative z-10"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="blueGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0878F9" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#0878F9" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#00A6FF" />
                      <stop offset="50%" stopColor="#0878F9" />
                      <stop offset="100%" stopColor="#00D2FF" />
                    </linearGradient>
                  </defs>

                  {/* Price Level Horizontal Reference Dashed Lines */}
                  <line x1="0" y1="40" x2="500" y2="40" stroke="#17273F" strokeDasharray="3 3" />
                  <line x1="0" y1="90" x2="500" y2="90" stroke="#17273F" strokeDasharray="3 3" />
                  <line x1="0" y1="140" x2="500" y2="140" stroke="#17273F" strokeDasharray="3 3" />
                  <line x1="0" y1="180" x2="500" y2="180" stroke="#17273F" strokeDasharray="3 3" />

                  {/* Price Axis Labels on Right */}
                  <text x="455" y="44" fill="#4B607E" fontSize="8" fontFamily="monospace">24,420</text>
                  <text x="455" y="94" fill="#4B607E" fontSize="8" fontFamily="monospace">24,350</text>
                  <text x="455" y="144" fill="#4B607E" fontSize="8" fontFamily="monospace">24,280</text>

                  {/* Moving Average Line (Smooth Electric Blue EMA) */}
                  <path
                    d="M 10 145 C 50 150, 90 120, 140 105 C 190 90, 230 115, 270 95 C 320 75, 370 60, 420 45 C 450 38, 480 42, 495 38"
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="2.5"
                  />
                  {/* Subtle Gradient Area below EMA */}
                  <path
                    d="M 10 145 C 50 150, 90 120, 140 105 C 190 90, 230 115, 270 95 C 320 75, 370 60, 420 45 C 450 38, 480 42, 495 38 L 495 180 L 10 180 Z"
                    fill="url(#blueGlow)"
                  />

                  {/* Secondary Moving Average (Purple SMA) */}
                  <path
                    d="M 10 135 C 70 140, 140 125, 200 118 C 260 110, 320 100, 380 75 C 430 55, 470 52, 495 48"
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="1.2"
                    strokeDasharray="4 2"
                    opacity="0.8"
                  />

                  {/* Candlesticks (Green = Bullish, Red = Bearish) */}
                  {/* Candle 1: Red */}
                  <line x1="25" y1="120" x2="25" y2="155" stroke="#DC3545" strokeWidth="1" />
                  <rect x="22" y="128" width="6" height="18" fill="#DC3545" rx="0.5" />

                  {/* Candle 2: Red */}
                  <line x1="45" y1="135" x2="45" y2="168" stroke="#DC3545" strokeWidth="1" />
                  <rect x="42" y="140" width="6" height="20" fill="#DC3545" rx="0.5" />

                  {/* Candle 3: Green (Bounce) */}
                  <line x1="68" y1="135" x2="68" y2="165" stroke="#168653" strokeWidth="1" />
                  <rect x="65" y="142" width="6" height="16" fill="#168653" rx="0.5" />

                  {/* Candle 4: Green (Strong BUY Confirmation) */}
                  <line x1="92" y1="110" x2="92" y2="148" stroke="#168653" strokeWidth="1" />
                  <rect x="89" y="118" width="6" height="24" fill="#168653" rx="0.5" />

                  {/* Candle 5: Green */}
                  <line x1="118" y1="95" x2="118" y2="130" stroke="#168653" strokeWidth="1" />
                  <rect x="115" y="102" width="6" height="20" fill="#168653" rx="0.5" />

                  {/* Candle 6: Red pullback */}
                  <line x1="145" y1="92" x2="145" y2="122" stroke="#DC3545" strokeWidth="1" />
                  <rect x="142" y="98" width="6" height="15" fill="#DC3545" rx="0.5" />

                  {/* Candle 7: Red pullback */}
                  <line x1="172" y1="102" x2="172" y2="135" stroke="#DC3545" strokeWidth="1" />
                  <rect x="169" y="108" width="6" height="18" fill="#DC3545" rx="0.5" />

                  {/* Candle 8: Green Reversal */}
                  <line x1="200" y1="95" x2="200" y2="130" stroke="#168653" strokeWidth="1" />
                  <rect x="197" y="102" width="6" height="20" fill="#168653" rx="0.5" />

                  {/* Candle 9: Green Rally */}
                  <line x1="228" y1="78" x2="228" y2="112" stroke="#168653" strokeWidth="1" />
                  <rect x="225" y="85" width="6" height="22" fill="#168653" rx="0.5" />

                  {/* Candle 10: Red consolidation */}
                  <line x1="258" y1="75" x2="258" y2="105" stroke="#DC3545" strokeWidth="1" />
                  <rect x="255" y="80" width="6" height="16" fill="#DC3545" rx="0.5" />

                  {/* Candle 11: Green continuation */}
                  <line x1="290" y1="58" x2="290" y2="92" stroke="#168653" strokeWidth="1" />
                  <rect x="287" y="65" width="6" height="22" fill="#168653" rx="0.5" />

                  {/* Candle 12: Green continuation */}
                  <line x1="322" y1="48" x2="322" y2="80" stroke="#168653" strokeWidth="1" />
                  <rect x="319" y="54" width="6" height="20" fill="#168653" rx="0.5" />

                  {/* Candle 13: Green Breakout */}
                  <line x1="355" y1="35" x2="355" y2="68" stroke="#168653" strokeWidth="1" />
                  <rect x="352" y="40" width="6" height="22" fill="#168653" rx="0.5" />

                  {/* Candle 14: Top Spinning Top / Pin bar */}
                  <line x1="388" y1="28" x2="388" y2="62" stroke="#DC3545" strokeWidth="1" />
                  <rect x="385" y="36" width="6" height="12" fill="#DC3545" rx="0.5" />

                  {/* Candle 15: Red Pullback from Resistance */}
                  <line x1="420" y1="36" x2="420" y2="72" stroke="#DC3545" strokeWidth="1" />
                  <rect x="417" y="42" width="6" height="20" fill="#DC3545" rx="0.5" />

                  {/* ========================================= */}
                  {/* BUY BADGE & ARROW ON CHART */}
                  {/* ========================================= */}
                  <g transform="translate(80, 155)">
                    <rect x="0" y="0" width="46" height="16" rx="3" fill="#168653" />
                    <text x="7" y="11" fill="#FFFFFF" fontSize="8.5" fontWeight="bold">BUY 300</text>
                    <polygon points="17,0 23,-6 29,0" fill="#168653" />
                  </g>

                  {/* ========================================= */}
                  {/* SELL TARGET BADGE ON CHART */}
                  {/* ========================================= */}
                  <g transform="translate(365, 8)">
                    <rect x="0" y="0" width="46" height="16" rx="3" fill="#DC3545" />
                    <text x="6" y="11" fill="#FFFFFF" fontSize="8.5" fontWeight="bold">SELL 400</text>
                    <polygon points="17,16 23,22 29,16" fill="#DC3545" />
                  </g>

                  {/* Bottom Volume Bars */}
                  <g transform="translate(0, 185)" opacity="0.65">
                    <rect x="22" y="10" width="6" height="12" fill="#DC3545" />
                    <rect x="42" y="6" width="6" height="16" fill="#DC3545" />
                    <rect x="65" y="12" width="6" height="10" fill="#168653" />
                    <rect x="89" y="2" width="6" height="20" fill="#168653" />
                    <rect x="115" y="5" width="6" height="17" fill="#168653" />
                    <rect x="142" y="11" width="6" height="11" fill="#DC3545" />
                    <rect x="169" y="8" width="6" height="14" fill="#DC3545" />
                    <rect x="197" y="7" width="6" height="15" fill="#168653" />
                    <rect x="225" y="3" width="6" height="19" fill="#168653" />
                    <rect x="255" y="10" width="6" height="12" fill="#DC3545" />
                    <rect x="287" y="4" width="6" height="18" fill="#168653" />
                    <rect x="319" y="2" width="6" height="20" fill="#168653" />
                    <rect x="352" y="0" width="6" height="22" fill="#168653" />
                    <rect x="385" y="6" width="6" height="16" fill="#DC3545" />
                    <rect x="417" y="5" width="6" height="17" fill="#DC3545" />
                  </g>
                </svg>

                {/* Sub-bar with Live Analytics */}
                <div className="relative z-10 border-t border-[#132235] pt-1.5 flex items-center justify-between text-[9px] text-slate-400 font-mono px-1">
                  <div className="flex gap-3">
                    <span>RSI(14): <strong className="text-emerald-400">62.8</strong></span>
                    <span>MACD: <strong className="text-sky-400">+14.2</strong></span>
                    <span className="hidden sm:inline">TREND: <strong className="text-emerald-400">BULLISH</strong></span>
                  </div>
                  <div>
                    <span className="text-[9px] bg-brand-blue/20 text-brand-electric px-1.5 py-0.5 rounded border border-brand-blue/30 font-sans font-semibold">
                      ALGO CONFIRMED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop Base / Keyboard Deck Bottom */}
          <div className="relative bg-[#1E2738] h-3.5 sm:h-4 rounded-b-xl border-t border-[#313E54] shadow-md flex justify-center items-center">
            {/* Notch */}
            <div className="w-16 h-1 bg-[#121A28] rounded-full" />
          </div>
          {/* Laptop Aluminum Edge Shadow */}
          <div className="mx-auto w-[65%] h-1 bg-black/40 blur-xs rounded-full" />
        </div>

        {/* ============================================================ */}
        {/* 2. SMARTPHONE DEVICE MOCKUP (Front Right Overlay) */}
        {/* ============================================================ */}
        <div className="absolute right-0 sm:-right-2 bottom-0 w-36 sm:w-44 z-30 filter drop-shadow-2xl transform translate-y-2 hover:-translate-y-1 transition-transform duration-300">
          <div className="bg-[#121824] p-1.5 rounded-[2rem] border-2 border-[#334259] shadow-2xl">
            {/* Phone Screen */}
            <div className="relative bg-[#07111E] rounded-[1.6rem] overflow-hidden text-white p-2.5 flex flex-col justify-between border border-[#1E2C42]">
              {/* Dynamic Island / Notch */}
              <div className="w-12 h-2.5 bg-[#0D1522] rounded-full mx-auto mb-2 flex items-center justify-end px-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1F2B3E]" />
              </div>

              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-1.5 text-[9px]">
                <span className="font-extrabold text-white tracking-tight text-[10px]">
                  AI STRATEGIES
                </span>
                <span className="text-emerald-400 font-bold font-mono text-[8px] bg-emerald-950/80 px-1 py-0.5 rounded border border-emerald-800/60">
                  LIVE
                </span>
              </div>

              {/* Price Row */}
              <div className="bg-[#0B1728] p-1.5 rounded-lg border border-[#1A2A42] mb-1.5">
                <div className="text-[9px] text-slate-400 font-medium">NIFTY 24300 CE</div>
                <div className="flex items-baseline justify-between mt-0.5">
                  <span className="text-xs font-extrabold text-white">₹106.35</span>
                  <span className="text-[9px] font-bold text-emerald-400">+34.5%</span>
                </div>
              </div>

              {/* Mini Sparkline Chart */}
              <div className="h-14 w-full relative my-1">
                <svg viewBox="0 0 100 45" className="w-full h-full overflow-visible">
                  <path
                    d="M 0 35 Q 25 38, 40 20 T 70 15 T 100 5"
                    fill="none"
                    stroke="#00A6FF"
                    strokeWidth="2"
                  />
                  <path
                    d="M 0 35 Q 25 38, 40 20 T 70 15 T 100 5 L 100 45 L 0 45 Z"
                    fill="url(#blueGlow)"
                    opacity="0.4"
                  />
                  <circle cx="100" cy="5" r="2.5" fill="#00A6FF" className="animate-ping" />
                  <circle cx="100" cy="5" r="2" fill="#FFFFFF" />
                </svg>
              </div>

              {/* Action Indication */}
              <div className="mt-1 flex gap-1">
                <div className="flex-1 bg-emerald-600 text-white text-[9px] font-bold py-1 rounded text-center">
                  BUY ACTIVE
                </div>
                <div className="flex-1 bg-[#122035] text-slate-300 text-[9px] font-semibold py-1 rounded text-center border border-[#1F3352]">
                  SL 85.00
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. OVERLAY FEATURE PANEL (Bottom Left / Center Overlay) */}
        {/* ============================================================ */}
        <div className="absolute left-1 sm:left-4 -bottom-4 sm:-bottom-3 z-30 w-56 sm:w-64 bg-[#07182F]/95 backdrop-blur-md rounded-xl p-3 sm:p-3.5 border border-brand-blue/40 shadow-2xl text-white">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#182F4D]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-200">
                Core System Engine
              </span>
            </div>
            <span className="text-[9px] text-sky-400 font-mono font-semibold bg-sky-950/70 px-1.5 py-0.5 rounded border border-sky-800/60">
              ACTIVE
            </span>
          </div>

          {/* 3 Checklist Items */}
          <div className="space-y-1.5 text-[11px]">
            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span>Real-time Analysis</span>
            </div>

            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span>Rule-based Indications</span>
            </div>

            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <div className="w-4 h-4 rounded-full bg-brand-blue/30 text-brand-electric flex items-center justify-center shrink-0 border border-brand-blue/40">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span>Automated Execution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
