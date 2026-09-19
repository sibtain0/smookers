import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Filter, Sparkles, Flame, Coffee, Wind, Shield } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { CONCERNS } from '../data/products';

interface ShopByConcernProps {
  products: Product[];
  selectedConcern: string;
  onSelectConcern: (concern: string) => void;
  onAddToCart: (product: Product, variantIndex: number, engraving?: string) => void;
  onQuickView: (product: Product) => void;
  onViewCollection: () => void;
}

export const ShopByConcern: React.FC<ShopByConcernProps> = ({
  products,
  selectedConcern,
  onSelectConcern,
  onAddToCart,
  onQuickView,
  onViewCollection,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter products based on selected concern
  const filteredProducts =
    selectedConcern === 'All'
      ? products
      : products.filter((p) => p.concern === selectedConcern || p.category.includes(selectedConcern));

  const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayProducts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + displayProducts.length) % displayProducts.length);
  };

  return (
    <section id="concern" className="w-full py-16 bg-[#0d0e14] border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row matching Screenshot 2 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
              Shop by <span className="gold-embossed">Concern</span>
            </h2>
            <p className="text-sm text-zinc-400 mt-1.5">
              Find the exact formula calibrated for your lifestyle habits
            </p>

            {/* Concern Dropdown Selector (Matching Screenshot 2) */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="relative inline-block">
                <select
                  value={selectedConcern}
                  onChange={(e) => {
                    onSelectConcern(e.target.value);
                    setCurrentIndex(0);
                  }}
                  aria-label="Filter by lifestyle concern"
                  className="bg-[#181a24] text-xs font-semibold text-[#f5ce68] border border-[#d4af37]/60 rounded-full py-2 pl-4 pr-10 appearance-none focus:outline-hidden cursor-pointer shadow-md hover:border-[#d4af37]"
                >
                  <option value="All">All Lifestyle Concerns</option>
                  {CONCERNS.map((c) => (
                    <option key={c.id} value={c.label}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#d4af37]">
                  <ChevronRight className="w-3.5 h-3.5 rotate-90" />
                </div>
              </div>

              {/* Quick Concern Pills */}
              <div className="hidden lg:flex items-center gap-2">
                {CONCERNS.slice(0, 3).map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      onSelectConcern(c.label);
                      setCurrentIndex(0);
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedConcern === c.label
                        ? 'bg-[#d4af37] text-black font-bold shadow-md'
                        : 'bg-[#14151e] text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls (< and >) */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#181a24] hover:bg-[#252838] border border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors shadow-md"
              aria-label="Previous Products"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#181a24] hover:bg-[#252838] border border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors shadow-md"
              aria-label="Next Products"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Bottom Indicator & "View Collection" Button matching Screenshot 2 */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
            <span>01 / 06</span>
            <div className="w-36 h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-[#d4af37] rounded-full" />
            </div>
          </div>

          <button
            onClick={onViewCollection}
            className="px-8 py-2.5 rounded-full border border-[#d4af37]/70 hover:border-[#d4af37] bg-transparent hover:bg-[#d4af37]/10 text-xs font-bold uppercase tracking-widest text-[#f5ce68] hover:text-white transition-all shadow-md"
          >
            View Complete Collection
          </button>
        </div>
      </div>
    </section>
  );
};
