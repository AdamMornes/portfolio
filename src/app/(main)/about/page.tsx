import About from '@/ts/components/About/About';
import SectionHeader from '@/ts/components/Common/SectionHeader/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Adam Mornes',
  description: 'About Adam Mornes',
};

export default function AboutPage() {
  return (
    <>
      <SectionHeader className="text-3xl" rootElement="h1">
        About
      </SectionHeader>
      <About />
    </>
  );
}
