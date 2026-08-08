import type { MetadataRoute } from 'next';
import { articles } from '@/data/articles';
import { projects } from '@/data/projects';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    ['/', 1], ['/company', 0.9], ['/business-units', 0.9], ['/smart-communities', 0.9],
    ['/services', 0.9], ['/services/green-energy', 0.9], ['/services/ict', 0.9], ['/services/security', 0.9], ['/services/engineering', 0.9],
    ['/projects', 0.8], ['/industries', 0.8], ['/hse-quality', 0.7], ['/careers', 0.6], ['/news', 0.7], ['/downloads', 0.5], ['/contact', 0.8], ['/request-quote', 0.8],
  ] as const;

  return [
    ...staticRoutes.map(([path, priority]) => ({ url: absoluteUrl(path), lastModified: new Date(), changeFrequency: 'monthly' as const, priority })),
    ...projects.map((project) => ({ url: absoluteUrl(`/projects/${project.slug}`), lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.7 })),
    ...articles.map((article) => ({ url: absoluteUrl(`/news/${article.slug}`), lastModified: new Date(article.published), changeFrequency: 'yearly' as const, priority: 0.6 })),
  ];
}
