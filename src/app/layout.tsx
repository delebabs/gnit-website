import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { absoluteUrl, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: 'GNIT | Engineering Critical Infrastructure for Africa', template: '%s | GNIT' },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: 'Engineering and infrastructure services',
  keywords: ['EPC contractor Nigeria', 'solar EPC Nigeria', 'ICT infrastructure Nigeria', 'electronic security Nigeria', 'engineering consultancy Abuja', 'GNIT'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'GNIT | Engineering Critical Infrastructure for Africa',
    description: siteConfig.description,
    images: [{ url: siteConfig.socialImage, width: 1400, height: 668, alt: 'GNIT engineering critical infrastructure' }],
  },
  twitter: { card: 'summary_large_image', title: 'GNIT | Engineering Critical Infrastructure for Africa', description: siteConfig.description, images: [siteConfig.socialImage] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  logo: absoluteUrl('/brand/gnit-a2-horizontal.png'),
  image: absoluteUrl(siteConfig.socialImage),
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: { '@type': 'PostalAddress', addressLocality: 'Abuja', addressRegion: 'FCT', addressCountry: 'NG' },
  areaServed: { '@type': 'Country', name: 'Nigeria' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
