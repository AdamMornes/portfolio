import Link from 'next/link';

export default function HeaderLogo() {
  return (
    <Link
      className="font-raleway text-3xl text-foreground no-underline lg:text-4xl"
      href="/"
    >
      Adam Mornes
    </Link>
  );
}
