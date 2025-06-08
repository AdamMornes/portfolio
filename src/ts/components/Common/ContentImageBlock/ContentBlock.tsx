import { PropsWithChildren } from 'react';
import join from '@/ts/utils/classNameJoin';
import styles from './ContentBlock.module.css';

type ContentBlockProps = {
  className?: string;
  html?: string;
  rootElement?: keyof HTMLElementTagNameMap;
};

export default function ContentBlock({
  children,
  className,
  html = '',
  rootElement = 'div',
}: PropsWithChildren<ContentBlockProps>) {
  const RootElement = rootElement;
  return children ? (
    <RootElement className={join([styles.content, className])}>
      {children}
    </RootElement>
  ) : (
    <RootElement
      className={join([styles.content, className])}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
