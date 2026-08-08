export const siteConfig = {
  name: 'GNIT LTD',
  shortName: 'GNIT',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://gnit-ltd.vercel.app',
  description: 'GNIT LTD delivers integrated EPC, renewable energy, ICT infrastructure, electronic security and smart-community solutions across Nigeria.',
  email: 'info@gnit-ltd.com',
  phone: '+2348059991118',
  address: 'Abuja, Nigeria',
  socialImage: '/images/gnit-reference-hero-clean.png',
} as const;

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}
