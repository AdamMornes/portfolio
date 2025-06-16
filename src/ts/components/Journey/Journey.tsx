import { journey } from '@/data/about';
import isOdd from '@/ts/utils/isOdd';
import ContentImageBlock from '../Common/ContentImageBlock/ContentImageBlock';
import ContentBlock from '../Common/ContentBlock/ContentBlock';
import ContentCodeBlock from '../Common/ContentCodeBlock/ContentCodeBlock';
import { ContentCodeBlockWrapperProps } from '../Common/ContentCodeBlock/types';

export default function History(props: ContentCodeBlockWrapperProps) {
  return (
    <ContentCodeBlock {...props} heading={journey.heading}>
      <ContentBlock>
        {journey.sections.map((section, index) => (
          <ContentImageBlock
            key={index}
            image={{
              ...section.image,
              className: 'rounded-md h-auto',
              height: 0,
              width: 300,
            }}
            flip={isOdd(index)}
          >
            <ContentBlock html={section.description} />
          </ContentImageBlock>
        ))}
      </ContentBlock>
    </ContentCodeBlock>
  );
}
