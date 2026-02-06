import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devhubfusionx.com/DevHubFusion-X';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/projects',
    '/services',
    '/strategy',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new URLSearchParams().get('t') ? new Date() : new Date('2026-02-06'), // Use current date for lastmod
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
