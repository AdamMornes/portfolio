import type { Metadata } from 'next';
import WorkHistory from '@/ts/components/WorkHistory/WorkHistory';
import Skills from '@/ts/components/Skills/Skills';
import { meta } from '@/data/work/meta';
import ContentCodeBlock from '@/ts/components/Common/ContentCodeBlock/ContentCodeBlock';
import Projects from '@/ts/components/Projects/Projects';

export const metadata: Metadata = meta;

export default function WorkPage() {
  return (
    <ContentCodeBlock heading={meta.title} headingEl="h1">
      <WorkHistory rootEl="section" headingSrOnly />
      <Projects rootEl="section" />
      <Skills rootEl="section" />
    </ContentCodeBlock>
  );
}
