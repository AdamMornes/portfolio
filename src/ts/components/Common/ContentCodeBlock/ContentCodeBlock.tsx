import { PropsWithChildren } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { ContentCodeBlockProps } from './types';

export default function ContentCodeBlock({
  rootEl = 'section',
  heading,
  headingEl = 'h2',
  headingSrOnly = false,
  children,
}: PropsWithChildren<ContentCodeBlockProps>) {
  const Element = rootEl;
  return (
    <Element>
      <div className={headingSrOnly ? 'sr-only' : ''}>
        <SectionHeader rootElement={headingEl}>{heading}</SectionHeader>
      </div>
      {children}
    </Element>
  );
}
