import About from '@/ts/components/About/About';
import History from '@/ts/components/History/History';
import Hobbies from '@/ts/components/Hobbies/Hobbies';
import SectionHeader from '@/ts/components/Common/SectionHeader/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Adam Mornes',
  description: 'About Adam Mornes',
};

export default function AboutPage() {
  return (
    <>
      <SectionHeader className="mb-8" rootElement="h1">
        About
      </SectionHeader>
      <About />
      <SectionHeader>History</SectionHeader>
      <History />
      <SectionHeader>Hobbies</SectionHeader>
      <Hobbies />
    </>
  );
}
