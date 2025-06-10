import type { Metadata } from 'next';
import WorkHistory from '@/ts/components/WorkHistory/WorkHistory';
import SectionHeader from '@/ts/components/Common/SectionHeader/SectionHeader';
import { workHistory, meta } from '@/data/work';
import { siteName } from '@/data/shared';

export const metadata: Metadata = {
  title: `${meta.title} | ${siteName}`,
  description: meta.description,
};

export default function WorkPage() {
  return (
    <>
      <SectionHeader rootElement="h1">{meta.title}</SectionHeader>
      <section>
        <h2 className="sr-only">{workHistory.heading}</h2>
        <WorkHistory />
      </section>
    </>
  );
}
