import { MetadataRoute } from 'next';
import projectList from '../data/projects.json';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectsEntries: MetadataRoute.Sitemap = projectList.map(
    ({ slug }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    })
  );
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...projectsEntries,
  ];
}
