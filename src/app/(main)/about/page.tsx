import About from '@/ts/components/About/About';
import Journey from '@/ts/components/Journey/Journey';
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
      <SectionHeader rootElement="h1">About</SectionHeader>
      <About />
      <SectionHeader>Journey</SectionHeader>
      <Journey />
      <SectionHeader>Hobbies</SectionHeader>
      <Hobbies />
    </>
  );
}
