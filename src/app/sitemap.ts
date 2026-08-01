import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const paths = ['/', '/about', '/company', '/business-units', '/smart-communities', '/services', '/services/green-energy', '/services/ict', '/services/security', '/services/engineering', '/projects', '/industries', '/clients', '/careers', '/news', '/downloads', '/request-quote', '/request-consultation', '/contact', '/search'];
  return paths.map((url) => ({ url: `${base}${url}` }));
}
