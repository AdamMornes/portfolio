import { PropsWithChildren } from 'react';
import MockElementText from '../MockElementText/MockElementText';
import { ContentCodeBlockProps } from './types';

export default function ContentCodeBlock({
  rootEl = 'div',
  heading,
  headingEl = 'h2',
  headingSrOnly = false,
  children,
}: PropsWithChildren<ContentCodeBlockProps>) {
  const HeadingElement = headingEl;
  const RootElement = rootEl;
  return (
    <RootElement>
      <HeadingElement className={headingSrOnly ? 'sr-only' : ''}>
        <MockElementText>{heading}</MockElementText>
      </HeadingElement>
      {children}
    </RootElement>
  );
}
