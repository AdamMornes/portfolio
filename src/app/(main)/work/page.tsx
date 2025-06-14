import type { Metadata } from 'next';
import WorkHistory from '@/ts/components/WorkHistory/WorkHistory';
import Resume from '@/ts/components/Resume/Resume';
import Skills from '@/ts/components/Skills/Skills';
import SectionHeader from '@/ts/components/Common/SectionHeader/SectionHeader';
import { meta } from '@/data/work';
import { siteName } from '@/data/shared';

export const metadata: Metadata = {
  title: `${meta.title} | ${siteName}`,
  description: meta.description,
};

export default function WorkPage() {
  return (
    <>
      <SectionHeader rootElement="h1">{meta.title}</SectionHeader>
      <WorkHistory headingSrOnly />
      <Resume headingEl="h3" headingSrOnly />
      <Skills />
    </>
  );
}
