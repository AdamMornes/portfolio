import { NavLink } from '../types';

type SocialLinks = {
  title: string;
  github: NavLink;
  linkedin: NavLink;
  email: NavLink;
};

export const socialLinks: SocialLinks = {
  title: 'Social Links',
  github: {
    label: 'GitHub',
    href: 'https://github.com/AdamMornes',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adam-mornes-a3564495/',
  },
  email: {
    label: 'Email',
    href: 'mailto:adammornes@gmail.com',
  },
};
