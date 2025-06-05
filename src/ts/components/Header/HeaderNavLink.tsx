import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

type HeaderNavLinkProps = LinkProps & {
  onClick?: () => void;
};

export default function HeaderNavLink({
  children,
  onClick,
  ...props
}: PropsWithChildren<HeaderNavLinkProps>) {
  return (
    <Link
      {...props}
      className="group relative text-2xl font-raleway text-foreground no-underline"
      onClick={onClick}
    >
      {children}

      <div className="absolute left-0 right-0 top-8 block h-0.5 w-0 bg-foreground text-center mx-auto transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
