export type ContentCodeBlockProps = {
  rootEl?: 'div' | 'section';
  heading: string;
  headingEl?: keyof HTMLElementTagNameMap;
  headingSrOnly?: boolean;
};

export type ContentCodeBlockWrapperProps = Omit<
  ContentCodeBlockProps,
  'heading'
>;
