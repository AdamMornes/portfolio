import Link from 'next/link';

export default function HeaderLogo() {
  return (
    <Link className="text-3xl text-foreground lg:text-4xl" href="/">
      Adam Mornes
    </Link>
  );
}
