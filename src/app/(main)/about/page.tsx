import About from '@/ts/components/About/About';
import Journey from '@/ts/components/Journey/Journey';
import Hobbies from '@/ts/components/Hobbies/Hobbies';
import SectionHeader from '@/ts/components/Common/SectionHeader/SectionHeader';
import type { Metadata } from 'next';
import { siteName } from '@/data/shared';
import { meta } from '@/data/about';

export const metadata: Metadata = {
  title: `${meta.title} | ${siteName}`,
  description: meta.description,
};

export default function AboutPage() {
  return (
    <>
      <SectionHeader rootElement="h1">{meta.title}</SectionHeader>
      <About headingSrOnly />
      <Journey />
      <Hobbies />
    </>
  );
}
