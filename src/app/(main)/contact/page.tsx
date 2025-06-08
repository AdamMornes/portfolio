import type { Metadata } from 'next';
import ContactForm from '@/ts/components/ContactForm/ContactForm';
import SectionHeader from '@/ts/components/Common/SectionHeader/SectionHeader';

export const metadata: Metadata = {
  title: 'Contact Me | Adam Mornes | Front-End Developer',
  description:
    'Contact me for any questions or inquiries. I am always looking for new opportunities and collaborations.',
};

export default function ContactPage() {
  return (
    <>
      <SectionHeader rootElement="h1">Contact</SectionHeader>
      <ContactForm />
    </>
  );
}
