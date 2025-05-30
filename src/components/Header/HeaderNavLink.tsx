import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import styles from './HeaderNavLink.module.css';

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
    : styles.headerNavLink;
  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  );
}
