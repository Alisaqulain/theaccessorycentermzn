// SEO Configuration and utilities
export const seoConfig = {
  siteName: 'The Accessory Center',
  siteUrl: 'https://theaccessorycenter.com',
  defaultTitle: 'The Accessory Center - Premium Car Accessories & Modifications',
  defaultDescription: 'Transform your ride with premium car accessories, performance parts, and modifications. Expert installation, quality products, and exceptional service.',
  defaultKeywords: [
    'car accessories',
    'automotive parts',
    'car modifications',
    'performance parts',
    'interior accessories',
    'exterior accessories',
    'car electronics',
    'LED headlights',
    'car covers',
    'seat covers',
    'dash cameras',
    'car chargers',
    'brake pads',
    'air filters',
    'exhaust systems',
    'carbon fiber spoilers',
    'car customization',
    'automotive upgrades'
  ],
  social: {
    twitter: '@accessorycenter',
    facebook: 'https://www.facebook.com/accessorycenter',
    instagram: 'https://www.instagram.com/accessorycenter',
    linkedin: 'https://www.linkedin.com/company/accessorycenter'
  },
  contact: {
    phone: '(555) 123-4567',
    email: 'info@accessorycenter.com',
    address: {
      street: 'Sadaat Hostel, Arya Samaj Road',
      city: 'Muzaffarnagar',
      state: 'Uttar Pradesh',
      zip: '251002',
      country: 'IN'
    }
  },
  businessHours: [
    'Mo-Fr 09:00-19:00',
    'Sa 10:00-18:00',
    'Su 12:00-17:00'
  ]
}

// Generate structured data for organization
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    "name": seoConfig.siteName,
    "description": seoConfig.defaultDescription,
    "url": seoConfig.siteUrl,
    "logo": `${seoConfig.siteUrl}/logo.jpg`,
    "image": `${seoConfig.siteUrl}/logo.jpg`,
    "telephone": seoConfig.contact.phone,
    "email": seoConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": seoConfig.contact.address.street,
      "addressLocality": seoConfig.contact.address.city,
      "addressRegion": seoConfig.contact.address.state,
      "postalCode": seoConfig.contact.address.zip,
      "addressCountry": seoConfig.contact.address.country
    },
    "openingHours": seoConfig.businessHours,
    "sameAs": Object.values(seoConfig.social)
  }
}

// Generate structured data for products
export function generateProductSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": `${seoConfig.siteUrl}${product.image}`,
    "brand": {
      "@type": "Brand",
      "name": seoConfig.siteName
    },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": seoConfig.siteName
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviews
    }
  }
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${seoConfig.siteUrl}${crumb.url}`
    }))
  }
}

// Generate FAQ schema
export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// Generate local business schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": seoConfig.siteName,
    "description": seoConfig.defaultDescription,
    "url": seoConfig.siteUrl,
    "telephone": seoConfig.contact.phone,
    "email": seoConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": seoConfig.contact.address.street,
      "addressLocality": seoConfig.contact.address.city,
      "addressRegion": seoConfig.contact.address.state,
      "postalCode": seoConfig.contact.address.zip,
      "addressCountry": seoConfig.contact.address.country
    },
    "openingHours": seoConfig.businessHours,
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "currenciesAccepted": "USD, INR"
  }
}
