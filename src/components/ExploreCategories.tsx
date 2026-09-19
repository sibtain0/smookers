import React from 'react';
import { Sparkles, Layers, Zap, Droplets, Wind, Crown, Box } from 'lucide-react';

interface ExploreCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const ExploreCategories: React.FC<ExploreCategoriesProps> = ({ onSelectCategory }) => {
  const categoryItems = [
    {
      id: 'bundle',
      name: 'Build Your Own Box',
      sub: 'Save up to 40%',
      icon: Box,
      gradient: 'from-[#2e2612] to-[#14151d]',
      border: 'border-[#d4af37]/50',
    },
    {
      id: 'toothpaste',
      name: 'Smoker Toothpaste',
      sub: 'RDA 58 n-HAp',
      icon: Sparkles,
      gradient: 'from-[#1a1c26] to-[#0f1016]',
      border: 'border-zinc-700',
    },
    {
      id: 'strips',
      name: 'Tar-Eraser Strips',
      sub: 'Self-Dissolving',
      icon: Layers,
      gradient: 'from-[#1e1f2b] to-[#12131a]',
      border: 'border-zinc-700',
    },
    {
      id: 'brush',
      name: 'Stealth Sonic Brush',
      sub: '48k VPM Motor',
      icon: Zap,
      gradient: 'from-[#1c1d29] to-[#0d0e14]',
      border: 'border-zinc-700',
    },
    {
      id: 'serum',
      name: 'Overnight Serum',
      sub: 'Color-Correct',
      icon: Droplets,
      gradient: 'from-[#262118] to-[#121319]',
      border: 'border-zinc-700',
    },
    {
      id: 'mist',
      name: 'Breath-Lock Mist',
      sub: 'Smoke Scent Zero',
      icon: Wind,
      gradient: 'from-[#1a1b24] to-[#0e0f14]',
      border: 'border-zinc-700',
    },
  ];

  return (
    <section className="w-full py-12 bg-[#0b0c10] border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title matching screenshot: "Explore Oral Care" */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            Explore <span className="gold-embossed">Smoker Oral Care</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-normal">
            Calibrated formulations tailored specifically for tobacco, cigar, and coffee lifestyle habits
          </p>
        </div>

        {/* Circular Category Items (Matching Screenshot 1) */}
        <div className="flex items-center justify-start md:justify-center gap-6 sm:gap-8 overflow-x-auto pb-4 pt-2 no-scrollbar">
          {categoryItems.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.name)}
                className="flex flex-col items-center flex-shrink-0 group cursor-pointer text-center w-28 sm:w-32 transition-transform hover:-translate-y-1 duration-200"
              >
                {/* Circular Outer Ring */}
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr ${cat.gradient} ${cat.border} border shadow-[0_8px_20px_rgba(0,0,0,0.8)] flex items-center justify-center relative group-hover:border-[#d4af37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all`}
                >
                  {/* Inner Metallic Disc */}
                  <div className="w-full h-full rounded-full bg-[#13141c] flex items-center justify-center text-zinc-300 group-hover:text-[#d4af37] transition-colors relative overflow-hidden">
                    {/* Metallic Shimmer */}
                    <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-transparent pointer-events-none" />
                    <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.5]" />
                  </div>
                </div>

                {/* Title */}
                <span className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-[#d4af37] mt-3 transition-colors line-clamp-1 font-display">
                  {cat.name}
                </span>
                <span className="text-[10px] text-zinc-400 mt-0.5 font-mono">
                  {cat.sub}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
