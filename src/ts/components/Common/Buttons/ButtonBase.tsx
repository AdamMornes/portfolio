'use client';

import { useRouter } from 'next/navigation';
import { ButtonBaseProps } from './types';
import join from '@/ts/utils/classNameJoin';
import styles from './Button.module.css';

export default function ButtonBase({
  children,
  className,
  isAnchor = false,
  onClick,
  href,
  target,
  ...props
}: ButtonBaseProps) {
  const Element = isAnchor ? 'a' : 'button';
  const router = useRouter();

  const onAnchorClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (href) {
      if (target === '_blank') {
        window.open(href, '_blank');
      } else {
        router.push(href);
      }
    }
  };

  return (
    <Element
      {...props}
      className={join([styles.button, className])}
      href={href}
      onClick={isAnchor ? onAnchorClick : onClick}
      target={target}
    >
      {children}
    </Element>
  );
}
