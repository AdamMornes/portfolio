import type { Metadata } from 'next';
import { siteName } from './siteName';

export const meta: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: 'Adam Mornes is a front-end developer based in Flint, Michigan.',
};
