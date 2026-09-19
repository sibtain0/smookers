import React, { useState } from 'react';
import { X, Star, Check, ShieldCheck, Sparkles, Plus, Award } from 'lucide-react';
import { Product } from '../types';
import { ToothpastePackagingMockup } from './ToothpastePackagingMockup';
import { GoldEmbossedLogo } from './GoldEmbossedLogo';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, variantIndex: number, engraving?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [engraving, setEngraving] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0];

  const handleAdd = () => {
    onAddToCart(product, selectedVariantIndex, engraving ? engraving.toUpperCase() : undefined);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 flex items-center justify-center">
      <div onClick={onClose} className="fixed inset-0 bg-black/85 backdrop-blur-sm" />

      <div className="relative w-full max-w-4xl bg-[#11131b] border border-[#d4af37]/40 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-[#d4af37] hover:text-black text-zinc-400 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Packaging Render & Finishes */}
          <div className="md:col-span-6 bg-gradient-to-b from-[#181a24] via-[#101117] to-[#0a0b0f] p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-zinc-800 relative">
            <div className="absolute top-4 left-4 flex flex-col gap-1">
              <span className="px-2.5 py-1 rounded bg-[#d4af37] text-black text-[10px] font-extrabold uppercase tracking-widest font-sans">
                {product.badge || 'PREMIUM SMOKER CARE'}
              </span>
              <span className="text-[10px] font-mono text-zinc-400">
                Packaging: {product.metallicFinish}
              </span>
            </div>

            {/* Packaging Render */}
            <div className="my-6 transform scale-90">
              <ToothpastePackagingMockup interactive={false} />
            </div>

            {/* Packaging Highlights */}
            <div className="w-full bg-[#151722]/80 rounded-xl p-3 border border-zinc-800 text-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37] block">
                Metallic Specification
              </span>
              <p className="text-xs text-zinc-300 mt-1 font-medium">
                {product.goldAccent}
              </p>
            </div>
          </div>

          {/* Right Column: Science, Ingredients & Variant Selector */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              {/* Reviews & Category */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-[#d4af37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white font-mono">{product.rating}</span>
                <span className="text-xs text-zinc-400">({product.reviewCount} reviews)</span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                {product.name}
              </h2>
              <p className="text-xs text-[#f5ce68] font-medium mt-1">
                {product.tagline}
              </p>

              {/* Pricing */}
              <div className="flex items-baseline gap-3 mt-4 pb-4 border-b border-zinc-800">
                <span className="text-2xl font-extrabold text-white font-mono">
                  ${currentVariant.price}
                </span>
                {currentVariant.originalPrice > currentVariant.price && (
                  <span className="text-sm text-zinc-400 line-through font-mono">
                    ${currentVariant.originalPrice}
                  </span>
                )}
                {currentVariant.savings && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#d4af37]/20 text-[#f5ce68] border border-[#d4af37]/40 uppercase">
                    Save {currentVariant.savings}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-300 mt-4 leading-relaxed font-normal">
                {product.description}
              </p>

              {/* Key Benefits */}
              <div className="mt-4 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Clinical Action for Smokers:
                </span>
                {product.keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Clinical Metric Bar */}
              <div className="grid grid-cols-3 gap-2 mt-5 p-3 rounded-lg bg-[#161824] border border-zinc-800 text-center">
                <div>
                  <span className="text-[9px] text-zinc-400 uppercase block">Stain Lift</span>
                  <span className="text-xs font-bold text-white font-mono">98.4%</span>
                </div>
                <div>
                  <span className="text-[9px] text-zinc-400 uppercase block">Enamel Abrasion</span>
                  <span className="text-xs font-bold text-[#f5ce68] font-mono">RDA 58</span>
                </div>
                <div>
                  <span className="text-[9px] text-zinc-400 uppercase block">Odor Lock</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">24-Hr</span>
                </div>
              </div>

              {/* Variant Selector */}
              <div className="mt-5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                  Select Format / Pack Size:
                </label>
                <div className="space-y-2">
                  {product.variants.map((variant, idx) => (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`w-full p-2.5 rounded-lg border text-left text-xs flex items-center justify-between transition-all ${
                        selectedVariantIndex === idx
                          ? 'border-[#d4af37] bg-[#1a1c27] text-white shadow-md'
                          : 'border-zinc-800 bg-[#12141c] text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <span className="font-semibold">{variant.name}</span>
                      <span className="font-mono font-bold text-white">${variant.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Monogram Option */}
              <div className="mt-4 p-3 rounded-lg bg-[#141620] border border-zinc-800">
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#d4af37] block">
                  Complimentary Gold Cap Engraving (Optional)
                </label>
                <input
                  type="text"
                  maxLength={3}
                  placeholder="ENTER 2-3 INITIALS (e.g. JS)"
                  value={engraving}
                  onChange={(e) => setEngraving(e.target.value.toUpperCase())}
                  className="w-full mt-1.5 bg-[#0f1016] text-xs font-mono tracking-widest text-[#f5ce68] border border-zinc-700 rounded p-2 uppercase focus:outline-hidden focus:border-[#d4af37]"
                />
              </div>
            </div>

            {/* Add to Cart CTA */}
            <div className="mt-6 pt-4 border-t border-zinc-800">
              <button
                onClick={handleAdd}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f5ce68] to-[#b8860b] hover:from-[#e2be4b] text-black font-extrabold uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.4)] active:scale-98 transition-all"
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" /> Added to Your Arsenal
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 stroke-[3]" /> Add to Bag • ${currentVariant.price}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
