import { about } from '@/data/about';
import ContentImageBlock from '../Common/ContentImageBlock/ContentImageBlock';
import ContentBlock from '../Common/ContentImageBlock/ContentBlock';

export default function About() {
  return (
    <ContentBlock>
      <ContentImageBlock
        image={{
          ...about.profileImage,
          className: 'rounded-full mb-4 lg:mb-0',
          width: 250,
          height: 250,
        }}
      >
        <ContentBlock html={about.description} />
      </ContentImageBlock>
    </ContentBlock>
  );
}
