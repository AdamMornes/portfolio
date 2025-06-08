import { journey } from '@/data/about';
import isOdd from '@/ts/utils/isOdd';
import ContentImageBlock from '../Common/ContentImageBlock/ContentImageBlock';
import ContentBlock from '../Common/ContentImageBlock/ContentBlock';
import SectionHeader from '../Common/SectionHeader/SectionHeader';

export default function History() {
  return (
    <section>
      <SectionHeader>{journey.heading}</SectionHeader>
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
    </section>
  );
}
