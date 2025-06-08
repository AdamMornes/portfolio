import About from '@/ts/components/About/About';
import Journey from '@/ts/components/Journey/Journey';
import Hobbies from '@/ts/components/Hobbies/Hobbies';
import SectionHeader from '@/ts/components/Common/SectionHeader/SectionHeader';
import type { Metadata } from 'next';
import { about, journey, hobbies } from '@/data/about';

export const metadata: Metadata = {
  title: 'About | Adam Mornes',
  description: 'About Adam Mornes',
};

export default function AboutPage() {
  return (
    <>
      <SectionHeader rootElement="h1">{about.heading}</SectionHeader>
      <About />
      <SectionHeader>{journey.heading}</SectionHeader>
      <Journey />
      <SectionHeader>{hobbies.heading}</SectionHeader>
      <Hobbies />
    </>
  );
}
