import React from 'react';
import { CheckCircle2, ShieldCheck, Microscope, Award, Sparkles } from 'lucide-react';
import { GoldEmbossedLogo } from './GoldEmbossedLogo';

export const ClinicalProofSection: React.FC = () => {
  return (
    <section id="science" className="w-full py-16 bg-[#090a0e] border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-800/80 bg-gradient-to-r from-[#12141c] via-[#161824] to-[#0f1017] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
            {/* Left: Clinical Laboratory R&D Context Photo / Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-[#2a2d3d] bg-[#0c0d12] shadow-2xl group">
                {/* Verified Badge Header */}
                <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-xs">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Clinically Verified</span>
                </div>

                {/* Laboratory Visual Representation */}
                <div className="w-full h-80 bg-gradient-to-br from-[#181a25] via-[#10121a] to-[#090a0f] flex flex-col items-center justify-center p-6 text-center relative">
                  {/* Subtle Background Circuit & Science Lines */}
                  <div className="absolute inset-0 bg-radial from-[#d4af37]/10 via-transparent to-transparent" />

                  {/* Doctor / Specialist Avatar Crest */}
                  <div className="w-24 h-24 rounded-full border-2 border-[#d4af37] bg-gradient-to-tr from-[#1b1e2a] to-[#282d3e] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] mb-4">
                    <Microscope className="w-10 h-10 text-[#d4af37]" />
                  </div>

                  <span className="text-base font-bold text-white font-display">
                    AKHAI Dental Bio-Lab
                  </span>
                  <span className="text-xs text-[#d4af37] mt-0.5 font-medium">
                    Department of Smoker Toxicology & Enamel Regeneration
                  </span>
                  <p className="text-[11px] text-zinc-400 mt-3 max-w-xs leading-relaxed">
                    Tested across 450+ subjects with habitual tobacco, cigar, and vape usage under blinded spectrophotometer evaluation.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Clinical Statement & Statistics (Inspired by Screenshot 2) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
                Clinically proven.{' '}
                <span className="gold-embossed">Professionally trusted.</span>
              </h2>

              {/* Doctor Endorsement Quote */}
              <blockquote className="mt-4 p-5 rounded-xl bg-[#181923]/60 border-l-2 border-[#d4af37] text-zinc-300 text-sm leading-relaxed italic">
                “Traditional whitening toothpastes rely on harsh silica abrasives (RDA 150+) that wear down smoker enamel, exposing the yellow dentin beneath. AKHAI takes a radically different biochemical approach: nano-hydroxyapatite fills micro-grooves, while activated obsidian carbon complexes bond to insoluble tar polymers. It is the gold standard for smokers.”
              </blockquote>

              {/* Doctor Signature & Credential */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#caa13f] to-[#7b5711] text-black font-extrabold font-display flex items-center justify-center text-sm shadow-md">
                  MV
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Dr. Marcus Vance, DDS</div>
                  <div className="text-xs text-zinc-400">
                    BDS, Cosmetic & Restorative Dentistry • AKHAI R&D Advisory Board
                  </div>
                </div>
              </div>

              {/* 4 Stats Grid (Mirroring 5+ years of R&D, 5M+ Satisfied, etc.) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-zinc-800">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold gold-embossed font-mono">
                    5+
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">Years of Smoker R&D</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    1.2M+
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">Satisfied Smokers</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold gold-embossed font-mono">
                    14
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">Clinical Studies</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    RDA 58
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">Enamel Safe Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
