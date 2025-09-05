import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

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
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'The Accessory Center - Premium Car Accessories',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Accessory Center Muzaffarnagar - Premium Car Accessories',
    description: 'Transform your ride with premium car accessories in Muzaffarnagar. Expert installation, quality products, and exceptional service.',
    images: ['/logo.jpg'],
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
        <link rel="apple-touch-icon" href="/logo.jpg" />
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Accessory Center" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gray-900 text-white">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
