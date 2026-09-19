import React, { useState, useMemo } from 'react';
import {
  Filter,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  Grid3X3,
  Columns,
  ShoppingBag,
  Star,
  Check,
  Zap,
  Sparkles,
  SlidersHorizontal,
  X,
  Eye,
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, CONCERNS } from '../data/products';

interface ShopAllPageProps {
  onAddToCart: (product: Product, variantIndex?: number, quantity?: number) => void;
  onBuyNow: (product: Product, variantIndex?: number, quantity?: number) => void;
  onQuickView: (product: Product) => void;
  initialConcern?: string;
  initialSearch?: string;
}

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'name-asc';

export const ShopAllPage: React.FC<ShopAllPageProps> = ({
  onAddToCart,
  onBuyNow,
  onQuickView,
  initialConcern,
  initialSearch,
}) => {
  // Sidebar Accordion states (matching reference image)
  const [availabilityOpen, setAvailabilityOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [concernOpen, setConcernOpen] = useState(true);
  const [categoryOpen, setCategoryOpen] = useState(false);

  // Filter values
  const [inStockOnly, setInStockOnly] = useState(false);
  const [outOfStockOnly, setOutOfStockOnly] = useState(false);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(135);
  const [selectedConcern, setSelectedConcern] = useState<string>(initialConcern || 'All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sorting & Layout view (3-column vs 4-column as in reference screenshot)
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [gridColumns, setGridColumns] = useState<3 | 4>(3);

  // Quantities for each product card
  const [cardQuantities, setCardQuantities] = useState<Record<string, number>>({});

  const currencyMultiplier = currency === 'INR' ? 83 : 1;
  const currencySymbol = currency === 'INR' ? '₹' : '$';

  // Format price helper
  const formatPrice = (usd: number) => {
    if (currency === 'INR') {
      return `Rs. ${(usd * currencyMultiplier).toLocaleString('en-IN')}.00 INR`;
    }
    return `$${usd.toFixed(2)} USD`;
  };

  const highestCatalogPrice = useMemo(() => {
    return Math.max(...PRODUCTS.map((p) => p.variants[0]?.price || 0));
  }, []);

  const handleQuantityChange = (productId: string, delta: number) => {
    setCardQuantities((prev) => {
      const current = prev[productId] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [productId]: next };
    });
  };

  const getQuantity = (productId: string) => cardQuantities[productId] || 1;

  // Filter logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const primaryVariant = product.variants[0];
      const price = primaryVariant ? primaryVariant.price : 0;

      // In stock / Out of stock filter
      if (inStockOnly && !product.inStock) return false;
      if (outOfStockOnly && product.inStock) return false;

      // Price filter
      if (price < minPrice || price > maxPrice) return false;

      // Concern filter
      if (selectedConcern !== 'All' && product.concern !== selectedConcern) return false;

      // Category filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;

      // Search query if passed
      if (initialSearch) {
        const query = initialSearch.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchDesc = product.description.toLowerCase().includes(query);
        const matchConcern = product.concern.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchConcern) return false;
      }

      return true;
    }).sort((a, b) => {
      const priceA = a.variants[0]?.price || 0;
      const priceB = b.variants[0]?.price || 0;
      if (sortBy === 'price-asc') return priceA - priceB;
      if (sortBy === 'price-desc') return priceB - priceA;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      return 0; // featured
    });
  }, [inStockOnly, outOfStockOnly, minPrice, maxPrice, selectedConcern, selectedCategory, initialSearch, sortBy]);

  const hasActiveFilters =
    inStockOnly ||
    outOfStockOnly ||
    minPrice > 0 ||
    maxPrice < 135 ||
    selectedConcern !== 'All' ||
    selectedCategory !== 'All';

  const resetFilters = () => {
    setInStockOnly(false);
    setOutOfStockOnly(false);
    setMinPrice(0);
    setMaxPrice(135);
    setSelectedConcern('All');
    setSelectedCategory('All');
  };

  // Categories list
  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0b0c10] text-[#e0e2ec] py-8 sm:py-12 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-4 font-mono">
          <a href="/" className="hover:text-[#d4af37] transition-colors">
            Home
          </a>
          <span>/</span>
          <span className="text-zinc-200">Shop All Products</span>
          {selectedConcern !== 'All' && (
            <>
              <span>/</span>
              <span className="text-[#f5ce68]">{selectedConcern}</span>
            </>
          )}
        </div>

        {/* Page Title (Matching Screenshot Reference "Products") */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-4 border-b border-zinc-800/80 gap-4">
          <div>
            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
              Products
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-2xl font-light">
              Executive-grade smoker oral defense formulas. Non-abrasive (RDA 58), stain-clearing, and crystal-remineralizing.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-2 self-start sm:self-auto bg-[#141622] p-1 rounded-lg border border-zinc-800">
            <span className="text-[10px] text-zinc-400 font-mono px-2 uppercase">Currency:</span>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-2.5 py-1 text-xs font-mono font-bold rounded ${
                currency === 'USD' ? 'bg-[#d4af37] text-black shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-2.5 py-1 text-xs font-mono font-bold rounded ${
                currency === 'INR' ? 'bg-[#d4af37] text-black shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
            >
              INR (₹)
            </button>
          </div>
        </div>

        {/* Mobile Filter Trigger Button */}
        <div className="lg:hidden flex items-center justify-between mb-6 p-3 bg-[#13151f] rounded-xl border border-zinc-800">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#d4af37]" />
            <span>Filters ({filteredProducts.length} items)</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-[#1b1e2a] text-xs text-white border border-zinc-700 rounded-lg px-2.5 py-1"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name-asc">Alphabetically, A-Z</option>
            </select>
          </div>
        </div>

        {/* Main 2-Column Grid: Left Filters Sidebar + Right Product Grid (Matching Reference Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ========================================================
              LEFT COLUMN: FILTERS (Matching Reference Screenshot)
             ======================================================== */}
          <aside className="hidden lg:block lg:col-span-3 bg-[#10121a] border border-zinc-800/90 rounded-2xl p-6 sticky top-28 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <h2 className="text-lg font-bold font-display uppercase tracking-wider text-white flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#d4af37]" />
                Filters
              </h2>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-[#d4af37] hover:underline font-mono"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Filter Section 1: Availability (Matching Reference Screenshot) */}
            <div className="py-4 border-b border-zinc-800/80">
              <button
                type="button"
                onClick={() => setAvailabilityOpen(!availabilityOpen)}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-white"
              >
                <span>Availability</span>
                {availabilityOpen ? (
                  <ChevronUp className="w-4 h-4 text-zinc-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-zinc-400" />
                )}
              </button>

              {availabilityOpen && (
                <div className="mt-3.5 space-y-2.5 text-xs text-zinc-300">
                  <label className="flex items-center gap-2.5 cursor-pointer hover:text-white group">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => {
                        setInStockOnly(e.target.checked);
                        if (e.target.checked) setOutOfStockOnly(false);
                      }}
                      className="w-4 h-4 rounded bg-[#181a25] border-zinc-700 text-[#d4af37] accent-[#d4af37] cursor-pointer"
                    />
                    <span className="group-hover:text-white transition-colors">In stock</span>
                    <span className="text-[10px] text-zinc-500 font-mono ml-auto">({PRODUCTS.filter(p => p.inStock).length})</span>
                  </label>

                  <label className="flex items-center gap-2.5 cursor-pointer hover:text-white group">
                    <input
                      type="checkbox"
                      checked={outOfStockOnly}
                      onChange={(e) => {
                        setOutOfStockOnly(e.target.checked);
                        if (e.target.checked) setInStockOnly(false);
                      }}
                      className="w-4 h-4 rounded bg-[#181a25] border-zinc-700 text-[#d4af37] accent-[#d4af37] cursor-pointer"
                    />
                    <span className="group-hover:text-white transition-colors">Out of stock</span>
                    <span className="text-[10px] text-zinc-500 font-mono ml-auto">({PRODUCTS.filter(p => !p.inStock).length})</span>
                  </label>
                </div>
              )}
            </div>

            {/* Filter Section 2: Price Inputs (Matching Reference Screenshot with currency & "The highest price is ...") */}
            <div className="py-4 border-b border-zinc-800/80">
              <button
                type="button"
                onClick={() => setPriceOpen(!priceOpen)}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-white"
              >
                <span>Price</span>
                {priceOpen ? (
                  <ChevronUp className="w-4 h-4 text-zinc-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-zinc-400" />
                )}
              </button>

              {priceOpen && (
                <div className="mt-3.5 space-y-3">
                  {/* Min to Max Inputs matching the reference screenshot */}
                  <div className="flex items-center gap-2 text-xs">
                    {/* From Input */}
                    <div className="flex-1 flex items-center bg-[#151722] border border-zinc-700 rounded-lg px-2.5 py-1.5 focus-within:border-[#d4af37]">
                      <span className="text-zinc-400 font-mono mr-1.5">{currencySymbol}</span>
                      <input
                        type="number"
                        min={0}
                        max={135}
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        className="w-full bg-transparent text-white font-mono text-xs focus:outline-hidden"
                        placeholder="0"
                      />
                    </div>

                    <span className="text-zinc-400 font-mono text-xs">to</span>

                    {/* To Input */}
                    <div className="flex-1 flex items-center bg-[#151722] border border-zinc-700 rounded-lg px-2.5 py-1.5 focus-within:border-[#d4af37]">
                      <span className="text-zinc-400 font-mono mr-1.5">{currencySymbol}</span>
                      <input
                        type="number"
                        min={0}
                        max={150}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-full bg-transparent text-white font-mono text-xs focus:outline-hidden"
                        placeholder="135"
                      />
                    </div>
                  </div>

                  {/* High Price Highlight Notice (Matching Screenshot Style) */}
                  <div className="p-2 rounded-lg bg-[#182033] border border-blue-600/40 text-[11px] text-blue-300 font-mono">
                    The highest price is {formatPrice(highestCatalogPrice)}
                  </div>
                </div>
              )}
            </div>

            {/* Filter Section 3: Targeted Smoker Concern */}
            <div className="py-4 border-b border-zinc-800/80">
              <button
                type="button"
                onClick={() => setConcernOpen(!concernOpen)}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-white"
              >
                <span>Smoker Concern</span>
                {concernOpen ? (
                  <ChevronUp className="w-4 h-4 text-zinc-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-zinc-400" />
                )}
              </button>

              {concernOpen && (
                <div className="mt-3.5 space-y-1.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedConcern('All')}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                      selectedConcern === 'All'
                        ? 'bg-[#d4af37]/20 text-[#f5ce68] font-bold border border-[#d4af37]/40'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                    }`}
                  >
                    <span>All Concerns</span>
                    <span className="font-mono text-[10px]">({PRODUCTS.length})</span>
                  </button>

                  {CONCERNS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedConcern(c.label)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                        selectedConcern === c.label
                          ? 'bg-[#d4af37]/20 text-[#f5ce68] font-bold border border-[#d4af37]/40'
                          : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                      }`}
                    >
                      <span className="truncate pr-1">{c.label}</span>
                      <span className="font-mono text-[10px] shrink-0">
                        ({PRODUCTS.filter((p) => p.concern === c.label).length})
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Filter Section 4: Product Category */}
            <div className="py-4">
              <button
                type="button"
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-white"
              >
                <span>Category</span>
                {categoryOpen ? (
                  <ChevronUp className="w-4 h-4 text-zinc-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-zinc-400" />
                )}
              </button>

              {categoryOpen && (
                <div className="mt-3.5 space-y-1.5 text-xs">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between ${
                        selectedCategory === cat
                          ? 'bg-[#d4af37]/20 text-[#f5ce68] font-bold border border-[#d4af37]/40'
                          : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className="font-mono text-[10px]">
                        ({cat === 'All' ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === cat).length})
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* ========================================================
              RIGHT COLUMN: PRODUCTS GRID & CONTROLS (Matching Screenshot)
             ======================================================== */}
          <div className="lg:col-span-9">
            {/* Top Bar: Item count, Sorter, and Grid switchers (Matching Reference Screenshot Top-Right) */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800/70">
              {/* Item Count matching "3 items" in screenshot */}
              <div className="text-xs sm:text-sm font-mono text-zinc-400">
                <strong className="text-white font-bold">{filteredProducts.length}</strong> items
              </div>

              {/* Sorters and Grid View icons matching screenshot */}
              <div className="flex items-center gap-4">
                {/* Sort Dropdown matching "Sort v" in screenshot */}
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline text-xs text-zinc-400">Sort:</span>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as SortOption)}
                      className="bg-[#141620] hover:bg-[#1b1e2c] text-xs text-white border border-zinc-700/80 rounded-lg px-3 py-1.5 pr-8 appearance-none focus:outline-hidden focus:border-[#d4af37] cursor-pointer"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-asc">Price: low to high</option>
                      <option value="price-desc">Price: high to low</option>
                      <option value="rating">Highest Rated</option>
                      <option value="name-asc">Alphabetically, A-Z</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Grid View Switcher (3-column vs 4-column matching the icon button in reference screenshot) */}
                <div className="hidden sm:flex items-center gap-1 bg-[#141620] p-1 rounded-lg border border-zinc-800">
                  <button
                    onClick={() => setGridColumns(3)}
                    className={`p-1 rounded ${
                      gridColumns === 3 ? 'bg-zinc-800 text-[#d4af37]' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                    title="3 Columns Grid"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setGridColumns(4)}
                    className={`p-1 rounded ${
                      gridColumns === 4 ? 'bg-zinc-800 text-[#d4af37]' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                    title="4 Columns Grid"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Cards Grid matching the Reference Screenshot Design */}
            {filteredProducts.length === 0 ? (
              <div className="p-12 text-center bg-[#10121a] rounded-2xl border border-zinc-800 text-zinc-400">
                <Sparkles className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white mb-1">No products match your current filters</h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Try broadening your price range or resetting your smoker concern filter.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 rounded-xl bg-[#d4af37] text-black text-xs font-bold uppercase tracking-wider"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 ${
                  gridColumns === 4 ? 'xl:grid-cols-4 lg:grid-cols-3' : 'lg:grid-cols-3'
                } gap-6`}
              >
                {filteredProducts.map((product) => {
                  const mainVariant = product.variants[0];
                  const qty = getQuantity(product.id);
                  const isSale = mainVariant.originalPrice > mainVariant.price;

                  return (
                    <div
                      key={product.id}
                      className="group flex flex-col justify-between bg-[#10121a] hover:bg-[#141622] rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 p-5 shadow-lg relative overflow-hidden"
                    >
                      {/* Sale Badge (Matching Reference Screenshot Top-Right "Sale" label) */}
                      {isSale && (
                        <div className="absolute top-4 right-4 z-10">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-black/60 border border-zinc-700 px-2 py-0.5 rounded shadow-sm">
                            Sale
                          </span>
                        </div>
                      )}

                      {/* Product Image & Packaging Mockup Area (Matching Dark Canister In Reference Screenshot) */}
                      <div className="relative w-full aspect-square bg-gradient-to-b from-[#181a26] via-[#12131c] to-[#0d0e14] rounded-xl flex items-center justify-center p-4 overflow-hidden border border-zinc-800/60 mb-4 group-hover:border-[#d4af37]/30 transition-colors">
                        {/* Realistic Luxury Dark Canister / Tube simulation matching the screenshot canisters */}
                        <div className="relative flex flex-col items-center justify-center scale-95 transition-transform duration-300 group-hover:scale-100">
                          {/* Knurled Gold Screw Cap */}
                          <div className="w-20 h-5 bg-gradient-to-r from-[#8a6d1b] via-[#f5ce68] to-[#9b7b22] rounded-t-sm shadow-md border-b border-black/40 flex items-center justify-center">
                            <div className="w-14 h-1 border-t border-dotted border-black/40" />
                          </div>

                          {/* Dark Obsidian / Gunmetal Canister Cylinder */}
                          <div
                            className={`w-28 h-40 rounded-b-md shadow-2xl relative flex flex-col items-center justify-between p-3 overflow-hidden ${
                              product.category.includes('Paste')
                                ? 'bg-gradient-to-b from-[#1a1c27] via-[#10121a] to-[#090a0f] border-x border-b border-zinc-700/60'
                                : product.category.includes('Strips')
                                ? 'bg-gradient-to-b from-[#162024] via-[#0d161a] to-[#080d0f] border-x border-b border-emerald-900/50'
                                : 'bg-gradient-to-b from-[#241b1d] via-[#170e10] to-[#0d0708] border-x border-b border-amber-900/40'
                            }`}
                          >
                            {/* Metallic specular reflection streak */}
                            <div className="absolute top-0 left-3 w-3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                            {/* Gold Brand Crest */}
                            <div className="text-center pt-1">
                              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#d4af37] font-display block">
                                AKHAI
                              </span>
                              <span className="text-[7px] tracking-widest text-zinc-400 uppercase font-mono">
                                SWISS FORMULA
                              </span>
                            </div>

                            {/* Middle Gold Box Text (Matching Reference Image typography) */}
                            <div className="text-center px-1 my-auto">
                              <span className="text-[9px] font-extrabold uppercase tracking-wider text-white block leading-tight font-display">
                                {product.category.toUpperCase()}
                              </span>
                              <div className="w-8 h-[1px] bg-[#d4af37] mx-auto my-1" />
                              <span className="text-[8px] text-[#f5ce68] uppercase font-mono tracking-wide block">
                                {product.features.enamelSafeRDA}
                              </span>
                            </div>

                            {/* Bottom Volume & Seal */}
                            <div className="w-full flex items-center justify-between text-[7px] text-zinc-400 font-mono pt-1 border-t border-zinc-800">
                              <span>{product.volume}</span>
                              <span className="text-emerald-400">98.4% LIFT</span>
                            </div>
                          </div>
                        </div>

                        {/* Quick View Button overlay on hover */}
                        <button
                          onClick={() => onQuickView(product)}
                          className="absolute inset-x-4 bottom-4 py-2 bg-black/80 hover:bg-[#d4af37] hover:text-black backdrop-blur-md text-zinc-200 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 border border-zinc-700 hover:border-[#d4af37]"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Quick View</span>
                        </button>
                      </div>

                      {/* Product Title & Details (Matching Reference Screenshot layout) */}
                      <div>
                        {/* Rating Stars */}
                        <div className="flex items-center gap-1 mb-1.5 text-[11px]">
                          <div className="flex text-[#d4af37]">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-[#d4af37]" />
                            ))}
                          </div>
                          <span className="font-mono text-zinc-400 font-bold ml-1">
                            {product.rating}
                          </span>
                          <span className="text-zinc-400 text-[10px]">
                            ({product.reviewCount})
                          </span>
                        </div>

                        {/* Title (Matching multi-line reference title) */}
                        <h3 className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-2 min-h-[2.5rem]">
                          {product.name}
                        </h3>

                        {/* Tagline / Subtitle */}
                        <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1 font-light">
                          {product.tagline}
                        </p>

                        {/* Pricing (Matching "Rs. 1,299.00 INR Rs. 1,600.00 INR" in Screenshot) */}
                        <div className="flex items-baseline gap-2 mt-3 font-mono text-xs">
                          <span className="font-extrabold text-white">
                            {formatPrice(mainVariant.price)}
                          </span>
                          {isSale && (
                            <span className="text-zinc-400 line-through text-[11px]">
                              {formatPrice(mainVariant.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Area (Matching Reference Screenshot: [- 1 +], "Add to cart", and "Buy it now") */}
                      <div className="mt-5 space-y-2.5 pt-3 border-t border-zinc-800/80">
                        {/* Quantity Selector Stepper (Matching "[- 1 +]" in Reference Image) */}
                        <div className="w-full flex items-center justify-between border border-zinc-700/80 rounded-lg bg-[#141622] px-3 py-1.5">
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(product.id, -1)}
                            className="text-zinc-400 hover:text-white px-2 py-0.5 text-sm font-mono font-bold"
                            aria-label="Decrease quantity"
                          >
                            –
                          </button>
                          <span className="text-xs font-mono font-bold text-white">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleQuantityChange(product.id, 1)}
                            className="text-zinc-400 hover:text-white px-2 py-0.5 text-sm font-mono font-bold"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        {/* Button 1: "Add to cart" with cart icon (Matching Reference Screenshot) */}
                        <button
                          type="button"
                          onClick={() => onAddToCart(product, 0, qty)}
                          className="w-full py-2.5 rounded-lg border border-zinc-700 hover:border-[#d4af37] bg-[#161926] hover:bg-[#1e2233] text-white hover:text-[#f5ce68] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors active:scale-98"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to cart</span>
                        </button>

                        {/* Button 2: "Buy it now" (Matching Reference Screenshot solid black/gold button) */}
                        <button
                          type="button"
                          onClick={() => onBuyNow(product, 0, qty)}
                          className="w-full py-2.5 rounded-lg bg-black hover:bg-[#d4af37] text-white hover:text-black border border-zinc-700 hover:border-[#d4af37] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md active:scale-98 flex items-center justify-center gap-1.5"
                        >
                          <Zap className="w-3.5 h-3.5" />
                          <span>Buy it now</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div
            onClick={() => setMobileFilterOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-xs"
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-xs bg-[#10121a] border-l border-zinc-800 p-6 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Filter Products
                  </h3>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="text-zinc-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Availability */}
                <div className="py-4 border-b border-zinc-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                    Availability
                  </span>
                  <div className="space-y-2 text-xs">
                    <label className="flex items-center gap-2 text-zinc-300">
                      <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => setInStockOnly(e.target.checked)}
                        className="w-4 h-4 accent-[#d4af37]"
                      />
                      <span>In stock</span>
                    </label>
                    <label className="flex items-center gap-2 text-zinc-300">
                      <input
                        type="checkbox"
                        checked={outOfStockOnly}
                        onChange={(e) => setOutOfStockOnly(e.target.checked)}
                        className="w-4 h-4 accent-[#d4af37]"
                      />
                      <span>Out of stock</span>
                    </label>
                  </div>
                </div>

                {/* Mobile Price */}
                <div className="py-4 border-b border-zinc-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                    Price Range
                  </span>
                  <div className="flex items-center gap-2 text-xs">
                    <input
                      type="number"
                      value={minPrice}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                      className="w-20 bg-[#161824] border border-zinc-700 rounded p-1 text-white font-mono"
                    />
                    <span className="text-zinc-400">to</span>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-20 bg-[#161824] border border-zinc-700 rounded p-1 text-white font-mono"
                    />
                  </div>
                </div>

                {/* Mobile Concern */}
                <div className="py-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                    Smoker Concern
                  </span>
                  <div className="space-y-1 text-xs">
                    <button
                      onClick={() => setSelectedConcern('All')}
                      className={`w-full text-left p-2 rounded ${
                        selectedConcern === 'All' ? 'bg-[#d4af37] text-black font-bold' : 'text-zinc-400'
                      }`}
                    >
                      All Concerns
                    </button>
                    {CONCERNS.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedConcern(c.label)}
                        className={`w-full text-left p-2 rounded ${
                          selectedConcern === c.label ? 'bg-[#d4af37] text-black font-bold' : 'text-zinc-400'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full py-3 rounded-xl bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider"
                >
                  Show {filteredProducts.length} Results
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
