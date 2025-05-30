import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

type HeaderNavLinkProps = LinkProps & {
  className?: string;
};

export default function HeaderNavLink({
  children,
  className,
  ...props
}: PropsWithChildren<HeaderNavLinkProps>) {
  return (
    <Link className={`header-nav-link ${className}`} {...props}>
      {children}
    </Link>
  );
}
