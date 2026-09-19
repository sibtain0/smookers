import React, { useState } from 'react';
import {
  User,
  Package,
  Truck,
  CheckCircle,
  Clock,
  MapPin,
  ShieldCheck,
  Search,
  LogOut,
  Sparkles,
  ArrowRight,
  RefreshCw,
  FileText,
  Heart,
  ChevronRight,
  ExternalLink,
  Flame,
  Coffee,
} from 'lucide-react';
import { UserProfile, Order } from '../types';
import { INITIAL_ORDERS, INITIAL_USER } from '../data/orderData';

interface AccountPageProps {
  user: UserProfile | null;
  onLogin: (user: UserProfile) => void;
  onLogout: () => void;
  orders: Order[];
  onNavigateToShop: () => void;
  initialActiveTab?: 'orders' | 'profile' | 'addresses' | 'perks';
}

export const AccountPage: React.FC<AccountPageProps> = ({
  user,
  onLogin,
  onLogout,
  orders,
  onNavigateToShop,
  initialActiveTab = 'orders',
}) => {
  // Login form states
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');

  // Dashboard Tab state
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'addresses' | 'perks'>(initialActiveTab);

  // Order search state
  const [searchOrderNumber, setSearchOrderNumber] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<Order>(orders[0] || INITIAL_ORDERS[0]);

  // Smoker Profile state
  const [smokerHabit, setSmokerHabit] = useState<'Cigars' | 'Cigarettes' | 'Vape & Tobacco' | 'Pipe'>(
    user?.smokerProfile.tobaccoHabit || 'Cigars'
  );
  const [frequency, setFrequency] = useState<'Daily' | 'Social / Weekends' | 'Occasional'>(
    user?.smokerProfile.frequency || 'Daily'
  );
  const [espressoLover, setEspressoLover] = useState(user?.smokerProfile.espressoLover ?? true);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: UserProfile = {
      id: 'usr-' + Date.now(),
      name: nameInput.trim() || emailInput.split('@')[0] || 'Executive Member',
      email: emailInput || 'client@akhaioralcare.com',
      tier: 'VIP Gold Reserve',
      joinedDate: 'September 2026',
      smokerProfile: {
        tobaccoHabit: smokerHabit,
        frequency: frequency,
        espressoLover: espressoLover,
        primaryGoal: 'Tar Lift',
      },
      savedAddresses: [
        {
          id: 'addr-default',
          isDefault: true,
          street: '740 Park Avenue, Suite 12B',
          city: 'New York',
          state: 'NY',
          zip: '10021',
          country: 'United States',
        },
      ],
    };
    onLogin(newUser);
  };

  const handleDemoLogin = () => {
    onLogin(INITIAL_USER);
  };

  const handleTrackSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = searchOrderNumber.trim().toUpperCase().replace('#', '');
    const found = orders.find(
      (o) => o.orderNumber.toUpperCase().includes(cleaned) || o.id.includes(cleaned)
    );
    if (found) {
      setSelectedOrder(found);
    } else {
      alert(`No order found matching "${searchOrderNumber}". Try "#AKH-89241" or "#AKH-77319".`);
    }
  };

  // If NOT Logged In, Render Authentication Screen
  if (!user) {
    return (
      <div className="w-full min-h-screen bg-[#0b0c10] text-[#e0e2ec] py-14 border-b border-zinc-800/80 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4">
          <div className="bg-[#11131c] border border-zinc-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37] block mb-2 font-display">
                AKHAI CLIENT PORTAL
              </span>
              <h1 className="text-2xl font-bold font-display text-white">
                {authMode === 'login' ? 'Executive Sign In' : 'Create Client Account'}
              </h1>
              <p className="text-xs text-zinc-400 mt-1 font-light">
                Access order live tracking, shipment manifests, and custom smoker oral regimens.
              </p>
            </div>

            {/* Quick Demo Login Button (Instant 1-Click access) */}
            <div className="mb-6 p-3.5 rounded-xl bg-gradient-to-r from-[#181b2a] to-[#141622] border border-[#d4af37]/50 text-center">
              <span className="text-[10px] text-[#f5ce68] font-bold uppercase tracking-wider block mb-1">
                Instant Evaluation Demo
              </span>
              <button
                type="button"
                onClick={handleDemoLogin}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-extrabold text-xs uppercase tracking-wider shadow-md hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Sign In as Johnathan Vance (VIP Gold)
              </button>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex-1 h-[1px] bg-zinc-800" />
              <span className="text-[10px] text-zinc-500 font-mono uppercase">Or Enter Details</span>
              <div className="flex-1 h-[1px] bg-zinc-800" />
            </div>

            {/* Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
              {authMode === 'register' && (
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Johnathan Vance"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="w-full bg-[#171926] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-white placeholder-zinc-500 focus:outline-hidden focus:border-[#d4af37]"
                  />
                </div>
              )}

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="j.vance@executive.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-[#171926] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-white placeholder-zinc-500 focus:outline-hidden focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full bg-[#171926] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-white placeholder-zinc-500 focus:outline-hidden focus:border-[#d4af37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-[#d4af37] hover:text-black text-white font-bold uppercase tracking-wider text-xs transition-colors mt-2"
              >
                {authMode === 'login' ? 'Sign In to Portal' : 'Register Account'}
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 text-center">
              <button
                type="button"
                onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                className="text-xs text-zinc-400 hover:text-[#d4af37] transition-colors"
              >
                {authMode === 'login'
                  ? "Don't have an account? Register as VIP Member"
                  : 'Already registered? Sign in here'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // LOGGED IN DASHBOARD
  return (
    <div className="w-full min-h-screen bg-[#0b0c10] text-[#e0e2ec] py-10 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* User Greeting & Status Bar */}
        <div className="bg-gradient-to-r from-[#141624] via-[#1a1d2e] to-[#12141e] border border-zinc-800 rounded-3xl p-6 sm:p-8 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/20 border border-[#d4af37] text-[#f5ce68] flex items-center justify-center font-bold text-xl font-display">
              {user.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Welcome, {user.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#d4af37] text-black font-sans uppercase">
                  {user.tier}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                {user.email} • Client since {user.joinedDate}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-stretch md:self-auto">
            <button
              onClick={onNavigateToShop}
              className="flex-1 md:flex-initial px-4 py-2 rounded-xl bg-[#1d202f] hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-200 transition-colors"
            >
              Order Formulations
            </button>
            <button
              onClick={onLogout}
              className="px-4 py-2 rounded-xl bg-red-950/40 hover:bg-red-900/60 border border-red-800/50 text-xs font-semibold text-red-300 flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-zinc-800 mb-8">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'orders'
                ? 'bg-[#d4af37] text-black shadow-md'
                : 'bg-[#12141d] text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Order Tracking & History</span>
            <span className="px-1.5 py-0.2 rounded-full bg-black/40 text-[10px]">
              {orders.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'profile'
                ? 'bg-[#d4af37] text-black shadow-md'
                : 'bg-[#12141d] text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <Flame className="w-4 h-4 text-[#f5ce68]" />
            <span>Smoker Profile & Routine</span>
          </button>

          <button
            onClick={() => setActiveTab('addresses')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'addresses'
                ? 'bg-[#d4af37] text-black shadow-md'
                : 'bg-[#12141d] text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Saved Addresses</span>
          </button>

          <button
            onClick={() => setActiveTab('perks')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'perks'
                ? 'bg-[#d4af37] text-black shadow-md'
                : 'bg-[#12141d] text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#f5ce68]" />
            <span>VIP Gold Perks</span>
          </button>
        </div>

        {/* ========================================================
            TAB 1: REAL-TIME ORDER TRACKER & SHIPMENTS (CORE FEATURE)
           ======================================================== */}
        {activeTab === 'orders' && (
          <div className="space-y-8">
            {/* Quick Order Look-Up Bar */}
            <div className="bg-[#12141d] border border-zinc-800 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-zinc-300">
                <span className="font-bold text-white block">Track Any Order Instantly</span>
                <span className="text-zinc-500 text-[11px]">
                  Enter order number to view real-time laboratory and air courier progress
                </span>
              </div>
              <form onSubmit={handleTrackSearch} className="flex gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="e.g. AKH-89241"
                    value={searchOrderNumber}
                    onChange={(e) => setSearchOrderNumber(e.target.value)}
                    className="w-full bg-[#181a26] border border-zinc-700/80 rounded-xl pl-9 pr-3 py-2 text-xs text-white uppercase font-mono tracking-wider focus:outline-hidden focus:border-[#d4af37]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#d4af37] text-black text-xs font-bold uppercase tracking-wider rounded-xl hover:opacity-90 transition-opacity shrink-0"
                >
                  Track
                </button>
              </form>
            </div>

            {/* Selected Order Detailed View */}
            {selectedOrder && (
              <div className="bg-[#11131c] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
                {/* Order Header Summary */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-bold font-display text-white">
                        Order #{selectedOrder.orderNumber}
                      </h2>
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold font-mono uppercase ${
                          selectedOrder.status === 'Delivered'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : selectedOrder.status === 'In Transit'
                            ? 'bg-[#d4af37]/20 text-[#f5ce68] border border-[#d4af37]/50 animate-pulse'
                            : 'bg-zinc-800 text-zinc-300'
                        }`}
                      >
                        {selectedOrder.status}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 font-mono">
                      Placed on {selectedOrder.date} • Carrier: {selectedOrder.carrier}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[10px] text-zinc-500 uppercase font-mono block">
                      Estimated Arrival
                    </span>
                    <span className="text-sm font-bold text-[#d4af37] font-mono">
                      {selectedOrder.estimatedDelivery}
                    </span>
                    <span className="text-[11px] text-zinc-400 block font-mono">
                      Waybill: {selectedOrder.trackingNumber}
                    </span>
                  </div>
                </div>

                {/* Visual Step-by-Step Shipment Timeline (Real-Time Tracking Engine) */}
                <div className="my-8">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 font-mono">
                    Live Shipment Timeline & Vault Hand-Off
                  </h3>

                  <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-800">
                    {selectedOrder.trackingSteps.map((step, idx) => (
                      <div key={idx} className="relative group">
                        {/* Milestone Indicator Icon */}
                        <div
                          className={`absolute -left-6 sm:-left-8 top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 ${
                            step.status === 'completed'
                              ? 'bg-emerald-950 border-emerald-500 text-emerald-400'
                              : step.status === 'current'
                              ? 'bg-[#d4af37] border-white text-black animate-bounce'
                              : 'bg-[#151722] border-zinc-700 text-zinc-600'
                          }`}
                        >
                          {step.status === 'completed' ? (
                            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                          ) : step.status === 'current' ? (
                            <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                          ) : (
                            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          )}
                        </div>

                        {/* Content */}
                        <div
                          className={`p-4 rounded-xl border ${
                            step.status === 'current'
                              ? 'bg-[#181a28] border-[#d4af37]/60 shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                              : 'bg-[#13151f] border-zinc-800/80'
                          }`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                            <h4
                              className={`text-xs sm:text-sm font-bold ${
                                step.status === 'current'
                                  ? 'text-[#f5ce68]'
                                  : step.status === 'completed'
                                  ? 'text-white'
                                  : 'text-zinc-500'
                              }`}
                            >
                              {step.title}
                            </h4>
                            <span className="text-[11px] font-mono text-zinc-400">
                              {step.timestamp}
                            </span>
                          </div>

                          <p className="text-xs text-zinc-400 leading-relaxed">
                            {step.description}
                          </p>

                          <span className="text-[10px] text-zinc-500 font-mono mt-2 block flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#d4af37]" />
                            {step.location}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Items in this Order & Address */}
                <div className="pt-6 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Items List */}
                  <div className="md:col-span-7">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-3">
                      Enclosed Formulations ({selectedOrder.items.length})
                    </span>
                    <div className="space-y-2">
                      {selectedOrder.items.map((item, i) => (
                        <div
                          key={i}
                          className="p-3 bg-[#161824] rounded-xl border border-zinc-800 flex items-center justify-between text-xs"
                        >
                          <div>
                            <span className="font-bold text-white block">{item.productName}</span>
                            <span className="text-zinc-400 text-[11px]">
                              {item.variantName} • Qty: {item.quantity}
                            </span>
                          </div>
                          <span className="font-mono font-bold text-[#f5ce68]">
                            ${item.price.toFixed(2)} USD
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping Address & Pricing Breakdown */}
                  <div className="md:col-span-5 bg-[#141622] p-4 rounded-xl border border-zinc-800 text-xs space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                      Delivery Destination
                    </span>
                    <p className="text-zinc-300 font-medium">{selectedOrder.shippingAddress.fullName}</p>
                    <p className="text-zinc-400">
                      {selectedOrder.shippingAddress.street}<br />
                      {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} {selectedOrder.shippingAddress.zipCode}
                    </p>

                    <div className="pt-3 border-t border-zinc-800/80 space-y-1 font-mono text-[11px]">
                      <div className="flex justify-between text-zinc-400">
                        <span>Subtotal</span>
                        <span>${selectedOrder.subtotal.toFixed(2)}</span>
                      </div>
                      {selectedOrder.discount > 0 && (
                        <div className="flex justify-between text-[#d4af37]">
                          <span>VIP Member Discount</span>
                          <span>-${selectedOrder.discount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-zinc-400">
                        <span>Insured Express Shipping</span>
                        <span className="text-emerald-400">FREE</span>
                      </div>
                      <div className="flex justify-between text-white font-bold pt-1 border-t border-zinc-800">
                        <span>Total Paid</span>
                        <span className="text-sm text-[#f5ce68]">
                          ${selectedOrder.total.toFixed(2)} USD
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Past Orders History List */}
            <div className="bg-[#11131c] border border-zinc-800 rounded-3xl p-6 sm:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-display">
                All Orders & Vault Reorders
              </h3>

              <div className="space-y-3">
                {orders.map((ord) => (
                  <div
                    key={ord.id}
                    onClick={() => setSelectedOrder(ord)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      selectedOrder.id === ord.id
                        ? 'bg-[#181a28] border-[#d4af37]'
                        : 'bg-[#141622] border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-xs sm:text-sm font-mono">
                          #{ord.orderNumber}
                        </span>
                        <span className="text-zinc-500">•</span>
                        <span className="text-xs text-zinc-400">{ord.date}</span>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-zinc-800 text-zinc-300">
                          {ord.status}
                        </span>
                      </div>
                      <span className="text-xs text-zinc-400 block mt-1">
                        {ord.items.map((i) => i.productName).join(', ')}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-white text-xs">
                        ${ord.total.toFixed(2)} USD
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedOrder(ord);
                        }}
                        className="px-3 py-1 rounded bg-[#1e2233] hover:bg-[#d4af37] hover:text-black text-xs text-zinc-200 transition-colors"
                      >
                        Track Status
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 2: SMOKER PROFILE & CUSTOM ROUTINE BUILDER
           ======================================================== */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-[#11131c] border border-zinc-800 rounded-3xl p-6 sm:p-8">
              <h3 className="text-base font-bold font-display uppercase tracking-wider text-white mb-1">
                Your Smoker Oral Profile
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Tailor your teeth remineralization schedule according to your specific smoke condensates.
              </p>

              <div className="space-y-5 text-xs">
                {/* Habit Type */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                    Primary Smoke / Vapor Source:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(['Cigars', 'Cigarettes', 'Vape & Tobacco', 'Pipe'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSmokerHabit(type)}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          smokerHabit === type
                            ? 'bg-[#d4af37] text-black font-bold border-[#d4af37]'
                            : 'bg-[#151722] text-zinc-400 border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Frequency */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                    Usage Cadence:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Daily', 'Social / Weekends', 'Occasional'] as const).map((freq) => (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => setFrequency(freq)}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          frequency === freq
                            ? 'bg-[#d4af37] text-black font-bold border-[#d4af37]'
                            : 'bg-[#151722] text-zinc-400 border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Espresso Lover Toggle */}
                <div className="p-4 rounded-xl bg-[#151722] border border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Coffee className="w-5 h-5 text-[#f5ce68]" />
                    <div>
                      <span className="font-bold text-white block">Regular Espresso / Dark Coffee Drinker?</span>
                      <span className="text-[11px] text-zinc-400">
                        Coffee tannins cross-link with tobacco resins, requiring dual-phase PAP+ breakdown.
                      </span>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={espressoLover}
                    onChange={(e) => setEspressoLover(e.target.checked)}
                    className="w-5 h-5 accent-[#d4af37] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Prescribed Routine Output based on choices */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#181a28] to-[#11131c] border border-[#d4af37]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37] block mb-1">
                  CALIBRATED SMOKER PROTOCOL
                </span>
                <h3 className="text-xl font-bold font-display text-white mb-4">
                  Your Personalized 24-Hour Regimen
                </h3>

                <div className="space-y-3.5 text-xs text-zinc-300">
                  <div className="p-3 bg-black/40 rounded-xl border border-zinc-800">
                    <span className="font-bold text-[#f5ce68] block mb-0.5">
                      Morning (08:00 AM) • Enamel Shield
                    </span>
                    <p className="text-[11px] text-zinc-400">
                      Brush 2 minutes with AKHAI Deep Stain Defense (RDA 58) to coat teeth with n-HAp crystals before your first morning espresso or cigar.
                    </p>
                  </div>

                  <div className="p-3 bg-black/40 rounded-xl border border-zinc-800">
                    <span className="font-bold text-[#f5ce68] block mb-0.5">
                      Post-Smoke (Afternoon) • VSC Neutralize
                    </span>
                    <p className="text-[11px] text-zinc-400">
                      Discharge 2 pumps of Breath-Lock Sublingual Mist to destroy sulfur smoke compounds without disturbing your salivary balance.
                    </p>
                  </div>

                  <div className="p-3 bg-black/40 rounded-xl border border-zinc-800">
                    <span className="font-bold text-[#f5ce68] block mb-0.5">
                      Night (10:30 PM) • Overnight Tar Dissolution
                    </span>
                    <p className="text-[11px] text-zinc-400">
                      Apply 2 drops of Obsidian Tar-Eraser Serum. The violet chromophores and active enzymes work for 8 hours undisturbed.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={onNavigateToShop}
                className="mt-6 w-full py-3 rounded-xl bg-[#d4af37] text-black font-extrabold uppercase tracking-wider text-xs shadow-md"
              >
                Reorder Regimen Formulations
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 3: SAVED ADDRESSES
           ======================================================== */}
        {activeTab === 'addresses' && (
          <div className="bg-[#11131c] border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <h3 className="text-base font-bold font-display uppercase tracking-wider text-white mb-4">
              Saved Delivery Vault Addresses
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {user.savedAddresses.map((addr) => (
                <div
                  key={addr.id}
                  className="p-5 rounded-2xl bg-[#151722] border border-zinc-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white font-mono">
                        {addr.isDefault ? 'PRIMARY PENTHOUSE VAULT' : 'SECONDARY RESIDENCE'}
                      </span>
                      {addr.isDefault && (
                        <span className="text-[10px] font-bold text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/30">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-300">
                      {addr.street}<br />
                      {addr.city}, {addr.state} {addr.zip}<br />
                      {addr.country}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800 flex gap-2 text-xs">
                    <button className="text-[#d4af37] hover:underline">Edit Address</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            TAB 4: VIP GOLD RESERVE REWARDS & PRIVILEGES
           ======================================================== */}
        {activeTab === 'perks' && (
          <div className="bg-[#11131c] border border-zinc-800 rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-[#d4af37]" />
              <h3 className="text-lg font-bold font-display text-white">
                VIP Gold Reserve Privileges
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
              <div className="p-5 rounded-2xl bg-[#151722] border border-zinc-800">
                <span className="text-2xl font-bold text-[#f5ce68] font-mono block mb-1">15% OFF</span>
                <span className="font-bold text-white block mb-1">Permanent VIP Order Privilege</span>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Automatic 15% discount applied across all future toothpaste and arsenal orders.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#151722] border border-zinc-800">
                <span className="text-2xl font-bold text-emerald-400 font-mono block mb-1">FREE</span>
                <span className="font-bold text-white block mb-1">Air Express Guaranteed Delivery</span>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Free DHL Express Priority on every order, packaged in our temperature-stabilized dark canisters.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#151722] border border-zinc-800">
                <span className="text-2xl font-bold text-[#d4af37] font-mono block mb-1">24K</span>
                <span className="font-bold text-white block mb-1">Complimentary Engravings</span>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Complimentary monogramming on knurled gold toothpaste caps and precision tongue scrapers.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
