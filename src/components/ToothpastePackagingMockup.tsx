import React, { useState } from 'react';
import { Sparkles, Shield, RotateCw, CheckCircle2, Award } from 'lucide-react';
import { GoldEmbossedLogo } from './GoldEmbossedLogo';

interface ToothpastePackagingMockupProps {
  interactive?: boolean;
  size?: 'normal' | 'large' | 'compact';
}

export const ToothpastePackagingMockup: React.FC<ToothpastePackagingMockupProps> = ({
  interactive = true,
  size = 'normal',
}) => {
  const [activeAngle, setActiveAngle] = useState<'front' | 'angled' | 'box'>('front');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 bg-radial from-[#d4af37]/15 via-transparent to-transparent blur-3xl -z-10 pointer-events-none" />

      {/* Main 3D Render Canvas */}
      <div className="relative w-full max-w-[420px] h-[480px] flex items-center justify-center">
        {/* Luxury Pedestal Surface */}
        <div className="absolute bottom-6 w-72 h-14 bg-gradient-to-r from-transparent via-[#1a1c24] to-transparent rounded-[100%] border-t border-[#d4af37]/30 shadow-[0_20px_35px_rgba(0,0,0,0.9)] opacity-80" />

        {/* Ambient Floor Shadow */}
        <div className="absolute bottom-8 w-56 h-8 bg-black/80 blur-md rounded-[100%]" />

        {/* The Outer Box Mockup (Visible in 'box' and 'angled' modes) */}
        {(activeAngle === 'box' || activeAngle === 'angled') && (
          <div
            className={`absolute z-10 transition-all duration-700 ${
              activeAngle === 'box'
                ? 'translate-x-0 scale-105 z-20'
                : '-translate-x-20 translate-y-3 scale-95 opacity-85 rotate-[-3deg]'
            }`}
          >
            {/* Box Outer Shell */}
            <div className="relative w-36 h-[390px] rounded-lg overflow-hidden border border-[#2a2d39] bg-gradient-to-b from-[#191a21] via-[#0f1015] to-[#0a0a0e] shadow-[0_25px_50px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.15)] flex flex-col items-center p-4 justify-between">
              {/* Box Brushed Metallic Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/60 pointer-events-none" />
              
              {/* Gold Foil Top Border Accent */}
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

              {/* Box Top Monogram */}
              <div className="w-full flex flex-col items-center pt-2">
                <GoldEmbossedLogo size="sm" showSubtitle={false} />
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent mt-2" />
                <span className="text-[8px] uppercase tracking-[0.35em] text-zinc-400 mt-1 font-semibold">
                  Smokers Formula
                </span>
              </div>

              {/* Central Box Spec Details */}
              <div className="flex flex-col items-center text-center my-auto px-1 z-10">
                <span className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-zinc-100">
                  DEEP STAIN DEFENSE
                </span>
                <span className="text-[8px] tracking-[0.25em] text-[#d4af37] uppercase font-medium mt-0.5">
                  Tar & Nicotine Shield
                </span>
                <p className="text-[7.5px] leading-tight text-zinc-400 mt-2 line-clamp-3">
                  Activated Obsidian Carbon • Nano-Hydroxyapatite • Zinc Citrate Micro-Matrix
                </p>

                {/* Embossed Gold Seal on Box */}
                <div className="mt-4 w-12 h-12 rounded-full border border-[#d4af37]/70 bg-gradient-to-tr from-[#16171d] to-[#262833] flex flex-col items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_4px_10px_rgba(0,0,0,0.8)]">
                  <span className="text-[6px] tracking-widest text-zinc-300 uppercase">RDA</span>
                  <span className="text-[12px] font-extrabold gold-embossed leading-none">58</span>
                  <span className="text-[5px] text-[#d4af37] tracking-wider uppercase font-semibold">Enamel Safe</span>
                </div>
              </div>

              {/* Box Bottom Specifications */}
              <div className="w-full text-center pb-2 z-10 border-t border-zinc-800/80 pt-2">
                <span className="text-[8px] tracking-[0.2em] text-zinc-400 font-mono">
                  100g • 3.52 OZ. NET WT.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* The Toothpaste Tube Mockup (The Hero Product) */}
        <div
          className={`relative z-20 transition-all duration-700 cursor-pointer ${
            activeAngle === 'box'
              ? 'translate-x-20 scale-90 opacity-80 rotate-[3deg]'
              : activeAngle === 'angled'
              ? 'translate-x-12 scale-100 rotate-[4deg]'
              : 'translate-x-0 scale-105'
          } ${isHovered ? '-translate-y-2' : ''}`}
        >
          {/* Complete 3D Tube Body */}
          <div className="relative w-36 h-[400px] flex flex-col items-center">
            {/* Top Crimp (Sealed End of Tube) with Dark Metallic Ridges */}
            <div className="w-32 h-6 rounded-t-sm bg-gradient-to-r from-[#17181f] via-[#2f3342] to-[#121318] border-t-2 border-[#d4af37]/60 shadow-md flex items-center justify-between px-3 relative overflow-hidden">
              {/* Metallic micro-crimp vertical lines */}
              <div className="absolute inset-0 opacity-30 flex justify-between px-1">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-[1px] h-full bg-white/40" />
                ))}
              </div>
              <span className="text-[6px] tracking-widest font-mono text-zinc-400 z-10">LOT 894-K</span>
              <span className="text-[6px] tracking-widest font-mono text-[#d4af37] z-10">EXP 2028</span>
            </div>

            {/* Main Tube Cylindrical Body (Brushed Dark Metallic Finish) */}
            <div className="relative w-32 h-[300px] bg-gradient-to-r from-[#111217] via-[#232631] via-40% via-[#2e3241] via-60% to-[#121318] shadow-[inset_2px_0_4px_rgba(255,255,255,0.2),inset_-3px_0_6px_rgba(0,0,0,0.9),0_15px_35px_rgba(0,0,0,0.85)] flex flex-col items-center justify-between py-4 px-3 overflow-hidden">
              {/* Brushed Gunmetal Texture Streaks */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)',
                }}
              />

              {/* Vertical Light Specular Reflection across cylindrical curve */}
              <div className="absolute top-0 bottom-0 left-10 w-4 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none blur-[1px]" />
              <div className="absolute top-0 bottom-0 right-7 w-2 bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent pointer-events-none" />

              {/* Tube Top Brand Header */}
              <div className="relative z-10 flex flex-col items-center mt-1">
                <span className="text-[7px] tracking-[0.4em] uppercase font-bold text-[#d4af37]/90 mb-1">
                  PREMIUM ORAL CARE
                </span>

                {/* Primary Embossed Gold Logo on Packaging */}
                <div className="py-1">
                  <GoldEmbossedLogo size="md" showSubtitle={false} />
                </div>

                <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-1.5 shadow-[0_0_8px_#d4af37]" />

                <span className="text-[7px] tracking-[0.35em] uppercase text-zinc-300 font-semibold">
                  SMOKERS TOOTHPASTE
                </span>
              </div>

              {/* Tube Center Scientific Specifications */}
              <div className="relative z-10 flex flex-col items-center text-center my-auto">
                <span className="text-[9px] font-display font-extrabold uppercase tracking-[0.2em] text-white">
                  DEEP STAIN DEFENSE
                </span>
                <span className="text-[7.5px] tracking-[0.18em] text-[#e5c158] uppercase font-medium mt-0.5">
                  Tar • Nicotine • Coffee
                </span>

                {/* Clinical Badge Stamp */}
                <div className="mt-3 px-2 py-0.5 rounded-full border border-[#d4af37]/40 bg-[#121319]/80 backdrop-blur-xs flex items-center gap-1">
                  <Shield className="w-2.5 h-2.5 text-[#d4af37]" />
                  <span className="text-[6.5px] tracking-wider text-zinc-200 font-bold uppercase">
                    n-HAp + Obsidian
                  </span>
                </div>
              </div>

              {/* Tube Bottom Specs */}
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-[6.5px] tracking-[0.3em] uppercase text-zinc-400 font-mono">
                  RDA 58 • ENAMEL SAFE
                </span>
                <span className="text-[7px] tracking-[0.25em] text-[#d4af37] font-semibold mt-0.5">
                  100g e 3.52 OZ.
                </span>
              </div>
            </div>

            {/* Tube Shoulder Transition (Beveled Gunmetal Ring) */}
            <div className="w-24 h-4 bg-gradient-to-r from-[#171821] via-[#35394a] to-[#121319] border-t border-[#d4af37]/40 shadow-sm rounded-b-sm" />

            {/* Luxury Brushed Gold Cap (Hexagonal/Knurled Luxury Screw Cap) */}
            <div className="relative w-16 h-12 rounded-b-md bg-gradient-to-r from-[#8a681c] via-[#ecd17c] via-35% via-[#fef2c5] via-50% via-[#caa13f] to-[#745511] shadow-[0_12px_24px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.7)] flex flex-col items-center justify-between py-1 border-t border-[#543d0e] border-b border-[#3b2b09]">
              {/* Cap Precision Knurling / Vertical Grooves */}
              <div className="absolute inset-x-1 inset-y-1 opacity-40 flex justify-between">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-[1.5px] h-full bg-black/50" />
                ))}
              </div>

              {/* Cap Gold Highlights */}
              <div className="w-10 h-[1px] bg-white/60 z-10" />
              <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center z-10">
                <span className="text-[7px] font-display font-extrabold text-[#4a3507] tracking-widest">
                  A
                </span>
              </div>
              <div className="w-12 h-[1px] bg-black/40 z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Angle / Packaging Selector Tabs */}
      {interactive && (
        <div className="flex items-center gap-2 mt-4 p-1.5 rounded-full bg-[#14151c]/90 border border-zinc-800 backdrop-blur-md shadow-lg">
          <button
            onClick={() => setActiveAngle('front')}
            className={`px-3.5 py-1 text-xs rounded-full font-medium transition-all ${
              activeAngle === 'front'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-semibold shadow-[0_2px_8px_rgba(212,175,55,0.4)]'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Metallic Tube
          </button>
          <button
            onClick={() => setActiveAngle('angled')}
            className={`px-3.5 py-1 text-xs rounded-full font-medium transition-all ${
              activeAngle === 'angled'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-semibold shadow-[0_2px_8px_rgba(212,175,55,0.4)]'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Tube & Box Duo
          </button>
          <button
            onClick={() => setActiveAngle('box')}
            className={`px-3.5 py-1 text-xs rounded-full font-medium transition-all ${
              activeAngle === 'box'
                ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-semibold shadow-[0_2px_8px_rgba(212,175,55,0.4)]'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Executive Packaging Box
          </button>
        </div>
      )}

      {/* Premium Finish Indicators */}
      <div className="flex items-center gap-4 mt-4 text-[11px] text-zinc-400">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-[#161822] to-[#454b5f] border border-zinc-600" />
          Brushed Gunmetal Finish
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-[#caa13f] to-[#fef2c5] border border-[#d4af37]" />
          Embossed 24K Gold Logo
        </span>
      </div>
    </div>
  );
};
