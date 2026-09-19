import React, { useState } from 'react';
import { Sparkles, Shield, Check, ArrowRight } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeDay, setActiveDay] = useState<'day0' | 'day7' | 'day14'>('day14');

  return (
    <section id="before-after" className="w-full py-16 bg-[#0c0d12] border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-[#13151f] via-[#1a1c27] to-[#111218] p-8 sm:p-14 overflow-hidden shadow-2xl relative">
          {/* Subtle Ambient Sparkles */}
          <div className="absolute top-8 left-8 text-[#d4af37]/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute bottom-8 right-8 text-[#d4af37]/20">
            <Sparkles className="w-8 h-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (Matching Screenshot 5) */}
            <div className="lg:col-span-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4af37] block mb-2">
                THE 14-DAY TRANSFORMATION
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                We believe everyone should have{' '}
                <span className="gold-embossed">great-looking teeth!</span>
              </h2>

              <p className="text-lg text-zinc-300 font-light mt-4">
                Effective ingredients. Clinically tested. User-friendly products. Visible results.
              </p>

              <div className="mt-6 space-y-3 text-sm text-zinc-400">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Breaks down stubborn tar polymers without acid etching</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Nano-Hydroxyapatite seals pores against fresh nicotine discoloration</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Preserves natural enamel gloss and prevents tooth sensitivity</span>
                </div>
              </div>

              {/* Day Selector Buttons */}
              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={() => {
                    setActiveDay('day0');
                    setSliderPos(15);
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold font-mono transition-all ${
                    activeDay === 'day0'
                      ? 'bg-zinc-800 text-amber-200 border border-amber-600/60'
                      : 'bg-[#151722] text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Day 0: Heavy Staining
                </button>
                <button
                  onClick={() => {
                    setActiveDay('day7');
                    setSliderPos(50);
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold font-mono transition-all ${
                    activeDay === 'day7'
                      ? 'bg-zinc-800 text-[#f5ce68] border border-[#d4af37]/60'
                      : 'bg-[#151722] text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Day 7: Tar Lift
                </button>
                <button
                  onClick={() => {
                    setActiveDay('day14');
                    setSliderPos(90);
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold font-mono transition-all ${
                    activeDay === 'day14'
                      ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold shadow-md'
                      : 'bg-[#151722] text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Day 14: Pristine Enamel
                </button>
              </div>
            </div>

            {/* Right: Interactive Before/After Comparison Visual */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-full max-w-md h-72 sm:h-80 rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl bg-[#090a0f]">
                {/* Left Half (Day 0 - Stained) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2d2516] to-[#45361b] flex flex-col justify-between p-6">
                  <div className="px-3 py-1 rounded-full bg-black/60 border border-amber-500/40 text-amber-300 text-[11px] font-mono font-bold w-fit">
                    DAY 0: TOBACCO & COFFEE
                  </div>
                  <div className="flex flex-col items-center justify-center my-auto">
                    {/* Visual Teeth Simulation */}
                    <div className="w-56 h-28 rounded-full border-4 border-amber-700/50 bg-gradient-to-b from-[#b89f6d] via-[#a3864d] to-[#6e5527] flex items-center justify-center shadow-inner relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(#5a421b_1px,transparent_1px)] [background-size:12px_12px] opacity-60" />
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#241a0b] bg-amber-400/80 px-2 py-1 rounded">
                        Persistent Tar Film
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-amber-200 font-mono">
                    Surface Stains + Stale Odor
                  </span>
                </div>

                {/* Right Half (Day 14 - Spotless Clean Enamel) */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#171c26] to-[#0f1422] flex flex-col justify-between p-6 overflow-hidden transition-all duration-300"
                  style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
                >
                  <div className="px-3 py-1 rounded-full bg-black/70 border border-[#d4af37] text-[#f5ce68] text-[11px] font-mono font-bold w-fit ml-auto">
                    DAY 14: AKHAI REFINED
                  </div>
                  <div className="flex flex-col items-center justify-center my-auto">
                    {/* Visual Bright White Spotless Teeth Simulation */}
                    <div className="w-56 h-28 rounded-full border-4 border-white/80 bg-gradient-to-b from-[#ffffff] via-[#f0f3fa] to-[#d6dde9] flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.4)] relative">
                      <Sparkles className="w-6 h-6 text-[#d4af37] absolute top-3 right-6 animate-pulse" />
                      <span className="text-xs font-extrabold uppercase tracking-widest text-black bg-[#f5ce68] px-2.5 py-1 rounded shadow-md">
                        Spotless White Luster
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-zinc-300 font-mono ml-auto">
                    98.4% Tar Removed • Remineralized
                  </span>
                </div>

                {/* Draggable Divider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-[#d4af37] shadow-[0_0_15px_#d4af37] z-20 cursor-ew-resize flex items-center justify-center"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#d4af37] text-black font-bold flex items-center justify-center shadow-lg text-[10px]">
                    ‹ ›
                  </div>
                </div>
              </div>

              {/* Slider Input Range for Interactive Scrubbing */}
              <div className="w-full max-w-md mt-4 flex items-center gap-3">
                <span className="text-[11px] font-mono text-zinc-400">Before</span>
                <input
                  type="range"
                  min={5}
                  max={95}
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="flex-1 accent-[#d4af37] h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
                />
                <span className="text-[11px] font-mono text-[#f5ce68]">After (Day 14)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
