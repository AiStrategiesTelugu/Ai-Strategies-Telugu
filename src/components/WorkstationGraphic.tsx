import React from 'react';
import { Monitor, TrendingUp, Cpu, ShieldCheck } from 'lucide-react';

export const WorkstationGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-card border border-slate-200/90 bg-brand-navy p-6 text-white select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-brand-navyBorder">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center border border-brand-blue/40 text-brand-electric">
            <Monitor className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white tracking-wide">SYSTEMATIC TRADING DESK</h4>
            <span className="text-[10px] text-slate-400">Algorithmic Multi-Chart Interface</span>
          </div>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          DISCIPLINED
        </span>
      </div>

      {/* Multi-screen Layout Mockup */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* Screen 1: NIFTY Main Index */}
        <div className="bg-[#0B1526] rounded-xl p-3 border border-[#1B2D4A] space-y-2">
          <div className="flex justify-between items-center text-[10px]">
            <span className="font-bold text-slate-200">NIFTY 50 [F&amp;O]</span>
            <span className="text-emerald-400 font-bold">+102.40</span>
          </div>
          <div className="h-20 w-full relative">
            <svg viewBox="0 0 160 70" className="w-full h-full overflow-visible">
              <line x1="0" y1="20" x2="160" y2="20" stroke="#162742" strokeDasharray="2 2" />
              <line x1="0" y1="45" x2="160" y2="45" stroke="#162742" strokeDasharray="2 2" />
              <path
                d="M 5 55 Q 30 50, 50 35 T 90 38 T 130 18 L 155 12"
                fill="none"
                stroke="#0878F9"
                strokeWidth="2"
              />
              {/* Candlesticks */}
              <rect x="25" y="40" width="4" height="15" fill="#168653" />
              <rect x="55" y="30" width="4" height="12" fill="#DC3545" />
              <rect x="85" y="28" width="4" height="16" fill="#168653" />
              <rect x="115" y="16" width="4" height="18" fill="#168653" />
              <rect x="145" y="8" width="4" height="14" fill="#168653" />
            </svg>
          </div>
          <div className="flex justify-between text-[9px] text-slate-400 border-t border-[#162742] pt-1">
            <span>Condition: Triggered</span>
            <span className="text-emerald-400 font-bold">BUY 300</span>
          </div>
        </div>

        {/* Screen 2: Risk-Reward & Execution Protocol */}
        <div className="bg-[#0B1526] rounded-xl p-3 border border-[#1B2D4A] space-y-2">
          <div className="flex justify-between items-center text-[10px]">
            <span className="font-bold text-slate-200">BANK NIFTY</span>
            <span className="text-emerald-400 font-bold">+295.30</span>
          </div>
          <div className="h-20 w-full relative">
            <svg viewBox="0 0 160 70" className="w-full h-full overflow-visible">
              <line x1="0" y1="25" x2="160" y2="25" stroke="#162742" strokeDasharray="2 2" />
              <line x1="0" y1="50" x2="160" y2="50" stroke="#162742" strokeDasharray="2 2" />
              <path
                d="M 5 60 Q 35 55, 60 40 T 110 30 T 155 15"
                fill="none"
                stroke="#00A6FF"
                strokeWidth="2"
              />
              <rect x="30" y="45" width="4" height="12" fill="#168653" />
              <rect x="65" y="32" width="4" height="14" fill="#168653" />
              <rect x="95" y="34" width="4" height="10" fill="#DC3545" />
              <rect x="130" y="18" width="4" height="16" fill="#168653" />
            </svg>
          </div>
          <div className="flex justify-between text-[9px] text-slate-400 border-t border-[#162742] pt-1">
            <span>Trailing SL: Set</span>
            <span className="text-sky-400 font-bold">R:R 1:2</span>
          </div>
        </div>
      </div>

      {/* Bottom Summary Pill */}
      <div className="bg-[#0F1D33] rounded-xl p-3 border border-[#1F3354] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-success" />
          <span className="text-slate-300 font-medium">Algorithmic Safeguards Enabled</span>
        </div>
        <span className="text-[10px] text-slate-400 font-mono">TELUGU SUPPORT</span>
      </div>
    </div>
  );
};
