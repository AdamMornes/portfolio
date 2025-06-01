'use client';

import { useRouter } from 'next/navigation';
import { ButtonBaseProps } from './types';

export default function ButtonBase({
  children,
  className,
  isAnchor = false,
  onClick,
  href,
  ...props
}: ButtonBaseProps) {
  const Element = isAnchor ? 'a' : 'button';
  const router = useRouter();

  const onAnchorClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (href) {
      router.push(href);
    }
  };

  return (
    <Element
      {...props}
      className={className}
      onClick={isAnchor ? onAnchorClick : onClick}
    >
      {children}
    </Element>
  );
}
