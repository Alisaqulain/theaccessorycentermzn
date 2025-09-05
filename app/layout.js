import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CoolEffects from './components/CoolEffects'
import ModernAlert from './components/ModernAlert'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'The Accessory Center Muzaffarnagar - Premium Car Accessories & Modifications',
    template: '%s | The Accessory Center MZN'
  },
  description: 'Transform your ride with premium car accessories in Muzaffarnagar. Expert installation, quality products, and exceptional service. Shop speakers, headlights, horns, LED lights, and complete car customization services.',
  keywords: [
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
  authors: [{ name: 'The Accessory Center' }],
  creator: 'The Accessory Center',
  publisher: 'The Accessory Center',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://theaccessorycentermzn.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'The Accessory Center Muzaffarnagar - Premium Car Accessories & Modifications',
    description: 'Transform your ride with premium car accessories in Muzaffarnagar. Expert installation, quality products, and exceptional service. Shop speakers, headlights, horns, LED lights, and complete car customization services.',
    url: 'https://theaccessorycentermzn.in',
    siteName: 'The Accessory Center',
    images: [
      {
        url: '/car.png',
        width: 1200,
        height: 630,
        alt: 'The Accessory Center - Premium Car Accessories Logo',
      },
      {
        url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
        width: 1200,
        height: 630,
        alt: 'Premium Car Accessories Showcase - The Accessory Center',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Accessory Center Muzaffarnagar - Premium Car Accessories',
    description: 'Transform your ride with premium car accessories in Muzaffarnagar. Expert installation, quality products, and exceptional service.',
    images: ['/car.png'],
    creator: '@accessorycenter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
        {/* Google Search Console */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        {/* Bing Webmaster Tools */}
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        {/* Yandex Webmaster */}
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Accessory Center" />
        <link rel="apple-touch-icon" href="/car.png" />
        <link rel="icon" href="/car.png" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/car.png" color="#dc2626" />
        <link rel="shortcut icon" href="/car.png" />
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Accessory Center" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoPartsStore",
              "name": "The Accessory Center",
              "description": "Premium car accessories and automotive parts store in Muzaffarnagar. Expert installation, quality products, and exceptional service since 2010.",
              "url": "https://theaccessorycentermzn.in",
              "logo": "https://theaccessorycentermzn.in/car.png",
              "image": [
                "https://theaccessorycentermzn.in/car.png",
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
              ],
              "telephone": ["+917456886910", "+919045030110"],
              "email": "shazizaidi52058@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sadaat Hostel, Arya Samaj Road",
                "addressLocality": "Muzaffarnagar",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "251001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "29.4709",
                "longitude": "77.7033"
              },
              "openingHours": "Mo-Sa 09:00-20:00",
              "priceRange": "₹199-₹9999",
              "paymentAccepted": "Cash, Credit Card, UPI, Net Banking",
              "currenciesAccepted": "INR",
              "foundingDate": "2010",
              "areaServed": {
                "@type": "City",
                "name": "Muzaffarnagar"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "29.4709",
                  "longitude": "77.7033"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Car Accessories",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Car Horns",
                      "description": "Premium automotive horns for better safety"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Steering Covers",
                      "description": "Comfortable and stylish steering wheel protection"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Body Covers",
                      "description": "All-weather protection for your vehicle"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/theaccessorycenter",
                "https://www.instagram.com/theaccessorycenter",
                "https://www.twitter.com/accessorycenter"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ModernAlert />
        <CoolEffects />
        <Navbar />
        <main className="min-h-screen bg-gray-900 text-white">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
