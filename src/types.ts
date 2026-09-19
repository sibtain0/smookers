export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  savings?: string;
  size?: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  concern: string;
  rating: number;
  reviewCount: number;
  badge?: 'NEW LAUNCH' | 'BESTSELLER' | 'CLINICALLY PROVEN' | 'EXECUTIVE PICK';
  description: string;
  keyBenefits: string[];
  metallicFinish: 'Brushed Gunmetal' | 'Obsidian Onyx' | 'Titanium Slate' | 'Charcoal Carbon';
  goldAccent: string;
  volume: string;
  variants: ProductVariant[];
  selectedVariantIndex?: number;
  features: {
    tarRemovalRate: string;
    enamelSafeRDA: string;
    nicotineNeutralize: string;
  };
  ingredientsHighlight: string[];
  inStock: boolean;
}

export interface CustomerReview {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  product: string;
  timeAgo: string;
  verified: boolean;
  userType: 'Cigar Connoisseur' | 'Espresso & Vape User' | 'Daily Smoker' | 'Social Smoker';
}

export interface VideoTestimonial {
  id: string;
  creator: string;
  handle: string;
  userProfile: string;
  headline: string;
  quote: string;
  productName: string;
  productPrice: number;
  productOrigPrice: number;
  stars: number;
  verified: boolean;
  videoDuration: string;
  accentColor: string;
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
  customEngraving?: string;
}

export type PageType = 'home' | 'shop' | 'blog' | 'blog-detail' | 'contact' | 'account' | 'track-order';

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string[];
  category: 'Clinical Science' | 'Lifestyle & Cigars' | 'Enamel Defense' | 'Daily Protocol';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime: string;
  publishedDate: string;
  coverImage: string;
  keyTakeaways: string[];
  recommendedProductIds: string[];
  tags: string[];
}

export interface TrackingStep {
  title: string;
  description: string;
  location: string;
  timestamp: string;
  status: 'completed' | 'current' | 'pending';
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: 'Processing' | 'In Transit' | 'Out for Delivery' | 'Delivered';
  carrier: string;
  trackingNumber: string;
  estimatedDelivery: string;
  items: {
    productId: string;
    productName: string;
    variantName: string;
    quantity: number;
    price: number;
  }[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  shippingAddress: {
    fullName: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  trackingSteps: TrackingStep[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  tier: 'VIP Gold Reserve' | 'Executive Member';
  joinedDate: string;
  phone?: string;
  smokerProfile: {
    tobaccoHabit: 'Cigars' | 'Cigarettes' | 'Vape & Tobacco' | 'Pipe';
    frequency: 'Daily' | 'Social / Weekends' | 'Occasional';
    espressoLover: boolean;
    primaryGoal: 'Tar Lift' | 'Breath Neutralization' | 'Enamel Remineralization';
  };
  savedAddresses: {
    id: string;
    isDefault: boolean;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  }[];
}

