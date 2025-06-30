import type { Metadata } from 'next';
import { siteName } from './siteName';

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Front-end Developer`,
    template: `%s | ${siteName} | Front-end Developer`,
  },
  description:
    'Portfolio of Adam Mornes. Showcasing his work and experience as a front-end developer.',
  applicationName: `${siteName} - Portfolio`,
  authors: [
    {
      name: 'Adam Mornes',
      url: process.env.NEXT_PUBLIC_BASE_URL,
    },
  ],
  creator: 'Adam Mornes',
  publisher: 'Adam Mornes',
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL
    ? new URL(process.env.NEXT_PUBLIC_BASE_URL as string)
    : undefined,
  openGraph: {
    title: `${siteName} | Front-end Developer`,
    description:
      'Portfolio of Adam Mornes. Showcasing his work and experience as a front-end developer.',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: `${siteName} - Portfolio`,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'adam',
    'mornes',
    'adam mornes',
    'portfolio',
    'front-end',
    'front end',
    'front',
    'end',
    'ux',
    'ui',
    'web',
    'mobile',
    'development',
    'response development',
    'web development',
    'html',
    'css',
    'sass',
    'tailwindcss',
    'javascript',
    'typescript',
    'react',
    'next.js',
    'node.js',
    'vue.js',
    'jquery',
    'flint',
    'michigan',
    'usa',
    'united states',
    'united states of america',
  ],
};
