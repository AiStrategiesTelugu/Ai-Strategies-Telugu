import React from 'react';
import { Activity, ShieldCheck } from 'lucide-react';

export const MarketTicker: React.FC = () => {
  return (
    <div className="bg-[#F8FBFF] border-b border-[#E5EEF8] py-2 px-4 sm:px-6 lg:px-8 overflow-x-auto text-xs text-[#07182F] select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-5 min-w-max">
        {/* Left Status: LIVE ALGORITHMIC FEED */}
        <div className="flex items-center gap-2 font-bold text-brand-blue shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-blue inline-block animate-pulse" />
          <Activity className="w-3.5 h-3.5 text-brand-blue" />
          <span className="tracking-wider uppercase text-[11px]">LIVE ALGORITHMIC FEED</span>
        </div>

        {/* Separator */}
        <span className="text-slate-300 font-light">|</span>

        {/* Ticker Items */}
        <div className="flex items-center gap-5 sm:gap-6">
          {/* NIFTY 50 */}
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#07182F]">NIFTY 50</span>
            <span className="font-semibold text-slate-800">24,350.20</span>
            <span className="text-[#059669] font-bold text-[11px] bg-[#ECFDF5] px-2 py-0.5 rounded-md border border-[#A7F3D0]">
              +102.40 (+0.42%)
            </span>
          </div>

          <span className="text-slate-300 font-light">|</span>

          {/* BANK NIFTY */}
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#07182F]">BANK NIFTY</span>
            <span className="font-semibold text-slate-800">51,820.60</span>
            <span className="text-[#059669] font-bold text-[11px] bg-[#ECFDF5] px-2 py-0.5 rounded-md border border-[#A7F3D0]">
              +295.30 (+0.57%)
            </span>
          </div>

          <span className="text-slate-300 font-light">|</span>

          {/* SENSEX */}
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#07182F]">SENSEX</span>
            <span className="font-semibold text-slate-800">79,880.15</span>
            <span className="text-[#059669] font-bold text-[11px] bg-[#ECFDF5] px-2 py-0.5 rounded-md border border-[#A7F3D0]">
              +287.10 (+0.36%)
            </span>
          </div>
        </div>

        {/* Separator */}
        <span className="text-slate-300 font-light hidden lg:inline">|</span>

        {/* Right Compliance Info: SEBI Guideline Compliant Architecture */}
        <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-500 font-medium shrink-0">
          <ShieldCheck className="w-4 h-4 text-brand-blue" />
          <span>SEBI Guideline Compliant Architecture</span>
        </div>
      </div>
    </div>
  );
};
