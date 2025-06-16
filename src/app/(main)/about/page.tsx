import About from '@/ts/components/About/About';
import Journey from '@/ts/components/Journey/Journey';
import Hobbies from '@/ts/components/Hobbies/Hobbies';
import type { Metadata } from 'next';
import { siteName } from '@/data/shared/siteName';
import { meta } from '@/data/about/meta';
import ContentCodeBlock from '@/ts/components/Common/ContentCodeBlock/ContentCodeBlock';

export const metadata: Metadata = {
  title: `${meta.title} | ${siteName}`,
  description: meta.description,
};

export default function AboutPage() {
  return (
    <ContentCodeBlock heading={meta.title} headingEl="h1">
      <About rootEl="section" headingSrOnly />
      <Journey rootEl="section" />
      <Hobbies rootEl="section" />
    </ContentCodeBlock>
  );
}
