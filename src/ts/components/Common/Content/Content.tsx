import join from '@/ts/utils/classNameJoin';
import { PropsWithChildren } from 'react';

type ContentProps = PropsWithChildren<{
  className?: string;
}>;

export default function Content({ children, className }: ContentProps) {
  return <div className={join(['content', className])}>{children}</div>;
}
