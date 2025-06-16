import WorkHistory from '@/ts/components/WorkHistory/WorkHistory';
import Skills from '@/ts/components/Skills/Skills';
import { metadata } from '@/data/work/metadata';
import ContentCodeBlock from '@/ts/components/Common/ContentCodeBlock/ContentCodeBlock';
import Projects from '@/ts/components/Projects/Projects';

export { metadata };

export default function WorkPage() {
  return (
    <ContentCodeBlock heading={metadata.title as string} headingEl="h1">
      <WorkHistory rootEl="section" headingSrOnly />
      <Projects rootEl="section" />
      <Skills rootEl="section" />
    </ContentCodeBlock>
  );
}
