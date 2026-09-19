import React, { useState } from 'react';
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Shield,
  User as UserIcon,
  Package,
  BookOpen,
  Phone,
} from 'lucide-react';
import { GoldEmbossedLogo } from './GoldEmbossedLogo';
import { CONCERNS } from '../data/products';
import { PageType, UserProfile } from '../types';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  currentPage: PageType;
  onNavigate: (page: PageType, param?: string) => void;
  onSearch: (query: string) => void;
  currentUser: UserProfile | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  currentPage,
  onNavigate,
  onSearch,
  currentUser,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [concernDropdownOpen, setConcernDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      onNavigate('shop', searchQuery.trim());
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0d0e13]/95 backdrop-blur-md border-b border-zinc-800/80 transition-all">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-gradient-to-r from-[#171822] via-[#2a2310] via-50% to-[#171822] border-b border-[#d4af37]/30 py-1.5 px-4 text-center text-xs text-zinc-300 flex items-center justify-center gap-2">
        <span className="text-[#d4af37]">★</span>
        <span className="font-medium tracking-wide">
          Over 1.2M+ Smokers & Modern Tastemakers Smiled With <strong className="text-[#f5ce68]">AKHAI</strong>
        </span>
        <span className="hidden md:inline text-zinc-400">|</span>
        <span className="hidden md:inline text-[#e5c158] font-semibold">
          Complimentary Gold-Engraved Tongue Cleaner on orders over $45
        </span>
        <span className="text-[#d4af37]">★</span>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo with Gold Embossing */}
        <div
          onClick={() => onNavigate('home')}
          className="flex-shrink-0 cursor-pointer"
        >
          <GoldEmbossedLogo size="md" />
        </div>

        {/* Desktop Multi-Page Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-zinc-300">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors py-2 ${
              currentPage === 'home' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'hover:text-[#d4af37]'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => onNavigate('shop')}
            className={`transition-colors py-2 flex items-center gap-1.5 ${
              currentPage === 'shop' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'hover:text-[#d4af37]'
            }`}
          >
            <span>Shop All</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#d4af37] text-black font-extrabold">
              NEW
            </span>
          </button>

          {/* Shop By Concern Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setConcernDropdownOpen(!concernDropdownOpen)}
              onMouseEnter={() => setConcernDropdownOpen(true)}
              className="flex items-center gap-1 hover:text-[#d4af37] transition-colors py-2"
            >
              <span>By Concern</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-zinc-400" />
            </button>

            {concernDropdownOpen && (
              <div
                onMouseLeave={() => setConcernDropdownOpen(false)}
                className="absolute top-full left-0 w-72 bg-[#12131a] border border-zinc-800 rounded-2xl p-2 shadow-2xl z-50 backdrop-blur-xl"
              >
                <div className="p-2 border-b border-zinc-800 text-[10px] font-bold uppercase tracking-wider text-[#d4af37]">
                  Targeted Smoker Defense
                </div>
                {CONCERNS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setConcernDropdownOpen(false);
                      onNavigate('shop', c.label);
                    }}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-zinc-800/60 flex items-center justify-between transition-colors"
                  >
                    <span>{c.label}</span>
                    <span className="text-[10px] text-zinc-500 font-mono">{c.count}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate('blog')}
            className={`transition-colors py-2 flex items-center gap-1 ${
              currentPage === 'blog' || currentPage === 'blog-detail'
                ? 'text-[#d4af37] border-b-2 border-[#d4af37]'
                : 'hover:text-[#d4af37]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Journal</span>
          </button>

          <button
            onClick={() => onNavigate('track-order')}
            className={`transition-colors py-2 flex items-center gap-1 ${
              currentPage === 'track-order' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'hover:text-[#d4af37]'
            }`}
          >
            <Package className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Track Order</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className={`transition-colors py-2 flex items-center gap-1 ${
              currentPage === 'contact' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'hover:text-[#d4af37]'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Contact</span>
          </button>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xs relative">
          <form onSubmit={handleSearchSubmit} className="w-full">
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                placeholder='Search "Tar Defense", "Strips"...'
                className="w-full bg-[#181a24] text-xs text-zinc-200 placeholder-zinc-400 pl-10 pr-4 py-2 rounded-full border border-zinc-700/80 focus:outline-hidden focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/50 transition-all"
              />
            </div>
          </form>

          {/* Search Quick Suggestions */}
          {searchFocused && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-[#14151e] border border-zinc-800 rounded-xl p-3 shadow-2xl text-xs z-50">
              <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 block mb-2">
                Popular Smoker Searches
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Tar & Nicotine', 'Cigar Stains', 'RDA 58', 'Breath Mist', 'Night Serum'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setSearchQuery(item);
                      onSearch(item);
                      onNavigate('shop', item);
                    }}
                    className="px-2.5 py-1 bg-[#1e202c] hover:bg-[#d4af37] hover:text-black rounded-md text-[11px] text-zinc-300 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Action Icons: User Account, Cart & Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* User Account Portal Button */}
          <button
            onClick={() => onNavigate('account')}
            className={`p-2 sm:px-3 sm:py-2 rounded-full sm:rounded-xl border transition-all flex items-center gap-2 ${
              currentUser
                ? 'bg-[#1a1d2d] border-[#d4af37]/60 text-white hover:border-[#d4af37]'
                : 'bg-[#181a24] border-zinc-700/80 text-zinc-300 hover:text-white hover:border-zinc-500'
            }`}
            title={currentUser ? `Account: ${currentUser.name}` : 'Sign In / Account'}
          >
            <UserIcon className="w-4 h-4 text-[#d4af37]" />
            <span className="hidden sm:inline text-xs font-semibold">
              {currentUser ? currentUser.name.split(' ')[0] : 'Sign In'}
            </span>
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full bg-[#181a24] hover:bg-[#252838] border border-zinc-700/80 text-zinc-200 transition-colors duration-200 group"
            aria-label="View Shopping Bag"
          >
            <ShoppingBag className="w-5 h-5 group-hover:text-[#d4af37] transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black text-[10px] font-extrabold flex items-center justify-center shadow-lg animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101117] border-b border-zinc-800 px-6 py-6 space-y-4">
          <form onSubmit={handleSearchSubmit} className="mb-4">
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search smoker oral care..."
                className="w-full bg-[#181a24] text-xs text-white pl-9 pr-3 py-2 rounded-lg border border-zinc-700"
              />
            </div>
          </form>

          <div className="flex flex-col space-y-3 text-sm font-medium text-zinc-300">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 hover:text-[#d4af37]"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('shop');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 hover:text-[#d4af37] flex items-center justify-between"
            >
              <span>Shop All Products</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#d4af37] text-black font-bold">
                SALE
              </span>
            </button>
            <button
              onClick={() => {
                onNavigate('blog');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 hover:text-[#d4af37]"
            >
              Smoker Journal & Clinical Studies
            </button>
            <button
              onClick={() => {
                onNavigate('track-order');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 hover:text-[#d4af37] flex items-center gap-2"
            >
              <Package className="w-4 h-4 text-[#d4af37]" />
              <span>Track Order</span>
            </button>
            <button
              onClick={() => {
                onNavigate('account');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 hover:text-[#d4af37] flex items-center gap-2"
            >
              <UserIcon className="w-4 h-4 text-[#d4af37]" />
              <span>{currentUser ? `Account (${currentUser.name})` : 'Client Login'}</span>
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 hover:text-[#d4af37]"
            >
              Concierge & Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

