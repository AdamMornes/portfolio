import type { Metadata } from 'next';
import WorkHistory from '@/ts/components/WorkHistory/WorkHistory';
import Skills from '@/ts/components/Skills/Skills';
import { meta } from '@/data/work';
import { siteName } from '@/data/shared';
import ContentCodeBlock from '@/ts/components/Common/ContentCodeBlock/ContentCodeBlock';

export const metadata: Metadata = {
  title: `${meta.title} | ${siteName}`,
  description: meta.description,
};

export default function WorkPage() {
  return (
    <ContentCodeBlock heading={meta.title} headingEl="h1">
      <WorkHistory rootEl="section" headingSrOnly />
      <Skills rootEl="section" />
    </ContentCodeBlock>
  );
}
