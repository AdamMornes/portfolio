import profileImage from '/public/profile.jpg';
import { Image } from '../types';

type Hero = {
  cta: string;
  title: string;
  profileImage: Image;
  subheading: string;
};

export const hero: Hero = {
  cta: 'Learn more about me',
  title: 'Hi,<br />I&apos;m Adam Mornes',
  profileImage: {
    alt: 'Adam Mornes Profile',
    src: profileImage.src,
  },
  subheading: 'I do web.',
};
