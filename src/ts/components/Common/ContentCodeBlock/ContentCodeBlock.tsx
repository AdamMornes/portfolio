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
      <HeadingElement className={headingSrOnly ? 'sr-only' : undefined}>
        <MockElementText text={heading} />
      </HeadingElement>

      <div className="ml-4 lg:ml-8">{children}</div>

      <div aria-hidden="true">
        <MockElementText type="close" text={heading} />
      </div>
    </RootElement>
  );
}
