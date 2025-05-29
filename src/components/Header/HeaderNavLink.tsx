import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

type HeaderNavLinkProps = LinkProps & {
  classNameOverride?: string;
};

export default function HeaderNavLink({
  children,
  classNameOverride,
  ...props
}: PropsWithChildren<HeaderNavLinkProps>) {
  const className = classNameOverride
    ? classNameOverride
    : 'text-2xl text-foreground';
  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  );
}
