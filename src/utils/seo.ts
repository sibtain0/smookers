/**
 * SEO & Structured Data Utility for AKHAI Luxury Smoker Oral Care
 * Adheres strictly to the applet-seo guidelines
 */

interface SEOConfig {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'product';
  jsonLd?: Record<string, any> | Record<string, any>[];
}

export function updatePageSEO({
  title,
  description,
  canonicalPath = '/',
  ogType = 'website',
  jsonLd,
}: SEOConfig): void {
  // 1. Page Title
  document.title = title;

  // 2. Standard Meta Description
  let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;

  // 3. OpenGraph Tags
  const updateMetaProperty = (property: string, content: string) => {
    let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.content = content;
  };

  updateMetaProperty('og:title', title);
  updateMetaProperty('og:description', description);
  updateMetaProperty('og:type', ogType);
  updateMetaProperty('og:site_name', 'AKHAI Smokers Oral Care');

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://akhaioralcare.com';
  updateMetaProperty('og:url', `${origin}${canonicalPath}`);

  // 4. Twitter Cards
  const updateMetaName = (name: string, content: string) => {
    let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.name = name;
      document.head.appendChild(el);
    }
    el.content = content;
  };

  updateMetaName('twitter:card', 'summary_large_image');
  updateMetaName('twitter:title', title);
  updateMetaName('twitter:description', description);

  // 5. Canonical Link
  let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = `${origin}${canonicalPath}`;

  // 6. Schema.org JSON-LD structured data
  let scriptTag = document.getElementById('akhai-seo-jsonld') as HTMLScriptElement | null;
  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.id = 'akhai-seo-jsonld';
    scriptTag.type = 'application/ld+json';
    document.head.appendChild(scriptTag);
  }

  // Base Organization & Brand Schema
  const defaultSchemas: Record<string, any>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AKHAI Smokers Oral Care',
      url: origin,
      logo: `${origin}/favicon.ico`,
      description: 'Bold, luxury oral care engineered for modern lifestyle choices. Dark metallic packaging, embossed gold accents, and advanced smoker stain defense.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-800-420-2542',
        contactType: 'customer service',
        availableLanguage: 'English',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'AKHAI Smokers Oral Care',
      url: origin,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${origin}/shop?search={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ];

  const finalSchemas = jsonLd
    ? Array.isArray(jsonLd)
      ? [...defaultSchemas, ...jsonLd]
      : [...defaultSchemas, jsonLd]
    : defaultSchemas;

  scriptTag.textContent = JSON.stringify(finalSchemas);
}
