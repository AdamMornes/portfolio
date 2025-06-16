import { about } from '@/data/about';
import ContentImageBlock from '../Common/ContentImageBlock/ContentImageBlock';
import ContentBlock from '../Common/ContentBlock/ContentBlock';
import ContentCodeBlock from '../Common/ContentCodeBlock/ContentCodeBlock';
import { ContentCodeBlockWrapperProps } from '../Common/ContentCodeBlock/types';

export default function About(props: ContentCodeBlockWrapperProps) {
  return (
    <ContentCodeBlock {...props} heading={about.title}>
      <ContentBlock>
        <ContentImageBlock
          classNameImageWrapper="flex justify-center"
          image={{
            ...about.profileImage,
            className: 'rounded-full mb-4 lg:mb-0',
            height: 250,
            priority: true,
            width: 250,
          }}
        >
          <ContentBlock html={about.description} />
        </ContentImageBlock>
      </ContentBlock>
    </ContentCodeBlock>
  );
}
