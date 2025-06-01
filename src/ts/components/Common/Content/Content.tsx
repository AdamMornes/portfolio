import { PropsWithChildren } from 'react';

type ContentProps = PropsWithChildren<{
  className?: string;
}>;

export default function Content({ children, className }: ContentProps) {
  return <div className={`content ${className}`}>{children}</div>;
}
