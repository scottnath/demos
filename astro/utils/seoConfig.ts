/**
 * Default SEO configuration for scottnath/demos.
 */
export const seoConfig = {
  baseURL: 'https://scottnath.github.io/demos',
  description: 'Demos and experiments from scottnath, built with Astro + Storybook and @scottnath/devx.',
  type: 'website' as const,
  image: {
    url: '/favicon.svg',
    alt: 'scottnath/demos',
    width: 500,
    height: 500,
  },
  siteName: 'scottnath/demos',
  twitter: {
    card: 'summary' as const,
  },
};

/** Absolute URL for an OG image path (`public/…`, `/…`, or full URL). */
export function resolveOgImage(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const pathname = path.replace(/^public\//, '/').replace(/^(?!\/)/, '/');
  return `${seoConfig.baseURL.replace(/\/$/, '')}${pathname}`;
}
