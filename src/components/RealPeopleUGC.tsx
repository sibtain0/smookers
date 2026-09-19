import React, { useState } from 'react';
import { Play, Star, CheckCircle, Volume2, X } from 'lucide-react';
import { VIDEO_TESTIMONIALS } from '../data/products';
import { VideoTestimonial } from '../types';

interface RealPeopleUGCProps {
  onSelectProduct: (productName: string) => void;
}

export const RealPeopleUGC: React.FC<RealPeopleUGCProps> = ({ onSelectProduct }) => {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);

  return (
    <section id="ugc" className="w-full py-16 bg-[#0e0f15] border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow matching Screenshot 4: "REAL PEOPLE, REAL RESULTS" */}
        <div className="text-center mb-10">
          <span className="text-[11px] uppercase font-bold tracking-[0.35em] text-[#d4af37] block mb-2">
            REAL SMOKERS, REAL RESULTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            Unfiltered Stories From <span className="gold-embossed">Modern Tastemakers</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl mx-auto">
            Discover why entrepreneurs, cigar smokers, and espresso drinkers trust AKHAI to protect their smile.
          </p>
        </div>

        {/* Video Stories Carousel Grid (Matching Screenshot 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_TESTIMONIALS.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800 bg-[#141620] hover:border-[#d4af37]/60 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Video Thumbnail Simulation */}
              <div className="relative w-full h-80 bg-gradient-to-b from-[#1e202c] via-[#12131b] to-[#0a0b10] flex flex-col justify-between p-4 overflow-hidden">
                {/* Simulated Ambient Photography / Portrait */}
                <div className="absolute inset-0 bg-radial from-[#d4af37]/15 via-transparent to-black/80 pointer-events-none" />

                {/* Top User Info */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#caa13f] to-[#7b5711] flex items-center justify-center text-black text-xs font-bold font-mono shadow-sm">
                      {video.creator.charAt(0)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block leading-none">
                        {video.creator}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-mono">
                        {video.handle}
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-black/60 text-zinc-300 border border-zinc-700">
                    {video.videoDuration}
                  </span>
                </div>

                {/* Center Play Button Overlay */}
                <div className="relative z-10 my-auto flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#d4af37]/90 group-hover:bg-[#f3ce65] text-black flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-black translate-x-0.5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-300 mt-2 bg-black/50 px-2 py-0.5 rounded">
                    Watch Story
                  </span>
                </div>

                {/* Bottom Hook Quote on Video (Like "Your Toothpaste is harmful." in Screenshot 4) */}
                <div className="relative z-10 bg-black/70 backdrop-blur-xs p-3 rounded-lg border border-white/10">
                  <p className="text-xs font-bold text-white leading-tight">
                    {video.headline}
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-[#d4af37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#d4af37]" />
                    ))}
                    <span className="text-[10px] text-emerald-400 font-semibold ml-1">
                      Verified Smoker
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Product Used & Price */}
              <div className="p-3.5 bg-[#0f1017] border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-zinc-200 line-clamp-1">
                    {video.productName}
                  </span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-xs font-bold text-white font-mono">
                      ${video.productPrice}
                    </span>
                    <span className="text-[10px] text-zinc-400 line-through font-mono">
                      ${video.productOrigPrice}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProduct(video.productName);
                  }}
                  className="px-3 py-1.5 rounded text-[11px] font-bold bg-[#1d1f2b] hover:bg-[#d4af37] hover:text-black text-zinc-300 transition-colors"
                >
                  View Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Simulation */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#141620] border border-[#d4af37]/60 rounded-2xl overflow-hidden shadow-2xl p-6">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#caa13f] to-[#7b5711] flex items-center justify-center text-black font-bold font-mono">
                {activeVideo.creator.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{activeVideo.creator}</div>
                <div className="text-xs text-zinc-400">{activeVideo.userProfile}</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0e0f15] border border-zinc-800 text-sm text-zinc-200 leading-relaxed italic mb-4">
              “{activeVideo.quote}”
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-zinc-800 text-xs">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>Verified AKHAI Smoker Customer</span>
              </div>
              <button
                onClick={() => {
                  onSelectProduct(activeVideo.productName);
                  setActiveVideo(null);
                }}
                className="px-4 py-2 rounded-lg bg-[#d4af37] text-black font-bold hover:bg-[#e2bd49] transition-colors"
              >
                Shop {activeVideo.productName}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
