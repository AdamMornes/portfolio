import type { Metadata } from 'next';
import Work from '@/ts/components/Work/Work';
import SectionHeader from '@/ts/components/Common/SectionHeader/SectionHeader';

export const metadata: Metadata = {
  title: 'My Work | Adam Mornes | Front-End Developer',
  description:
    'Explore my portfolio of web development projects and applications. See examples of my work in front-end development.',
};

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <SectionHeader rootElement="h1">My Work</SectionHeader>
      <Work />
    </div>
  );
}
