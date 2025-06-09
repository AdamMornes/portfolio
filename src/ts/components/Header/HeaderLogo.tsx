import Link from 'next/link';
import { siteLogo } from '@/data/shared';

export default function HeaderLogo() {
  return (
    <Link
      className="font-raleway text-3xl text-foreground leading-none no-underline lg:text-4xl"
      href="/"
    >
      {siteLogo}
    </Link>
  );
}
