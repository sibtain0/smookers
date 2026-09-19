import React, { useState } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface OralCareEssentialsProps {
  products: Product[];
  onAddToCart: (product: Product, variantIndex: number, engraving?: string) => void;
  onQuickView: (product: Product) => void;
}

export const OralCareEssentials: React.FC<OralCareEssentialsProps> = ({
  products,
  onAddToCart,
  onQuickView,
}) => {
  const [activeTab, setActiveTab] = useState<'Bestsellers' | 'Founders' | 'Value Pack' | 'Newly Launched'>('Bestsellers');
  const [visibleCount, setVisibleCount] = useState(4);

  const tabs: Array<'Bestsellers' | 'Founders' | 'Value Pack' | 'Newly Launched'> = [
    'Bestsellers',
    'Founders',
    'Value Pack',
    'Newly Launched',
  ];

  // Filter based on tab
  const filtered = products.filter((p) => {
    if (activeTab === 'Bestsellers') return p.badge === 'BESTSELLER' || p.rating >= 4.88;
    if (activeTab === 'Founders') return p.badge === 'CLINICALLY PROVEN' || p.category === 'Toothpaste';
    if (activeTab === 'Value Pack') return p.category === 'Value Pack' || p.variants.length > 2;
    if (activeTab === 'Newly Launched') return p.badge === 'NEW LAUNCH' || p.category === 'Whitening Strips';
    return true;
  });

  const displayList = filtered.slice(0, visibleCount);

  return (
    <section id="essentials" className="w-full py-16 bg-[#0b0c10] border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title matching Screenshot 3: "Oral Care Essentials" */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            Oral Care <span className="gold-embossed">Essentials</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Precision daily tools engineered for smokers demanding pristine dental aesthetics
          </p>

          {/* Filter Pills (Matching Screenshot 3) */}
          <div className="flex flex-wrap items-center gap-2.5 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setVisibleCount(4);
                }}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black shadow-[0_2px_12px_rgba(212,175,55,0.4)]'
                    : 'bg-[#151722] text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {tab === 'Founders' ? "Founders' Favourite" : tab}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Show More Button (Matching Screenshot 3) */}
        {visibleCount < filtered.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="px-8 py-2.5 rounded-full border border-zinc-700 hover:border-[#d4af37] bg-[#12131b] hover:bg-[#181a24] text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-[#f5ce68] transition-all shadow-md"
            >
              Show More Essentials
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
