export type ContentCodeBlockProps = {
  rootEl?: 'div' | 'section';
  heading: string;
  headingEl?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  headingSrOnly?: boolean;
};

export type ContentCodeBlockWrapperProps = Omit<
  ContentCodeBlockProps,
  'heading'
>;
