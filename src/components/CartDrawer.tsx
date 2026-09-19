import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Gift } from 'lucide-react';
import { CartItem } from '../types';
import { GoldEmbossedLogo } from './GoldEmbossedLogo';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, variantId: string, quantity: number) => void;
  onRemoveItem: (productId: string, variantId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.variant.price * item.quantity, 0);
  const discountAmount = discountApplied ? subtotal * 0.15 : 0;
  const shipping = subtotal >= 45 ? 0 : 5;
  const total = subtotal - discountAmount + (subtotal > 0 ? shipping : 0);

  const freeThreshold = 45;
  const progressPercent = Math.min(100, Math.round((subtotal / freeThreshold) * 100));

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'SMOKER15' || promoCode.trim().toUpperCase() === 'AKHAI') {
      setDiscountApplied(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#101117] border-l border-zinc-800 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-[#141620]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
              <h2 className="text-base font-bold font-display uppercase tracking-wider text-white">
                Your Smoker Arsenal ({items.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping & Gift Progress Bar */}
          <div className="px-6 py-3.5 bg-[#171924] border-b border-zinc-800 text-xs">
            <div className="flex items-center justify-between mb-1.5 font-medium">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Gift className="w-4 h-4 text-[#d4af37]" />
                {subtotal >= freeThreshold ? (
                  <span className="text-[#f5ce68] font-bold">
                    You unlocked Free Express Delivery & Gold Scraper!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-white">${freeThreshold - subtotal}</strong> more for Free Luxury Gift
                  </span>
                )}
              </span>
              <span className="text-[#d4af37] font-mono">{progressPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#d4af37] to-[#f5ce68] transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-zinc-400">
                <ShoppingBag className="w-12 h-12 text-zinc-600 mb-3" />
                <p className="text-sm font-medium text-zinc-300">Your bag is currently empty</p>
                <p className="text-xs text-zinc-500 mt-1 max-w-xs">
                  Discover our dark metallic stain defense toothpaste and clinical oral care tools.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black text-xs font-bold uppercase tracking-wider"
                >
                  Explore Essentials
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.product.id}-${item.variant.id}`}
                  className="p-3.5 rounded-xl bg-[#151722] border border-zinc-800 flex gap-3.5 items-center justify-between"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate font-display">
                      {item.product.name}
                    </h4>
                    <span className="text-[11px] text-[#f5ce68] block mt-0.5">
                      {item.variant.name}
                    </span>
                    {item.customEngraving && (
                      <span className="text-[10px] text-zinc-400 font-mono block">
                        Gold Cap Initials: <strong>{item.customEngraving}</strong>
                      </span>
                    )}
                    <span className="text-xs font-bold text-white font-mono mt-1 block">
                      ${item.variant.price * item.quantity}
                    </span>
                  </div>

                  {/* Quantity Actions */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-zinc-700 rounded-lg bg-[#0d0e14]">
                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.product.id,
                            item.variant.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="p-1.5 text-zinc-400 hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-mono font-bold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, item.variant.id, item.quantity + 1)
                        }
                        className="p-1.5 text-zinc-400 hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id, item.variant.id)}
                      className="p-2 text-zinc-500 hover:text-red-400 transition-colors"
                      title="Remove Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-zinc-800 bg-[#12141c] space-y-4">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (Try SMOKER15)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-[#181a24] text-xs text-zinc-200 border border-zinc-700 rounded-lg px-3 py-2 uppercase font-mono tracking-wider focus:outline-hidden focus:border-[#d4af37]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-zinc-800 hover:bg-[#d4af37] hover:text-black text-xs font-bold rounded-lg transition-colors text-zinc-200"
                >
                  Apply
                </button>
              </form>

              {/* Order Calculations */}
              <div className="space-y-1.5 text-xs text-zinc-400 pt-2 border-t border-zinc-800/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-white">${subtotal.toFixed(2)}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-[#d4af37]">
                    <span>VIP Smoker Discount (15%)</span>
                    <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Express Insured Shipping</span>
                  <span className="font-mono text-white">
                    {shipping === 0 ? <span className="text-emerald-400">FREE</span> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-zinc-800">
                  <span>Total Amount</span>
                  <span className="font-mono text-lg text-[#f5ce68]">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={onCheckout}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f5ce68] to-[#b8860b] hover:from-[#e2be4b] hover:to-[#cb9e24] text-black font-extrabold uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.4)] active:scale-98 transition-all"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>30-Day Guaranteed Clean Teeth or 100% Refund</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
