import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Using the domain currently set in your layout.tsx OpenGraph metadata
  const baseUrl = 'https://sakthiispeaks.vercel.app';

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ];
}
