import { journey } from '@/data/about';
import isOdd from '@/ts/utils/isOdd';
import ContentImageBlock from '../Common/ContentImageBlock/ContentImageBlock';
import ContentBlock from '../Common/ContentBlock/ContentBlock';

export default function History() {
  return (
    <ContentBlock>
      {journey.sections.map((section, index) => (
        <ContentImageBlock
          key={index}
          image={{
            ...section.image,
            className: 'rounded-md',
          }}
          flip={isOdd(index)}
        >
          <ContentBlock html={section.description} />
        </ContentImageBlock>
      ))}
    </ContentBlock>
  );
}
