'use client';

import { useRouter } from 'next/navigation';
import CssIconAngle from '../CssIcons/CssIconAngle';
import { ThemedButtonProps } from './types';

export default function ButtonBrand({
  children,
  className,
  hideIcon,
  isAnchor = false,
  onClick,
  href,
  ...props
}: ThemedButtonProps) {
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

      {!hideIcon && (
        <span className="ml-4 mt-1">
          <CssIconAngle size="sm" />
        </span>
      )}
    </Element>
  );
}
