import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, User, Search, Tag, Sparkles } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/blogData';
import { BlogArticle } from '../types';

interface BlogPageProps {
  onSelectArticle: (article: BlogArticle) => void;
  onNavigateToShop: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onSelectArticle, onNavigateToShop }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Clinical Science', 'Lifestyle & Cigars', 'Enamel Defense', 'Daily Protocol'];

  const filteredArticles = BLOG_ARTICLES.filter((article) => {
    const matchCat = selectedCategory === 'All' || article.category === selectedCategory;
    const matchQuery =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchQuery;
  });

  const featuredArticle = BLOG_ARTICLES[0];

  return (
    <div className="w-full min-h-screen bg-[#0b0c10] text-[#e0e2ec] py-12 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-4 font-mono">
          <a href="/" className="hover:text-[#d4af37] transition-colors">
            Home
          </a>
          <span>/</span>
          <span className="text-[#f5ce68]">Smoker Oral Science & Lifestyle Journal</span>
        </div>

        {/* Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4af37] block mb-2 font-display">
            AKHAI CLINICAL ARCHIVES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            The Smoker Oral Science Journal
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-3 font-light leading-relaxed">
            Rigorous research on tobacco tar chemistry, non-abrasive enamel remineralization, cigar lounge etiquette, and daily dental protocols.
          </p>
        </div>

        {/* Featured Story Hero Card */}
        {selectedCategory === 'All' && !searchQuery && (
          <div
            onClick={() => onSelectArticle(featuredArticle)}
            className="group cursor-pointer mb-14 rounded-3xl bg-gradient-to-r from-[#141622] via-[#1a1d2e] to-[#12131c] border border-zinc-800 hover:border-[#d4af37]/60 overflow-hidden shadow-2xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#d4af37] text-black">
                      FEATURED CLINICAL STUDY
                    </span>
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white group-hover:text-[#f5ce68] transition-colors leading-tight">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-zinc-300 mt-3 leading-relaxed font-light">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredArticle.author.avatar}
                      alt={featuredArticle.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-[#d4af37]/50"
                    />
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {featuredArticle.author.name}
                      </span>
                      <span className="text-[11px] text-zinc-400 font-mono block">
                        {featuredArticle.author.role}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4af37] group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden">
                <img
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141622] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#141622] lg:via-transparent" />
              </div>
            </div>
          </div>
        )}

        {/* Category Tabs & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#d4af37] text-black font-bold shadow-md'
                    : 'bg-[#141622] text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles & ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141622] border border-zinc-800 rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-hidden focus:border-[#d4af37]"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer flex flex-col justify-between rounded-2xl bg-[#12141d] border border-zinc-800/80 hover:border-zinc-700 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div>
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-xs text-[#f5ce68] border border-zinc-700">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-mono mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#d4af37]" />
                      {article.publishedDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#d4af37]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#f5ce68] transition-colors leading-snug font-display">
                    {article.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-2.5 line-clamp-3 leading-relaxed font-light">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181b28] text-zinc-400 border border-zinc-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer Author & CTA */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-[11px] text-zinc-300 font-medium truncate max-w-[120px]">
                      {article.author.name}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-[#d4af37] group-hover:underline flex items-center gap-1">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter / Call to Action at Bottom */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#181a26] via-[#241f14] to-[#181a26] p-8 sm:p-12 border border-[#d4af37]/40 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#d4af37] block mb-1">
              THE AKHAI WHITEPAPER INITIATIVE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Elevate Your Daily Smoker Protocol
            </h3>
            <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
              Explore our clinical formulas engineered strictly for stubborn tar dissolution, zero sensitivity, and enamel remineralization.
            </p>
          </div>

          <button
            onClick={onNavigateToShop}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-extrabold uppercase tracking-widest text-xs shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0"
          >
            Explore All Formulas
          </button>
        </div>
      </div>
    </div>
  );
};
