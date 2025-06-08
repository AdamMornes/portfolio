import { PropsWithChildren } from 'react';
import join from '@/ts/utils/classNameJoin';
import styles from './ContentBlock.module.css';

type ContentBlockProps = {
  className?: string;
  html?: string;
};

export default function ContentBlock({
  children,
  className,
  html = '',
}: PropsWithChildren<ContentBlockProps>) {
  return children ? (
    <div className={join([styles.content, className])}>{children}</div>
  ) : (
    <div
      className={join([styles.content, className])}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
