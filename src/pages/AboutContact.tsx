import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Send,
  AlertTriangle,
  User,
  Mail,
  Building2,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { BRAND } from '../data/brand';

interface AboutContactProps {
  onOpenDemo: () => void;
}

export const AboutContact: React.FC<AboutContactProps> = ({ onOpenDemo }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: 'AI Automated Trading',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!cleanMobile) {
      newErrors.mobile = 'Mobile number is required.';
    } else if (cleanMobile.length !== 10) {
      newErrors.mobile = 'Please enter a valid 10-digit Indian mobile number.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message or query.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Format enquiry for functional WhatsApp transmission
    const text = encodeURIComponent(
      `Hello AI Smart Strategies Telugu Team,\n\nI am contacting you from the website:\n` +
      `• Name: ${formData.name.trim()}\n` +
      `• Mobile: ${formData.mobile.replace(/\D/g, '')}\n` +
      `• Email: ${formData.email.trim() || 'Not specified'}\n` +
      `• Interested Service: ${formData.service}\n` +
      `• Message: ${formData.message.trim()}`
    );

    const whatsappUrl = `https://wa.me/${BRAND.phoneRaw}?text=${text}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      mobile: '',
      email: '',
      service: 'AI Automated Trading',
      message: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-brand-lightBg via-white to-white py-12 lg:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-3">
            <span>COMPANY PROFILE &amp; ASSISTANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            ABOUT AI SMART STRATEGIES TELUGU
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transparent technology, disciplined algorithmic rules, and dedicated Telugu assistance for Indian financial market participants.
          </p>
        </div>
      </section>

      {/* ABOUT COMPANY & LEADERSHIP */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* About Text */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue block mb-2">
                  OUR MISSION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy leading-tight">
                  Democratizing Algorithmic Trading for Telugu Traders
                </h2>
              </div>

              {/* Exact Prompt Copy */}
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  AI Smart Strategies Telugu focuses on making AI-powered trading technology accessible to Telugu-speaking traders.
                </p>
                <p>
                  We provide AI-based market analysis tools, trading indications, automated trading technology, and technical assistance. Our team helps customers understand available services, demonstrations, onboarding, system configuration, and service-related queries.
                </p>
                <p>
                  Our approach emphasizes technology, transparency, disciplined trading processes, and clear communication about the risks associated with financial markets.
                </p>
              </div>

              {/* Core Tenets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-brand-navy text-sm mb-1">Technology First</h4>
                  <p className="text-xs text-slate-500">Systematic code-driven models over subjective emotions.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-brand-navy text-sm mb-1">Pure Transparency</h4>
                  <p className="text-xs text-slate-500">Unfiltered disclosures and zero false profit guarantees.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-brand-navy text-sm mb-1">Telugu Support</h4>
                  <p className="text-xs text-slate-500">Comfortable native-language communication and onboarding.</p>
                </div>
              </div>
            </div>

            {/* Verified Company Details Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                  <img
                    src="/images/ai-smart-strategies-logo.png"
                    alt="AI Smart Strategies Telugu Logo"
                    className="h-12 w-auto object-contain rounded-lg border border-slate-200 p-1"
                  />
                  <div>
                    <h3 className="font-extrabold text-brand-navy text-base leading-tight">
                      {BRAND.name}
                    </h3>
                    <span className="text-xs text-brand-blue font-semibold font-telugu">
                      తెలుగు Trading Technology
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  {/* Founder */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Founder &amp; CEO</span>
                      <span className="font-bold text-brand-navy text-base">{BRAND.founder}</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Official Contact Number</span>
                      <a
                        href={`tel:${BRAND.phoneRaw}`}
                        className="font-bold text-brand-navy text-base hover:text-brand-blue transition-colors"
                      >
                        {BRAND.phone}
                      </a>
                    </div>
                  </div>

                  {/* Telegram */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 text-brand-electric flex items-center justify-center shrink-0 mt-0.5">
                      <Send className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Official Telegram Channel</span>
                      <a
                        href={BRAND.telegram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-brand-navy text-sm hover:text-brand-blue transition-colors flex items-center gap-1.5"
                      >
                        <span>{BRAND.telegram.name}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Official Office Address</span>
                      <address className="not-italic text-xs text-slate-600 font-medium leading-relaxed pt-0.5">
                        {BRAND.address.line1},<br />
                        {BRAND.address.line2},<br />
                        {BRAND.address.state} – {BRAND.address.pincode}.
                      </address>
                    </div>
                  </div>
                </div>

                {/* Direct Action Pills */}
                <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-slate-100">
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-brand-navy hover:bg-slate-800 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={BRAND.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM & DIRECT CHANNELS */}
      <section className="py-16 bg-brand-lightBg border-y border-slate-200/60" id="contact-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-2">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight mb-3">
              Send an Enquiry or Schedule a Demo
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Have questions regarding system setup, broker compatibility, or strategy rules? Our team assists you directly.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 sm:p-10">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-brand-success rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">Enquiry Dispatched!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  WhatsApp has opened with your message formatted and ready to send directly to our official support desk (+91 7997833738).
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-brand-blue hover:bg-blue-600 rounded-lg shadow-sm"
                  >
                    Send Another Enquiry
                  </button>
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Direct: {BRAND.phone}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jagadeesh Kumar"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors ${
                        errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label htmlFor="contact-mobile" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile Number (WhatsApp) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">
                        +91
                      </span>
                      <input
                        type="tel"
                        id="contact-mobile"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="7997833738"
                        maxLength={10}
                        className={`w-full pl-12 pr-4 py-2.5 rounded-lg border text-sm transition-colors ${
                          errors.mobile ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                        }`}
                      />
                    </div>
                    {errors.mobile && <p className="text-xs text-rose-600 mt-1">{errors.mobile}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors ${
                        errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service of Interest *
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                    >
                      <option value="AI Automated Trading">AI Automated Trading</option>
                      <option value="WhatsApp Trading Information">WhatsApp Trading Information</option>
                      <option value="VIP Telegram Membership">VIP Telegram Membership</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message / Question *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you'd like to learn or configure (e.g., broker account integration, demo slot timing, etc.)..."
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors ${
                      errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-blue-600 active:bg-blue-700 shadow-md transition-all disabled:opacity-50"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-emerald-300 text-emerald-300" />
                    <span>Submit via Official WhatsApp Desk</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    Functional integration: Form immediately pre-fills and opens directly to our verified support phone (+91 7997833738).
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MANDATORY FULL REGULATORY DISCLAIMER */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 space-y-3">
            <div className="flex items-center gap-2.5 text-brand-navy">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
              <h3 className="text-sm font-bold uppercase tracking-wider">
                Important Regulatory &amp; Financial Risk Disclaimer
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {BRAND.disclaimer}
            </p>
            <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 leading-relaxed">
              <p>
                No representation is being made that any account will or is likely to achieve profits or losses similar to those shown. AI Smart Strategies Telugu is not a SEBI-registered portfolio management or investment advisory firm. Automated trading and technical indications require individual risk assessment and independent trading decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
