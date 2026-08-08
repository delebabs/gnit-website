import type { Metadata } from 'next';
import { absoluteUrl, siteConfig } from '@/lib/site';

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

export function createPageMetadata({ title, description, path, keywords = [], image = siteConfig.socialImage }: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${siteConfig.shortName}`,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: 'en_NG',
      type: 'website',
      images: [{ url: image, width: 1400, height: 668, alt: 'GNIT engineering infrastructure' }],
    },
    twitter: { card: 'summary_large_image', title: `${title} | ${siteConfig.shortName}`, description, images: [image] },
  };
}
