import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/account',
        '/account/profile',
        '/account/orders',
        '/account/settings',
        '/dashboard/auth',
        '/dashboard/auth/login',
        '/dashboard/auth/register',
        '/privacy',
        '/terms',
        '/dashboard',
        '/cookie-policy',
        '/checkout',
        '/thank-you',
      ],
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
