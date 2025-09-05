// SEO Configuration and utilities
export const seoConfig = {
  siteName: 'The Accessory Center Muzaffarnagar',
  siteUrl: 'https://theaccessorycentermzn.in',
  defaultTitle: 'The Accessory Center Muzaffarnagar - Premium Car Accessories & Modifications',
  defaultDescription: 'Transform your ride with premium car accessories in Muzaffarnagar. Expert installation, quality products, and exceptional service. Shop speakers, headlights, horns, LED lights, and complete car customization services.',
  defaultKeywords: [
    'car accessories muzaffarnagar',
    'automotive parts muzaffarnagar',
    'car modifications muzaffarnagar',
    'car speakers muzaffarnagar',
    'headlights muzaffarnagar',
    'car horns muzaffarnagar',
    'LED lights muzaffarnagar',
    'door visor muzaffarnagar',
    'bass tube muzaffarnagar',
    'ambient light muzaffarnagar',
    'wheel caps muzaffarnagar',
    'steering cover muzaffarnagar',
    'bumper guard muzaffarnagar',
    'seat covers muzaffarnagar',
    'body cover muzaffarnagar',
    'car coating muzaffarnagar',
    'car customization muzaffarnagar',
    'automotive services muzaffarnagar',
    'car accessories near me',
    'auto parts store muzaffarnagar'
  ],
  social: {
    twitter: '@accessorycentermzn',
    facebook: 'https://www.facebook.com/accessorycentermzn',
    instagram: 'https://www.instagram.com/accessorycentermzn',
    linkedin: 'https://www.linkedin.com/company/accessorycentermzn'
  },
  contact: {
    phone: '(555) 123-4567',
    email: 'info@theaccessorycentermzn.in',
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
