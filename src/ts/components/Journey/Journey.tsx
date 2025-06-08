import { journey } from '@/data/about';
import isOdd from '@/ts/utils/isOdd';
import ContentImageBlock from '../Common/ContentImageBlock/ContentImageBlock';

export default function History() {
  return (
    <div className="flex flex-col gap-4 mb-4">
      {journey.sections.map((section, index) => (
        <ContentImageBlock
          description={section.description}
          key={index}
          image={{
            ...section.image,
            className: 'rounded-md',
          }}
          flip={isOdd(index)}
        />
      ))}
    </div>
  );
}
