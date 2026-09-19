/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExploreCategories } from './components/ExploreCategories';
import { ShopByConcern } from './components/ShopByConcern';
import { ClinicalProofSection } from './components/ClinicalProofSection';
import { OralCareEssentials } from './components/OralCareEssentials';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { RealPeopleUGC } from './components/RealPeopleUGC';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';

// Multi-Page Views
import { ShopAllPage } from './pages/ShopAllPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { AccountPage } from './pages/AccountPage';

import { PRODUCTS } from './data/products';
import { BLOG_ARTICLES } from './data/blogData';
import { INITIAL_ORDERS, INITIAL_USER } from './data/orderData';
import { Product, CartItem, PageType, BlogArticle, UserProfile, Order } from './types';
import { updatePageSEO } from './utils/seo';
import { Check, X } from 'lucide-react';

export default function App() {
  // Navigation State
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedBlogArticle, setSelectedBlogArticle] = useState<BlogArticle | null>(null);
  const [shopInitialConcern, setShopInitialConcern] = useState<string>('All');
  const [shopInitialSearch, setShopInitialSearch] = useState<string>('');

  // Cart State (Persisted)
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('akhai_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // User State (Persisted)
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('akhai_user');
      return saved ? JSON.parse(saved) : INITIAL_USER;
    } catch {
      return INITIAL_USER;
    }
  });

  // Orders State (Persisted)
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('akhai_orders');
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch {
      return INITIAL_ORDERS;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedConcern, setSelectedConcern] = useState('All');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('akhai_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Persist user
  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('akhai_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('akhai_user');
      }
    } catch {
      // ignore
    }
  }, [user]);

  // Persist orders
  useEffect(() => {
    try {
      localStorage.setItem('akhai_orders', JSON.stringify(orders));
    } catch {
      // ignore
    }
  }, [orders]);

  // Handle Browser Back & Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, '');
      if (!path || path === 'home') {
        setCurrentPage('home');
      } else if (path === 'shop' || path === 'products') {
        setCurrentPage('shop');
      } else if (path === 'blog' || path === 'journal') {
        setCurrentPage('blog');
      } else if (path.startsWith('blog/')) {
        const slug = path.replace('blog/', '');
        const found = BLOG_ARTICLES.find((a) => a.slug === slug);
        if (found) {
          setSelectedBlogArticle(found);
          setCurrentPage('blog-detail');
        } else {
          setCurrentPage('blog');
        }
      } else if (path === 'contact' || path === 'concierge') {
        setCurrentPage('contact');
      } else if (path === 'account' || path === 'login') {
        setCurrentPage('account');
      } else if (path === 'track-order' || path === 'tracking') {
        setCurrentPage('track-order');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update SEO dynamically on page change
  useEffect(() => {
    switch (currentPage) {
      case 'home':
        updatePageSEO({
          title: 'AKHAI Smokers Toothpaste | Bold Luxury Oral Care Solutions',
          description:
            'Bold, luxury oral care engineered for modern lifestyle choices. Dark metallic packaging, embossed gold accents, and RDA 58 smoker stain defense.',
          canonicalPath: '/',
          ogType: 'website',
          jsonLd: {
            '@type': 'Product',
            name: "AKHAI Smoker's Deep Stain Defense Toothpaste",
            description: 'Advanced tar-lifting oral formula for smokers and coffee drinkers.',
            brand: { '@type': 'Brand', name: 'AKHAI' },
            offers: {
              '@type': 'Offer',
              price: '18.00',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
          },
        });
        break;

      case 'shop':
        updatePageSEO({
          title: 'Shop All Products | AKHAI Executive Smoker Oral Defense',
          description:
            'Explore AKHAI complete oral care collection: Deep Stain Defense Toothpaste, Rapid Tar-Dissolve Strips, Obsidian Night Serum, and Sonic Brush.',
          canonicalPath: '/shop',
          ogType: 'website',
        });
        break;

      case 'blog':
        updatePageSEO({
          title: 'Smoker Oral Science & Lifestyle Journal | AKHAI Archives',
          description:
            'Clinical whitepapers, RDA testing data, tobacco tar biochemistry, and cigar lounge etiquette by cosmetic dental authorities.',
          canonicalPath: '/blog',
          ogType: 'website',
        });
        break;

      case 'blog-detail':
        if (selectedBlogArticle) {
          updatePageSEO({
            title: `${selectedBlogArticle.title} | AKHAI Journal`,
            description: selectedBlogArticle.excerpt,
            canonicalPath: `/blog/${selectedBlogArticle.slug}`,
            ogType: 'article',
            jsonLd: {
              '@type': 'BlogPosting',
              headline: selectedBlogArticle.title,
              description: selectedBlogArticle.excerpt,
              datePublished: '2026-09-14',
              author: {
                '@type': 'Person',
                name: selectedBlogArticle.author.name,
                jobTitle: selectedBlogArticle.author.role,
              },
            },
          });
        }
        break;

      case 'contact':
        updatePageSEO({
          title: 'Concierge & Client Services | AKHAI Oral Luxury',
          description:
            'Connect with AKHAI concierge for order status, international DHL dispatch, clinical RDA consultations, and wholesale lounge partnerships.',
          canonicalPath: '/contact',
          ogType: 'website',
        });
        break;

      case 'account':
      case 'track-order':
        updatePageSEO({
          title: 'Client Portal & Live Order Tracker | AKHAI Private Reserve',
          description:
            'Track your AKHAI air shipment live from Geneva formulation clean-suites to your doorstep. Access custom smoker oral care regimens.',
          canonicalPath: '/account',
          ogType: 'website',
        });
        break;
    }
  }, [currentPage, selectedBlogArticle]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Router Navigation Helper
  const navigateTo = (page: PageType, param?: string) => {
    setCurrentPage(page);

    let path = '/';
    if (page === 'shop') {
      path = '/shop';
      if (param) {
        // If param is a concern or search
        setShopInitialConcern(param);
        setShopInitialSearch(param);
      } else {
        setShopInitialConcern('All');
        setShopInitialSearch('');
      }
    } else if (page === 'blog') {
      path = '/blog';
    } else if (page === 'blog-detail' && selectedBlogArticle) {
      path = `/blog/${selectedBlogArticle.slug}`;
    } else if (page === 'contact') {
      path = '/contact';
    } else if (page === 'account') {
      path = '/account';
    } else if (page === 'track-order') {
      path = '/track-order';
    }

    try {
      window.history.pushState(null, '', path);
    } catch {
      // ignore
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add to cart handler
  const handleAddToCart = (
    product: Product,
    variantIndex: number = 0,
    quantity: number = 1,
    engraving?: string
  ) => {
    const variant = product.variants[variantIndex] || product.variants[0];
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.variant.id === variant.id &&
          item.customEngraving === engraving
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      } else {
        return [...prev, { product, variant, quantity, customEngraving: engraving }];
      }
    });

    showToast(`Added ${quantity > 1 ? `${quantity}x ` : ''}${product.name} to your bag`);
  };

  // Instant Buy It Now (Adds item and opens cart / checkout immediately)
  const handleBuyNow = (
    product: Product,
    variantIndex: number = 0,
    quantity: number = 1
  ) => {
    handleAddToCart(product, variantIndex, quantity);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, variantId: string, quantity: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.variant.id === variantId) {
            return { ...item, quantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (productId: string, variantId: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.variant.id === variantId))
    );
  };

  // Checkout Handler: creates a real tracked order, saves to state, clears cart, and opens tracking dashboard
  const handleCheckout = () => {
    if (cart.length === 0) return;

    const newOrderNum = `AKH-${Math.floor(10000 + Math.random() * 90000)}`;
    const subtotal = cart.reduce((sum, item) => sum + item.variant.price * item.quantity, 0);
    const discount = user?.tier === 'VIP Gold Reserve' ? subtotal * 0.15 : 0;
    const total = subtotal - discount;

    const newOrder: Order = {
      id: 'ord-' + Date.now(),
      orderNumber: newOrderNum,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      status: 'Processing',
      carrier: 'DHL Express Priority (Air Cargo)',
      trackingNumber: `DHL-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(
        1000 + Math.random() * 9000
      )}-US`,
      estimatedDelivery: 'In 2 Business Days',
      items: cart.map((item) => ({
        productId: item.product.id,
        productName: item.product.name,
        variantName: item.variant.name,
        quantity: item.quantity,
        price: item.variant.price,
      })),
      subtotal,
      shipping: 0,
      discount,
      total,
      shippingAddress: {
        fullName: user?.name || 'Executive Client',
        street: user?.savedAddresses[0]?.street || '740 Park Avenue, Penthouse B',
        city: user?.savedAddresses[0]?.city || 'New York',
        state: user?.savedAddresses[0]?.state || 'NY',
        zipCode: user?.savedAddresses[0]?.zip || '10021',
        country: user?.savedAddresses[0]?.country || 'United States',
      },
      trackingSteps: [
        {
          title: 'Order Confirmed & 256-Bit Encrypted Authorization',
          description:
            'Payment verified and order transmitted to Geneva / Manhattan formulation suites.',
          location: 'AKHAI Global Node (New York, NY)',
          timestamp: 'Just Now',
          status: 'completed',
        },
        {
          title: 'Laboratory Formulation Vault Pick',
          description:
            'Fresh batch vacuum packed in dark obsidian canisters with embossed gold seal.',
          location: 'Formulation Suite Vault',
          timestamp: 'Estimated within 3 hours',
          status: 'current',
        },
        {
          title: 'Vault RDA 58 Quality Inspection',
          description: 'Abrasive rating verified safe. Complimentary tongue scraper enclosed.',
          location: 'Quality Assurance Lab',
          timestamp: 'Pending',
          status: 'pending',
        },
        {
          title: 'Carrier Hand-off (DHL Express Priority Air)',
          description: 'Awaiting scheduled courier pickup.',
          location: 'JFK Air Logistics Hub',
          timestamp: 'Pending',
          status: 'pending',
        },
      ],
    };

    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
    setIsCartOpen(false);

    showToast(`Order #${newOrderNum} placed! Tracking is now live.`);
    navigateTo('track-order');
  };

  const handleSelectBlogArticle = (article: BlogArticle) => {
    setSelectedBlogArticle(article);
    navigateTo('blog-detail');
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e5e7eb] flex flex-col selection:bg-[#d4af37] selection:text-black">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#141624] border border-[#d4af37] text-white px-5 py-3.5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.9)] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5">
          <div className="w-6 h-6 rounded-full bg-[#d4af37] text-black flex items-center justify-center font-bold">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span className="text-xs font-semibold">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-zinc-400 hover:text-white ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Global Navbar */}
      <Navbar
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        currentPage={currentPage}
        onNavigate={navigateTo}
        onSearch={(query) => {
          setShopInitialSearch(query);
          navigateTo('shop', query);
        }}
        currentUser={user}
      />

      {/* Multi-Page Routed Views */}
      <main className="flex-1">
        {/* VIEW 1: HOME PAGE */}
        {currentPage === 'home' && (
          <>
            <HeroSection
              onShopNow={() => navigateTo('shop')}
              onExploreScience={() => {
                const el = document.getElementById('science');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <ExploreCategories
              onSelectCategory={(catName) => {
                navigateTo('shop', catName);
              }}
            />

            <ShopByConcern
              products={PRODUCTS}
              selectedConcern={selectedConcern}
              onSelectConcern={(concern) => setSelectedConcern(concern)}
              onAddToCart={(p) => handleAddToCart(p, 0, 1)}
              onQuickView={(product) => setQuickViewProduct(product)}
              onViewCollection={() => navigateTo('shop')}
            />

            <ClinicalProofSection />

            <OralCareEssentials
              products={PRODUCTS}
              onAddToCart={(p) => handleAddToCart(p, 0, 1)}
              onQuickView={(product) => setQuickViewProduct(product)}
            />

            <BeforeAfterSection />

            <RealPeopleUGC
              onSelectProduct={(name) => {
                const found = PRODUCTS.find((p) => p.name.includes(name) || name.includes(p.name));
                if (found) {
                  setQuickViewProduct(found);
                } else {
                  navigateTo('shop');
                }
              }}
            />

            <ReviewsSection />
          </>
        )}

        {/* VIEW 2: SHOP ALL PRODUCTS PAGE (Matching User Reference Image Design) */}
        {currentPage === 'shop' && (
          <ShopAllPage
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onQuickView={(product) => setQuickViewProduct(product)}
            initialConcern={shopInitialConcern}
            initialSearch={shopInitialSearch}
          />
        )}

        {/* VIEW 3: SMOKER ORAL JOURNAL & BLOG */}
        {currentPage === 'blog' && (
          <BlogPage
            onSelectArticle={handleSelectBlogArticle}
            onNavigateToShop={() => navigateTo('shop')}
          />
        )}

        {/* VIEW 4: BLOG ARTICLE DETAIL READER */}
        {currentPage === 'blog-detail' && selectedBlogArticle && (
          <BlogDetailPage
            article={selectedBlogArticle}
            onBack={() => navigateTo('blog')}
            onAddToCart={(p) => handleAddToCart(p, 0, 1)}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {/* VIEW 5: CONTACT US & CONCIERGE DISPATCH */}
        {currentPage === 'contact' && <ContactPage />}

        {/* VIEW 6 & 7: CLIENT LOGIN & REAL-TIME ORDER TRACKER */}
        {(currentPage === 'account' || currentPage === 'track-order') && (
          <AccountPage
            user={user}
            onLogin={(u) => {
              setUser(u);
              showToast(`Welcome, ${u.name}`);
            }}
            onLogout={() => {
              setUser(null);
              showToast('Signed out of executive portal');
            }}
            orders={orders}
            onNavigateToShop={() => navigateTo('shop')}
            initialActiveTab={currentPage === 'track-order' ? 'orders' : 'orders'}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Quick View Product Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, v, eng) => handleAddToCart(p, v, 1, eng)}
      />
    </div>
  );
}
