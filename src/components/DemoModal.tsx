import React, { useState } from 'react';
import { X, Phone, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND } from '../data/brand';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [service, setService] = useState('AI Automated Trading');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanMobile = mobile.replace(/\D/g, '');

    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    if (cleanMobile.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setError('');
    
    // Construct WhatsApp prefilled message
    const message = encodeURIComponent(
      `Hello AI Smart Strategies Telugu,\n\nI want to book a Free Strategy Demo.\nName: ${name.trim()}\nMobile: ${cleanMobile}\nInterested Service: ${service}\n\nPlease share the demonstration details and available slots.`
    );
    
    const whatsappUrl = `https://wa.me/${BRAND.phoneRaw}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setMobile('');
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-navyMuted text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-blue/30 text-sky-200 border border-brand-blue/40 mb-2">
            <span>Free 1-on-1 Walkthrough</span>
          </div>
          <h3 id="demo-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight">
            Book a Free Strategy Demo
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Understand how our AI trading indications work, setup requirements, risk controls, and system rules in Telugu.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-brand-success rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-brand-navy">Demo Request Initiated!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                WhatsApp has been opened with your details prefilled. Send the message to complete your demo booking with our Telugu support desk.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
                >
                  <Phone className="w-4 h-4 text-brand-blue" />
                  <span>Call {BRAND.phone}</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-semibold text-brand-blue hover:bg-blue-50 rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              {error && (
                <div className="p-3 text-xs rounded-lg bg-rose-50 text-rose-700 border border-rose-200">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="demo-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="demo-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="demo-mobile" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  WhatsApp Mobile Number *
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="demo-mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="7997833738"
                    maxLength={10}
                    className="w-full pl-12 pr-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                    required
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">10-digit Indian mobile number</p>
              </div>

              <div>
                <label htmlFor="demo-service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Service of Interest
                </label>
                <select
                  id="demo-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors"
                >
                  <option value="AI Automated Trading">AI Automated Trading (Main Service)</option>
                  <option value="WhatsApp Trading Information">WhatsApp Trading Information</option>
                  <option value="VIP Telegram Membership">VIP Telegram Membership</option>
                  <option value="General Strategy Walkthrough">General Strategy Walkthrough</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-blue-600 active:bg-blue-700 shadow-md transition-all group"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-emerald-300 text-emerald-300" />
                  <span>Connect via WhatsApp for Free Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-success" />
                <span>Zero obligations. No advance payment required for demonstrations.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
