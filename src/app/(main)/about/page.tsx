import About from '@/ts/components/About/About';
import Journey from '@/ts/components/Journey/Journey';
import Hobbies from '@/ts/components/Hobbies/Hobbies';
import { metadata } from '@/data/about/metadata';
import ContentCodeBlock from '@/ts/components/Common/ContentCodeBlock/ContentCodeBlock';

export { metadata };

export default function AboutPage() {
  return (
    <ContentCodeBlock heading={metadata.title as string} headingEl="h1">
      <About rootEl="section" headingSrOnly />
      <Journey rootEl="section" />
      <Hobbies rootEl="section" />
    </ContentCodeBlock>
  );
}
