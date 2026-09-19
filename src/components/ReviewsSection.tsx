import React, { useState } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight, ThumbsUp } from 'lucide-react';
import { REVIEWS } from '../data/products';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section className="w-full py-16 bg-[#0b0c10] border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Heading & Overall Score (Matching Screenshot 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white leading-tight">
                Trusted by <br />
                <span className="gold-embossed">Millions of Teeth</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                Real people. Real routines. Real visible results.
              </p>

              {/* Overall Rating Block (Matching Screenshot 4) */}
              <div className="mt-8 p-4 rounded-xl bg-[#14151e] border border-zinc-800 inline-block">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#d4af37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-white font-mono">4.9 / 5</span>
                </div>
                <span className="text-[11px] text-zinc-400 block mt-1">
                  Based on 14,000+ verified customer reviews
                </span>
              </div>
            </div>

            {/* Slider Controls matching Screenshot 4 */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-[#181a24] hover:bg-[#252838] border border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors shadow-md"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-[#181a24] hover:bg-[#252838] border border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors shadow-md"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-zinc-400 ml-2">
                0{currentIndex + 1} / 0{REVIEWS.length}
              </span>
            </div>
          </div>

          {/* Right Column: Review Cards Carousel (Matching Screenshot 4) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REVIEWS.map((review, idx) => (
                <div
                  key={review.id}
                  className={`p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                    idx === currentIndex
                      ? 'bg-[#151722] border-[#d4af37]/60 shadow-[0_8px_24px_rgba(0,0,0,0.8),0_0_15px_rgba(212,175,55,0.15)]'
                      : 'bg-[#101117] border-zinc-800/80 hover:border-zinc-700'
                  }`}
                >
                  <div>
                    {/* Header: Author, City & Verified */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white">{review.name}</h4>
                        <span className="text-[11px] text-zinc-400">{review.city}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded-full font-medium">
                        <CheckCircle className="w-3 h-3" />
                        Verified Buyer
                      </span>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 text-[#d4af37] my-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="text-xs text-zinc-300 leading-relaxed italic">
                      "{review.comment}"
                    </p>
                  </div>

                  {/* Footer Product & Date Tag (Matching Screenshot 4) */}
                  <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px]">
                    <span className="px-2.5 py-1 rounded bg-[#1f2230] text-[#f5ce68] font-medium truncate max-w-[200px]">
                      {review.product}
                    </span>
                    <span className="text-zinc-400 font-mono">{review.timeAgo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
