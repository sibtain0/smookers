import { Product, CustomerReview, VideoTestimonial } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'akhai-smoker-core-paste',
    name: "AKHAI Smoker's Deep Stain Defense Toothpaste",
    tagline: 'Engineered for stubborn tar, nicotine & espresso stains with Enamel-Safe n-HAp',
    category: 'Toothpaste',
    concern: 'Smoker Tar & Nicotine',
    rating: 4.89,
    reviewCount: 3412,
    badge: 'BESTSELLER',
    description: 'A revolutionary oral formulation developed for smokers and high-intensity lifestyles. Combines micro-refined obsidian charcoal, medical-grade Nano-Hydroxyapatite (n-HAp), and active zinc to dissolve polymerized tobacco resins while remineralizing micro-fissures in enamel.',
    keyBenefits: [
      'Removes 98.4% of tar and nicotine surface stains within 14 days',
      'Ultra-gentle RDA of 58 (industry average is 120+) prevents enamel wear',
      'Zinc-Ion matrix neutralizes volatile sulfur compounds from smoke instantly',
      'Refined Arctic Peppermint & Siberian Fir delivers 8-hour freshness'
    ],
    metallicFinish: 'Brushed Gunmetal',
    goldAccent: 'Embossed 24K Gold Foil Insignia & Brushed Gold Cap',
    volume: '100g / 3.5 oz',
    variants: [
      { id: 'v1', name: 'Pack of 1 (100g Tube)', price: 18, originalPrice: 24, savings: '25% OFF', size: '100g' },
      { id: 'v2', name: 'Duo Pack (2 x 100g) - Most Popular', price: 32, originalPrice: 48, savings: '33% OFF', size: '200g' },
      { id: 'v3', name: 'Executive 3-Pack + Travel Armor Case', price: 44, originalPrice: 72, savings: '39% OFF', size: '300g' },
    ],
    features: {
      tarRemovalRate: '98.4% within 14 days',
      enamelSafeRDA: 'RDA 58 (Gentle Low Abrasion)',
      nicotineNeutralize: 'Instant 24-hr Vapor Neutralization'
    },
    ingredientsHighlight: ['Medical-Grade Nano-Hydroxyapatite (n-HAp)', 'Activated Obsidian Carbon', 'Zinc Citrate Anti-Odor Complex', 'Organic Xylitol & Menthol Crystals'],
    inStock: true,
  },
  {
    id: 'akhai-nicotine-tar-strips',
    name: 'AKHAI Rapid Tar-Dissolve Whitening Strips',
    tagline: 'Self-dissolving micro-strips calibrated for heavy cigar & cigarette discoloration',
    category: 'Whitening Strips',
    concern: 'Smoker Tar & Nicotine',
    rating: 4.84,
    reviewCount: 1890,
    badge: 'NEW LAUNCH',
    description: 'Precision-contoured strips infused with bio-engineered PAP+ and carbon-trapping polymer. Adheres tightly during driving, work, or social events, dissolving in 15 minutes with zero sensitivity or chemical aftertaste.',
    keyBenefits: [
      'Zero tooth sensitivity guaranteed via potassium nitrate buffer',
      'No messy residue - completely self-dissolving in 15 minutes',
      'Targets stubborn yellow-brown interdental lines between teeth',
      'Compact dark metallic foil travel sachets'
    ],
    metallicFinish: 'Obsidian Onyx',
    goldAccent: 'Gold Foil Border & Stamped Seal',
    volume: 'Pack of 14 Treatments (28 Strips)',
    variants: [
      { id: 's1', name: 'Pack of 14 Treatments', price: 28, originalPrice: 38, savings: '26% OFF', size: '14 Treatments' },
      { id: 's2', name: 'Pack of 28 Treatments (30-Day Intensive)', price: 48, originalPrice: 76, savings: '37% OFF', size: '28 Treatments' },
    ],
    features: {
      tarRemovalRate: '4.8 Shades Whiter in 7 Days',
      enamelSafeRDA: 'Peroxide-Free PAP+ Formulation',
      nicotineNeutralize: 'Dissolves Tobacco Glaze Fast'
    },
    ingredientsHighlight: ['Phthalimidoperoxycaproic Acid (PAP+)', 'Bio-Adhesive Hydrogel', 'Potassium Citrate Desensitizer', 'Spearmint Essential Oil'],
    inStock: true,
  },
  {
    id: 'akhai-obsidian-serum',
    name: 'AKHAI Overnight Tar-Eraser Serum & Enamel Seal',
    tagline: 'Dual-phase optical correction serum that neutralizes yellow stains on contact',
    category: 'Whitening Serum',
    concern: 'Coffee & Wine Stains',
    rating: 4.92,
    reviewCount: 2154,
    badge: 'CLINICALLY PROVEN',
    description: 'Leveraging color-correcting deep violet and gold-toned micro-luminizers, this serum counterbalances warm yellow tones left by smoking and dark espresso. Apply 2 drops onto dry teeth before sleep or before an evening out.',
    keyBenefits: [
      'Instant optical brightening within 60 seconds of brush application',
      'Seals open dentinal tubules to block fresh nicotine deposits',
      'Rich amber mint flavor engineered to cleanse smoker breath',
      'Dark metallic obsidian glass bottle with gold calibrated pipette'
    ],
    metallicFinish: 'Titanium Slate',
    goldAccent: 'Polished 24K Gold Dropper & Embossed Logo',
    volume: '30ml / 1.0 fl oz',
    variants: [
      { id: 'sr1', name: 'Single 30ml Bottle', price: 26, originalPrice: 35, savings: '25% OFF', size: '30ml' },
      { id: 'sr2', name: 'Duo Serum Pack (60ml Total)', price: 42, originalPrice: 70, savings: '40% OFF', size: '60ml' },
    ],
    features: {
      tarRemovalRate: 'Immediate Optical Color Balance',
      enamelSafeRDA: 'RDA 0 (Non-Abrasive Liquid)',
      nicotineNeutralize: 'Anti-Deposition Enamel Shield'
    },
    ingredientsHighlight: ['Chromophore V34 Color Matrix', 'Micro-Encapsulated Bio-Gold', 'Hyaluronic Acid Gum Hydrator', 'Enzyme Lipase & Amylase'],
    inStock: true,
  },
  {
    id: 'akhai-sonic-stealth',
    name: 'AKHAI Stealth Carbon Sonic Toothbrush',
    tagline: '48,000 VPM acoustic motor with charcoal-infused micro-cross bristles',
    category: 'Electric Toothbrush',
    concern: 'Enamel Micro-Erosion',
    rating: 4.88,
    reviewCount: 940,
    badge: 'EXECUTIVE PICK',
    description: 'Industrial-grade sonic precision encased in an aerospace dark titanium alloy body. Designed specifically to dislodge heavy tar particles from hard-to-reach posterior molars and lingual enamel.',
    keyBenefits: [
      '48,000 acoustic vibrations per minute for deep dynamic fluid cleaning',
      '90-day battery life on a single magnetic USB-C quick charge',
      '5 Custom Modes: Smoker Stain Clean, Polishing, Sensitive, Gum Revive, White',
      'Includes 2 Charcoal-infused Diamond brush heads + Travel Armored Case'
    ],
    metallicFinish: 'Brushed Gunmetal',
    goldAccent: 'Embossed Gold Crown Ring & Magnetic Stand',
    volume: '1 Sonic Handle + 2 Heads + Dock',
    variants: [
      { id: 'st1', name: 'Stealth Carbon Black + 2 Heads', price: 68, originalPrice: 95, savings: '28% OFF', size: 'Full Kit' },
      { id: 'st2', name: 'Stealth Carbon + 4 Replacement Heads', price: 82, originalPrice: 115, savings: '29% OFF', size: 'Extended Kit' },
    ],
    features: {
      tarRemovalRate: '7x Plaque & Tar Removal vs Manual',
      enamelSafeRDA: 'Smart Pressure Sensor Alerts',
      nicotineNeutralize: 'Interdental Jet Cavitation'
    },
    ingredientsHighlight: ['Japanese Binchotan Charcoal Bristles', 'Titanium Alloy Drive Core', 'IPX8 Waterproof Submersible'],
    inStock: true,
  },
  {
    id: 'akhai-breath-lock-mist',
    name: 'AKHAI Smoker’s Breath-Lock Sublingual Mist',
    tagline: 'Instant molecular neutralization of tobacco smoke, vape, and stale odor',
    category: 'Mouth Freshener',
    concern: 'Smoker Breath & Halitosis',
    rating: 4.79,
    reviewCount: 1240,
    badge: 'NEW LAUNCH',
    description: 'A discreet pocket-sized dark metallic aluminum canister delivering over 180 fine micro-sprays of our proprietary Chemo-Sensory Odor Binder. Destroys smoke molecules rather than masking them with sugar.',
    keyBenefits: [
      'Neutralizes tar and nicotine breath within 3 seconds',
      'Pocket-sized dark brushed aluminum atomizer with gold knurled twist cap',
      'Zero alcohol, zero stinging - moisturizes dry smoker mouth',
      'Crisp Black Cardamom, Japanese Yuzu & Glacial Mint'
    ],
    metallicFinish: 'Obsidian Onyx',
    goldAccent: 'Gold Knurled Collar & Gold Stamped Logo',
    volume: '15ml Pocket Spray (180+ Sprays)',
    variants: [
      { id: 'bm1', name: 'Single Pocket Atomizer (15ml)', price: 14, originalPrice: 18, savings: '22% OFF', size: '15ml' },
      { id: 'bm2', name: 'Trio Pocket Pack (Home, Car, Desk)', price: 32, originalPrice: 54, savings: '40% OFF', size: '3 x 15ml' },
    ],
    features: {
      tarRemovalRate: 'Instant Odor Complex Disruption',
      enamelSafeRDA: 'pH Neutral (7.2) Saliva Balancing',
      nicotineNeutralize: '100% Volatile Sulfur Elimination'
    },
    ingredientsHighlight: ['Zinc Ricinoleate Odor Neutralizer', 'Chlorophyllin Extract', 'Cold-Pressed Cardamom', 'Organic Aloe Vera'],
    inStock: true,
  },
  {
    id: 'akhai-executive-bundle',
    name: 'AKHAI The Executive Smoker’s Arsenal',
    tagline: 'The complete 4-step professional protocol for smokers who demand pristine teeth',
    category: 'Value Pack',
    concern: 'Smoker Tar & Nicotine',
    rating: 4.96,
    reviewCount: 810,
    badge: 'BESTSELLER',
    description: 'The definitive daily regimen created for high-performing modern lifestyle tastemakers. Includes the Stain Defense Toothpaste, Rapid Whitening Strips, Overnight Serum, and Breath-Lock Mist in an embossed gold collector presentation box.',
    keyBenefits: [
      'Comprehensive 24/7 protection against staining and smoker breath',
      'Includes luxury gift presentation box with gold-foil interior',
      'Save 45% compared to purchasing items individually',
      'Free Complimentary Gold-Engraved Tongue Scraper included'
    ],
    metallicFinish: 'Brushed Gunmetal',
    goldAccent: 'Double Embossed 24K Gold Collector Seal',
    volume: 'Full 4-Piece System',
    variants: [
      { id: 'ex1', name: 'Complete 4-Piece Arsenal', price: 74, originalPrice: 135, savings: '45% OFF', size: 'Full System' },
      { id: 'ex2', name: 'Executive Arsenal + Stealth Sonic Brush', price: 128, originalPrice: 230, savings: '44% OFF', size: 'Master System' },
    ],
    features: {
      tarRemovalRate: 'Complete Enamel Renewal in 14 Days',
      enamelSafeRDA: 'All Formulas RDA < 60',
      nicotineNeutralize: 'Guaranteed 24-Hour Freshness'
    },
    ingredientsHighlight: ['Full Spectrum Nano-Hydroxyapatite', 'PAP+ Whitening System', 'Zinc-Chelated Defense', 'Activated Carbon'],
    inStock: true,
  }
];

export const CONCERNS = [
  { id: 'tar', label: 'Smoker Tar & Nicotine', count: '14 Products', icon: 'Flame' },
  { id: 'coffee', label: 'Coffee & Wine Stains', count: '9 Products', icon: 'Coffee' },
  { id: 'breath', label: 'Smoker Breath & Halitosis', count: '7 Products', icon: 'Wind' },
  { id: 'erosion', label: 'Enamel Micro-Erosion', count: '8 Products', icon: 'Shield' },
  { id: 'gums', label: 'Sensitive Smoker Gums', count: '6 Products', icon: 'HeartPulse' },
];

export const CATEGORIES = [
  { id: 'toothpaste', name: 'Smoker Toothpaste', icon: 'Sparkles', count: '4 Blends' },
  { id: 'strips', name: 'Tar-Eraser Strips', icon: 'Layers', count: 'Fast Dissolve' },
  { id: 'brush', name: 'Stealth Sonic Brush', icon: 'Zap', count: '48k VPM' },
  { id: 'serum', name: 'Color-Correct Serum', icon: 'Droplets', count: 'Overnight' },
  { id: 'mist', name: 'Breath-Lock Mist', icon: 'Wind', count: 'Instant Fresh' },
  { id: 'arsenal', name: 'Executive Arsenals', icon: 'Crown', count: 'Bundles' },
];

export const REVIEWS: CustomerReview[] = [
  {
    id: 'r1',
    name: 'Julian Vance',
    city: 'New York, NY',
    rating: 5,
    comment: 'I smoke cigars 3-4 nights a week and drink black cold brew all morning. Traditional whitening toothpastes ruined my enamel sensitivity. AKHAI removed 3 years of dark tar ring stains in 10 days flat. The dark metallic packaging in my bathroom looks like an executive fragrance.',
    product: "AKHAI Smoker's Deep Stain Defense Toothpaste",
    timeAgo: '2 days ago',
    verified: true,
    userType: 'Cigar Connoisseur'
  },
  {
    id: 'r2',
    name: 'Soren Lindqvist',
    city: 'London, UK',
    rating: 5,
    comment: 'The gold embossed branding is what caught my eye, but the science behind the nano-hydroxyapatite is genuinely next-level. My dental hygienist actually asked what changed at my last cleaning. No smoker breath, no yellowing, zero pain.',
    product: 'AKHAI Rapid Tar-Dissolve Whitening Strips',
    timeAgo: '4 days ago',
    verified: true,
    userType: 'Daily Smoker'
  },
  {
    id: 'r3',
    name: 'Elena Rostova',
    city: 'Zurich, Switzerland',
    rating: 5,
    comment: 'The Overnight Serum is witchcraft. Applied two drops before bed after a night out with red wine and cigarettes. Woke up with teeth two shades whiter and completely neutral breath. Worth every single penny.',
    product: 'AKHAI Overnight Tar-Eraser Serum & Enamel Seal',
    timeAgo: '1 week ago',
    verified: true,
    userType: 'Espresso & Vape User'
  },
  {
    id: 'r4',
    name: 'Marcus K. Sterling',
    city: 'Dubai, UAE',
    rating: 5,
    comment: 'The Executive Arsenal is the single best grooming upgrade I made this year. The brushed gunmetal tubes and gold accents command respect on my vanity counter, and the performance backs up every claim.',
    product: 'AKHAI The Executive Smoker’s Arsenal',
    timeAgo: '9 days ago',
    verified: true,
    userType: 'Social Smoker'
  }
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'v1',
    creator: 'Alex Mercer',
    handle: '@mercer_lifestyle',
    userProfile: 'Creative Director & Cigar Enthusiast',
    headline: '"Smoked for 8 years. Look at my teeth now."',
    quote: 'I refused to stop enjoying my Habano cigars, but hated the yellow residue. AKHAI cleared the back enamel stains that 4 other brands could not touch.',
    productName: "AKHAI Smoker's Deep Stain Paste",
    productPrice: 18,
    productOrigPrice: 24,
    stars: 5,
    verified: true,
    videoDuration: '0:42',
    accentColor: '#d4af37'
  },
  {
    id: 'v2',
    creator: 'Damon Castillo',
    handle: '@damon_arch',
    userProfile: 'Architect & Espresso Addict',
    headline: '"The dark metallic tube is art. The formula is science."',
    quote: 'Most toothpastes look like tacky kids paste. AKHAI feels like Tom Ford meets medical dentistry. My breath stays sharp through 12-hour client meetings.',
    productName: 'AKHAI Rapid Tar-Dissolve Strips',
    productPrice: 28,
    productOrigPrice: 38,
    stars: 5,
    verified: true,
    videoDuration: '0:35',
    accentColor: '#d4af37'
  },
  {
    id: 'v3',
    creator: 'Tanya Moreau',
    handle: '@moreau_paris',
    userProfile: 'Fashion Stylist & Social Smoker',
    headline: '"Never going back to ordinary paste."',
    quote: 'The sublingual breath spray fits inside my clutch. One mist and nicotine scent is completely eliminated before entering the venue.',
    productName: 'AKHAI Breath-Lock Mist',
    productPrice: 14,
    productOrigPrice: 18,
    stars: 5,
    verified: true,
    videoDuration: '0:29',
    accentColor: '#d4af37'
  },
  {
    id: 'v4',
    creator: 'Harrison Cole',
    handle: '@harrison_c',
    userProfile: 'Tech Founder & Specialty Coffee Roaster',
    headline: '"Clinically verified RDA of 58 saved my enamel."',
    quote: 'Other whitening brands sand down your teeth with abrasive grit. AKHAI uses nano-hydroxyapatite and dissolved charcoal. Zero tooth sensitivity.',
    productName: 'AKHAI Overnight Tar-Eraser Serum',
    productPrice: 26,
    productOrigPrice: 35,
    stars: 5,
    verified: true,
    videoDuration: '0:48',
    accentColor: '#d4af37'
  }
];

export const PRESS_MENTIONS = [
  { name: 'GQ', quote: '"The first oral brand treating smokers with unapologetic luxury and clinical rigor."' },
  { name: "MEN'S HEALTH", quote: '"A masterclass in non-abrasive stain removal for tobacco and espresso drinkers."' },
  { name: 'ESQUIRE', quote: '"Dark metallic finishes meet genuine bio-chemistry. An essential vanity centerpiece."' },
  { name: 'FORBES', quote: '"Disrupting oral care by tackling the most challenging pigment molecules."' },
  { name: 'DENTAL JOURNAL', quote: '"Remarkable low-RDA performance without sacrificing stain degradation efficacy."' },
  { name: 'HYPEBEAST', quote: '"The sleekest dark metallic grooming essential of the year."' }
];
