import React, { useState } from 'react';
import { Mail, Phone, Clock, Instagram, Youtube, Facebook, Check, ArrowRight } from 'lucide-react';
import { GoldEmbossedLogo } from './GoldEmbossedLogo';
import { PageType } from '../types';

interface FooterProps {
  onNavigate?: (page: PageType, param?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const nav = (p: PageType, param?: string) => {
    if (onNavigate) {
      onNavigate(p, param);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-[#08090d] border-t border-zinc-800/80 pt-16 pb-12 overflow-hidden text-zinc-400 text-xs">
      {/* Background Watermark Logo Matching Screenshot 6 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03] overflow-hidden">
        <span className="text-[22vw] font-extrabold uppercase font-display text-white tracking-[0.2em] leading-none">
          AKHAI
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns Row (Matching Screenshot 6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Column 1: ABOUT AKHAI */}
          <div className="lg:col-span-4 space-y-3">
            <div className="mb-4">
              <GoldEmbossedLogo size="sm" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-200 block font-display">
              ABOUT AKHAI
            </span>
            <p className="text-xs text-zinc-400 leading-relaxed font-light pr-4">
              AKHAI is practical, uncompromising, and precisely engineered to elevate everyday smoker oral care. We are an innovative oral luxury house formulating products that make deep tar, nicotine, and espresso stain defense safe, non-abrasive, and executive-grade.
            </p>
          </div>

          {/* Column 2: EXPLORE & JOURNAL */}
          <div className="lg:col-span-2 space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-200 block font-display">
              EXPLORE
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => nav('shop')}
                  className="hover:text-[#d4af37] transition-colors text-left"
                >
                  Shop All Products
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => nav('blog')}
                  className="hover:text-[#d4af37] transition-colors text-left"
                >
                  Smoker Oral Journal
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => nav('track-order')}
                  className="hover:text-[#d4af37] transition-colors text-left"
                >
                  Live Order Tracker
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => nav('account')}
                  className="hover:text-[#d4af37] transition-colors text-left"
                >
                  Client Portal & Login
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => nav('contact')}
                  className="hover:text-[#d4af37] transition-colors text-left"
                >
                  Concierge & Help
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: POLICIES & CLINICAL ASSURANCES */}
          <div className="lg:col-span-2 space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-200 block font-display">
              ASSURANCES
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => nav('contact')}
                  className="hover:text-[#d4af37] text-left transition-colors"
                >
                  Insured DHL Express
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => nav('contact')}
                  className="hover:text-[#d4af37] text-left transition-colors"
                >
                  30-Day Clean Guarantee
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => nav('contact')}
                  className="hover:text-[#d4af37] text-left transition-colors"
                >
                  Certified RDA 58 Rating
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => nav('contact')}
                  className="hover:text-[#d4af37] text-left transition-colors"
                >
                  Veneer & Implant Safe
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: HAPPY TO HELP & NEWSLETTER */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-200 block font-display">
              HAPPY TO HELP!
            </span>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#181a25] border border-zinc-700 flex items-center justify-center text-emerald-400">
                  <Phone className="w-3 h-3" />
                </span>
                <span className="text-zinc-300 font-mono">+1 (800) 420-AKHAI</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#181a25] border border-zinc-700 flex items-center justify-center text-[#d4af37]">
                  <Mail className="w-3 h-3" />
                </span>
                <span className="text-zinc-300">concierge@akhaioralcare.com</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                <Clock className="w-3 h-3" />
                <span>Mon – Sat, 9:00 AM to 8:00 PM EST</span>
              </div>
            </div>

            {/* Newsletter Subscription (Matching Screenshot 6) */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200 block mb-2 font-display">
                JOIN THE AKHAI COLLECTIVE
              </span>
              <p className="text-[11px] text-zinc-400 mb-2">
                Receive confidential access to private reserve batches and smoker oral health bulletins.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-1.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[#12141d] border border-zinc-700/80 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-hidden focus:border-[#d4af37]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  {subscribed ? 'Joined' : 'Subscribe'}
                </button>
              </form>
              {subscribed && (
                <span className="text-[10px] text-emerald-400 mt-1 block">
                  Welcome to the AKHAI Collective. Check your inbox.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Social Icons & Bottom Copyright (Matching Screenshot 6) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social Icons matching the 3 circles in screenshot */}
          <div className="flex items-center gap-3">
            <a
              href="#social"
              className="w-8 h-8 rounded-full bg-[#181a24] hover:bg-[#d4af37] hover:text-black border border-zinc-700 text-zinc-300 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#social"
              className="w-8 h-8 rounded-full bg-[#181a24] hover:bg-[#d4af37] hover:text-black border border-zinc-700 text-zinc-300 flex items-center justify-center transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="#social"
              className="w-8 h-8 rounded-full bg-[#181a24] hover:bg-[#d4af37] hover:text-black border border-zinc-700 text-zinc-300 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          <div className="text-center sm:text-right">
            <span className="text-xs text-zinc-400">
              © {new Date().getFullYear()} AKHAI — Smokers Oral Care Solutions. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
