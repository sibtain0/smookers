import React, { useState } from 'react';
import { Star, Check, Plus, Eye, Sparkles, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { GoldEmbossedLogo } from './GoldEmbossedLogo';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, variantIndex: number, engraving?: string) => void;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onQuickView,
}) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [engraving, setEngraving] = useState('');
  const [showEngravingInput, setShowEngravingInput] = useState(false);

  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0];

  const handleAdd = () => {
    onAddToCart(product, selectedVariantIndex, engraving ? engraving.toUpperCase() : undefined);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div className="dark-metallic-card rounded-xl overflow-hidden flex flex-col justify-between border border-[#242735] hover:border-[#d4af37]/40 group transition-all duration-300">
      {/* Top Media / Product Render Area */}
      <div className="relative w-full h-64 bg-gradient-to-b from-[#181a24] via-[#101117] to-[#0d0e13] flex items-center justify-center p-4 overflow-hidden">
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute inset-0 bg-radial from-[#d4af37]/10 via-transparent to-transparent pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.badge && (
            <span className="px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black rounded-sm shadow-md font-sans">
              {product.badge}
            </span>
          )}
          <span className="px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider bg-[#1a1c26]/90 border border-zinc-700 text-zinc-300 rounded-sm">
            {product.metallicFinish}
          </span>
        </div>

        {/* Quick View Button on Hover */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#1b1d28]/80 hover:bg-[#d4af37] hover:text-black text-zinc-300 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-md"
          title="Quick View Details"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Visual Mockup Based on Category */}
        <div className="relative flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
          {product.category === 'Toothpaste' ? (
            /* Mini Metallic Toothpaste Tube */
            <div className="relative w-24 h-48 flex flex-col items-center drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)]">
              {/* Tube Crimp */}
              <div className="w-20 h-4 bg-gradient-to-r from-[#171923] via-[#35394a] to-[#121319] border-t border-[#d4af37]/70 rounded-t-sm" />
              {/* Body */}
              <div className="w-20 h-36 bg-gradient-to-r from-[#121319] via-[#242735] via-45% via-[#323648] to-[#121319] flex flex-col items-center justify-between py-2 px-1 relative overflow-hidden">
                <div className="w-12 h-0.5 bg-[#d4af37]/80" />
                <div className="text-center">
                  <span className="text-[9px] font-extrabold gold-embossed tracking-wider block">
                    AKHAI
                  </span>
                  <span className="text-[6px] tracking-widest text-zinc-400 uppercase font-mono block">
                    SMOKERS
                  </span>
                </div>
                <div className="px-1.5 py-0.5 bg-black/40 rounded border border-[#d4af37]/30 text-[6px] text-zinc-300 font-mono">
                  RDA 58
                </div>
              </div>
              {/* Gold Cap */}
              <div className="w-12 h-8 bg-gradient-to-r from-[#8a681c] via-[#ecd17c] to-[#745511] rounded-b-sm border-t border-black/50 shadow-md flex items-center justify-center">
                <span className="text-[6px] font-extrabold text-[#3a2a05]">A</span>
              </div>
            </div>
          ) : product.category === 'Whitening Serum' ? (
            /* Luxury Metallic Obsidian Dropper Bottle */
            <div className="relative w-20 h-44 flex flex-col items-center drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)]">
              {/* Gold Dropper Top */}
              <div className="w-5 h-6 bg-zinc-900 rounded-t-full border-t border-zinc-700" />
              <div className="w-8 h-4 bg-gradient-to-r from-[#caa13f] via-[#fff1bf] to-[#7b5711] border-b border-black/40" />
              {/* Dark Titanium Glass Bottle */}
              <div className="w-16 h-32 rounded-b-md bg-gradient-to-r from-[#14161f] via-[#282b3a] to-[#0f1015] border border-zinc-700/60 flex flex-col items-center justify-between py-3 px-1">
                <span className="text-[5.5px] tracking-widest uppercase text-[#d4af37]">NIGHT SERUM</span>
                <span className="text-[8.5px] font-extrabold gold-embossed tracking-wider">AKHAI</span>
                <span className="text-[5.5px] text-zinc-400 font-mono">30ML / 1 FL OZ</span>
              </div>
            </div>
          ) : product.category === 'Whitening Strips' ? (
            /* Luxury Strips Box */
            <div className="relative w-36 h-44 rounded-md border border-[#2b2e3c] bg-gradient-to-b from-[#1c1e28] to-[#0e0f14] shadow-[0_15px_30px_rgba(0,0,0,0.9)] flex flex-col items-center justify-between p-3">
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
              <div className="text-center">
                <span className="text-[9px] font-bold gold-embossed tracking-widest block">AKHAI</span>
                <span className="text-[6.5px] tracking-wider text-zinc-300 uppercase font-semibold block mt-0.5">
                  TAR-DISSOLVE STRIPS
                </span>
              </div>
              <div className="w-10 h-10 rounded-full border border-[#d4af37]/60 flex items-center justify-center bg-black/40">
                <span className="text-[7px] text-[#d4af37] font-bold">PAP+</span>
              </div>
              <span className="text-[6.5px] text-zinc-400 font-mono tracking-widest uppercase">
                14 DISSOLVABLE TREATMENTS
              </span>
            </div>
          ) : (
            /* Sonic Brush or System Kit */
            <div className="relative w-28 h-44 flex items-center justify-center">
              <div className="w-4 h-40 rounded-full bg-gradient-to-r from-[#1a1c26] via-[#2c3040] to-[#12131a] border border-zinc-700 shadow-xl flex flex-col items-center justify-between py-2">
                <div className="w-3 h-10 rounded-t-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
                <div className="w-3 h-1 bg-[#d4af37]" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Content & Pricing */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-[#111218]">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex items-center text-[#d4af37]">
              <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
            </div>
            <span className="text-xs font-bold text-white">{product.rating.toFixed(2)}</span>
            <span className="text-[11px] text-zinc-400">({product.reviewCount} reviews)</span>
          </div>

          {/* Title */}
          <h3 className="text-sm font-bold text-white group-hover:text-[#d4af37] transition-colors line-clamp-1 font-display">
            {product.name}
          </h3>

          {/* Tagline */}
          <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          {/* Pricing Row */}
          <div className="flex items-baseline gap-2 mt-3">
            <span className="text-lg font-extrabold text-white font-mono">
              ${currentVariant.price}
            </span>
            {currentVariant.originalPrice > currentVariant.price && (
              <span className="text-xs text-zinc-400 line-through font-mono">
                ${currentVariant.originalPrice}
              </span>
            )}
            {currentVariant.savings && (
              <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider">
                {currentVariant.savings}
              </span>
            )}
          </div>

          {/* Variant Selector Dropdown */}
          <div className="mt-3">
            <select
              value={selectedVariantIndex}
              onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
              aria-label={`Select variant for ${product.name}`}
              className="w-full bg-[#181a24] text-xs text-zinc-200 border border-zinc-700/80 rounded-md py-1.5 px-2.5 focus:outline-hidden focus:border-[#d4af37] transition-colors cursor-pointer"
            >
              {product.variants.map((v, idx) => (
                <option key={v.id} value={idx}>
                  {v.name} - ${v.price}
                </option>
              ))}
            </select>
          </div>

          {/* Custom Initials Engraving Toggle */}
          <div className="mt-2.5">
            {!showEngravingInput ? (
              <button
                type="button"
                onClick={() => setShowEngravingInput(true)}
                className="text-[10px] text-zinc-400 hover:text-[#d4af37] flex items-center gap-1 transition-colors"
              >
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                Add custom gold-embossed cap initials (+$0)
              </button>
            ) : (
              <div className="flex items-center gap-1.5 mt-1">
                <input
                  type="text"
                  maxLength={3}
                  placeholder="INITIALS (e.g. AK)"
                  value={engraving}
                  onChange={(e) => setEngraving(e.target.value.toUpperCase())}
                  className="w-28 bg-[#181a24] text-xs font-mono tracking-widest text-[#d4af37] uppercase border border-[#d4af37]/60 rounded px-2 py-1 focus:outline-hidden"
                />
                <span className="text-[10px] text-zinc-400">Embossed on Cap</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-4 pt-3 border-t border-zinc-800/80">
          <button
            onClick={handleAdd}
            className={`w-full py-2.5 px-4 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
              isAdded
                ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                : 'bg-gradient-to-r from-[#d4af37] via-[#f1cb68] to-[#b8860b] hover:from-[#e0be48] hover:to-[#cda224] text-black shadow-[0_4px_14px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.5)] active:scale-[0.98]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" /> Added to Bag
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 stroke-[3]" /> Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
