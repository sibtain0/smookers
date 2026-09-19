import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ToothpastePackagingMockup } from './ToothpastePackagingMockup';
import { PRESS_MENTIONS } from '../data/products';

interface HeroSectionProps {
  onShopNow: () => void;
  onExploreScience: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShopNow,
  onExploreScience,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0e0f14] via-[#12141c] to-[#0b0c10] pt-12 pb-16 border-b border-zinc-800/60">
      {/* Background Decorative Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-radial from-[#d4af37]/10 via-[#2a2310]/15 to-transparent blur-3xl pointer-events-none" />

      {/* Floating Decorative Gold Sparkles (Mirroring the screenshot) */}
      <div className="absolute top-16 left-12 text-[#d4af37]/40 animate-pulse pointer-events-none">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute top-32 right-20 text-[#d4af37]/50 animate-pulse pointer-events-none delay-700">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-24 left-1/3 text-[#d4af37]/30 pointer-events-none">
        <Sparkles className="w-5 h-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content (Inspired by Screenshot 1) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181a24] border border-[#d4af37]/40 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#f5ce68]">
                New Generation Smoker Formula
              </span>
            </div>

            {/* Headline - "Proof, Not Promises." */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-[1.08] text-white">
              <span className="gold-embossed block">Proof,</span>
              <span className="text-white block">Not Promises.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl sm:text-2xl font-light text-zinc-300 mt-4 leading-snug">
              Clinically proven solutions formulated for whiter-looking teeth!
            </p>

            {/* Detailed Description for modern lifestyle choices */}
            <p className="text-sm sm:text-base text-zinc-400 mt-4 max-w-lg leading-relaxed font-normal">
              Engineered for tobacco smokers, cigar connoisseurs, and espresso lovers. Powered by
              obsidian micro-carbon and non-abrasive Nano-Hydroxyapatite to dissolve tar and nicotine stains without stripping enamel.
            </p>

            {/* CTAs (Matching the bold "Shop Now" pill button from Screenshot 1) */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                onClick={onShopNow}
                className="px-9 py-4 rounded-full bg-black hover:bg-zinc-900 text-white font-display font-bold text-base tracking-wide border-2 border-[#d4af37] shadow-[0_8px_25px_rgba(212,175,55,0.35)] hover:shadow-[0_12px_32px_rgba(212,175,55,0.5)] transition-all duration-300 flex items-center gap-3 active:scale-95"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5 text-[#d4af37]" />
              </button>

              <button
                onClick={onExploreScience}
                className="px-7 py-4 rounded-full bg-[#181a25]/80 hover:bg-[#202330] text-zinc-300 hover:text-white font-medium text-sm border border-zinc-700/80 transition-all flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span>The RDA 58 Science</span>
              </button>
            </div>

            {/* Key Clinical Proof Micro-Pills */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-6 border-t border-zinc-800/80 w-full max-w-lg">
              <div>
                <span className="text-xl font-extrabold gold-embossed font-mono">98.4%</span>
                <span className="text-[11px] text-zinc-400 block mt-0.5">Tar Stain Removal</span>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-mono">RDA 58</span>
                <span className="text-[11px] text-zinc-400 block mt-0.5">Enamel Safe Rating</span>
              </div>
              <div>
                <span className="text-xl font-extrabold text-[#d4af37] font-mono">14 Days</span>
                <span className="text-[11px] text-zinc-400 block mt-0.5">Visible Transformation</span>
              </div>
            </div>
          </div>

          {/* Right Showcase: Dark Metallic Toothpaste Tube with Gold Embossed Logo */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <ToothpastePackagingMockup interactive={true} />
          </div>
        </div>
      </div>

      {/* Press & Media Trust Strip (Mirroring Screenshot 1 ticker: Outlook, Times of India, Elle, Grazia, Campaign) */}
      <div className="w-full mt-16 pt-6 pb-4 border-t border-b border-zinc-800/80 bg-[#090a0d]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-400 mb-4">
            As Featured & Praised In Global Media
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {PRESS_MENTIONS.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                <span className="text-sm sm:text-base font-extrabold tracking-widest text-zinc-400 group-hover:text-[#d4af37] transition-colors font-display">
                  {item.name}
                </span>
                <span className="hidden lg:block text-[9px] text-zinc-400 mt-0.5 max-w-[150px] line-clamp-1 italic">
                  {item.quote}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
