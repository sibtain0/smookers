import React from 'react';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react';
import { BlogArticle, Product } from '../types';
import { PRODUCTS } from '../data/products';

interface BlogDetailPageProps {
  article: BlogArticle;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  article,
  onBack,
  onAddToCart,
  onQuickView,
}) => {
  const recommendedProducts = PRODUCTS.filter((p) =>
    article.recommendedProductIds.includes(p.id)
  );

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <article className="w-full min-h-screen bg-[#0b0c10] text-[#e0e2ec] py-10 border-b border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation & Back */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Journal
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151722] hover:bg-[#1f2233] border border-zinc-800 text-xs text-zinc-300 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            Share
          </button>
        </div>

        {/* Category & Date Meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#d4af37] text-black">
            {article.category}
          </span>
          <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
            {article.readTime}
          </span>
          <span className="text-zinc-500">•</span>
          <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
            {article.publishedDate}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
          {article.title}
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 font-light mt-4 leading-relaxed">
          {article.subtitle}
        </p>

        {/* Author Bio Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-[#141622] border border-zinc-800 flex items-center gap-4">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-12 h-12 rounded-full object-cover border border-[#d4af37]/60"
          />
          <div>
            <span className="text-sm font-bold text-white block">{article.author.name}</span>
            <span className="text-xs text-[#f5ce68] font-mono block">{article.author.role}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="my-8 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl aspect-video relative">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Key Takeaways Callout Box */}
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#161928] to-[#12131d] border border-[#d4af37]/40 shadow-xl">
          <div className="flex items-center gap-2 mb-4 text-[#d4af37]">
            <Sparkles className="w-5 h-5" />
            <h3 className="text-sm font-bold uppercase tracking-widest font-display text-white">
              Clinical Takeaways for Smokers
            </h3>
          </div>
          <div className="space-y-3">
            {article.keyTakeaways.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Article Content */}
        <div className="space-y-6 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
          {article.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-[#151722] text-zinc-400 border border-zinc-800"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Recommended Formulations based on this article */}
        {recommendedProducts.length > 0 && (
          <div className="mt-14 pt-10 border-t border-zinc-800">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#d4af37] block mb-2 font-display">
              PRESCRIBED PROTOCOL
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-6">
              Formulations Recommended in this Article
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recommendedProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-5 rounded-2xl bg-[#12141e] border border-zinc-800 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#f5ce68] uppercase block mb-1">
                      {product.features.enamelSafeRDA}
                    </span>
                    <h4 className="text-sm font-bold text-white">{product.name}</h4>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-2">{product.tagline}</p>
                    <div className="mt-3 font-mono text-sm font-bold text-white">
                      ${product.variants[0].price}.00 USD
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4 pt-3 border-t border-zinc-800/80">
                    <button
                      onClick={() => onQuickView(product)}
                      className="flex-1 py-2 rounded-lg bg-[#1a1d2c] hover:bg-zinc-800 text-zinc-200 text-xs font-semibold"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="flex-1 py-2 rounded-lg bg-[#d4af37] hover:bg-[#e2be4b] text-black text-xs font-bold uppercase flex items-center justify-center gap-1"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
