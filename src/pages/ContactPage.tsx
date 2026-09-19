import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';
import { GoldEmbossedLogo } from '../components/GoldEmbossedLogo';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderNumber: '',
    subject: 'Order & Shipping Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedTicket = `AKH-CON-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(generatedTicket);
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'How quickly will AKHAI remove dark nicotine and cigar stains?',
      a: 'In independent clinical trials, 98.4% of surface tar and tobacco resins were cleared within 14 days of twice-daily brushing with our Deep Stain Defense Toothpaste. For heavy cigar enthusiasts, combining the toothpaste with our Rapid Tar-Dissolve Strips accelerates results in as few as 5 to 7 days.',
    },
    {
      q: 'Will this cause tooth sensitivity or strip my enamel?',
      a: 'No. Unlike drug-store smoker pastes that score dangerously high on the Relative Dentin Abrasivity scale (RDA 150+), AKHAI is formulated at a gentle RDA 58. We use non-abrasive PAP+ and Nano-Hydroxyapatite (n-HAp) to remineralize and seal open dentinal pores, virtually eliminating sensitivity.',
    },
    {
      q: 'Can I use AKHAI products on dental implants, veneers, and composite bonding?',
      a: 'Yes. Because our formulas contain zero acidic etching agents and zero gritty hydrated silicas, they are 100% safe for porcelain veneers, ceramic crowns, and implants. They remove smoke stains from both natural enamel and cosmetic restorations.',
    },
    {
      q: 'How does the 30-Day Clean Teeth Guarantee work?',
      a: 'We stand behind every formulation. If you do not see a visible, unmistakable lift in smoker discoloration within 30 days, contact our concierge for an immediate 100% refund, no return postage required.',
    },
    {
      q: 'Do you offer international shipping?',
      a: 'Yes, we provide expedited insured air shipping via DHL Express to over 65 countries worldwide, with guaranteed door-to-door tracking and customs clearance.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0b0c10] text-[#e0e2ec] py-12 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-4 font-mono">
          <a href="/" className="hover:text-[#d4af37] transition-colors">
            Home
          </a>
          <span>/</span>
          <span className="text-[#f5ce68]">Concierge & Contact</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4af37] block mb-2 font-display">
            EXECUTIVE CLIENT SERVICES
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
            Connect With Concierge
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-3 font-light leading-relaxed">
            Whether inquiring about international shipment status, cigar lounge distribution, or customized smoker regimens, our specialists are at your disposal.
          </p>
        </div>

        {/* 2-Column Grid: Form Left + Concierge Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Interactive Concierge Form */}
          <div className="lg:col-span-7 bg-[#11131c] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
              <MessageSquare className="w-5 h-5 text-[#d4af37]" />
              <h2 className="text-lg font-bold font-display uppercase tracking-wider text-white">
                Direct Inquiry Dispatch
              </h2>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-[#151826] border border-[#d4af37]/40 rounded-2xl">
                <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#f5ce68] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-1">
                  Inquiry Dispatched to Concierge
                </h3>
                <p className="text-xs text-zinc-300 mb-4">
                  Your reference ticket number is{' '}
                  <strong className="text-[#d4af37] font-mono">{ticketId}</strong>. A dedicated oral care advisor will respond within 2 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      orderNumber: '',
                      subject: 'Order & Shipping Inquiry',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#1e2233] hover:bg-zinc-800 text-xs text-zinc-200 font-semibold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johnathan Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#171926] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-hidden focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. j.vance@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#171926] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-hidden focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#171926] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-hidden focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                      Order Reference (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. AKH-89241"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                      className="w-full bg-[#171926] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-hidden focus:border-[#d4af37] font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    Subject / Department
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#171926] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-hidden focus:border-[#d4af37]"
                  >
                    <option value="Order & Shipping Inquiry">Order & Shipping Status Inquiry</option>
                    <option value="Product Formulation & RDA Consultation">Product Formulation & RDA Consultation</option>
                    <option value="Cigar Lounge / Wholesale Distribution">Cigar Lounge / Wholesale Distribution</option>
                    <option value="Dental Practice & Clinic Partnership">Dental Practice & Clinic Partnership</option>
                    <option value="Executive Media & Press">Executive Media & Press</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your smoking routine, current discoloration concerns, or shipment questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#171926] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-hidden focus:border-[#d4af37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f5ce68] to-[#b8860b] text-black font-extrabold uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-lg hover:opacity-95 active:scale-98 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Concierge</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Concierge Info Cards & Global Labs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Global Communication Channels */}
            <div className="bg-[#11131c] border border-zinc-800 rounded-3xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-5 font-display">
                Concierge Hotlines
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#181a25] border border-zinc-700 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 block font-mono text-[10px]">Toll-Free Priority</span>
                    <span className="text-sm font-bold text-white font-mono">+1 (800) 420-AKHAI</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">Mon–Sat, 9AM to 8PM EST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#181a25] border border-zinc-700 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 block font-mono text-[10px]">Direct Electronic Mail</span>
                    <span className="text-sm font-bold text-white">concierge@akhaioralcare.com</span>
                    <span className="text-[10px] text-zinc-400 block mt-0.5">&lt; 2-Hour Response Time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Formulation Labs */}
            <div className="bg-[#11131c] border border-zinc-800 rounded-3xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#d4af37] mb-5 font-display">
                Formulation Facilities
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#181a25] border border-zinc-700 flex items-center justify-center text-zinc-300 shrink-0">
                    <MapPin className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white">Executive Suite Manhattan</span>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      540 Madison Avenue, 24th Floor<br />New York, NY 10022, United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#181a25] border border-zinc-700 flex items-center justify-center text-zinc-300 shrink-0">
                    <MapPin className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white">Clinical Research Laboratories</span>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      Rue du Rhône 42<br />1204 Geneva, Switzerland
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Smoker Oral Care FAQ Section */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#d4af37] block mb-2 font-display">
              COMMON INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#11131c] border border-zinc-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full p-5 text-left text-xs sm:text-sm font-bold text-white flex items-center justify-between gap-4"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                    {faq.q}
                  </span>
                  {faqOpen === idx ? (
                    <ChevronUp className="w-4 h-4 text-zinc-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                  )}
                </button>

                {faqOpen === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs text-zinc-300 leading-relaxed border-t border-zinc-800/80 font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
