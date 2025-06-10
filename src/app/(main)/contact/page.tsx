import type { Metadata } from 'next';
import ContactForm from '@/ts/components/ContactForm/ContactForm';
import SectionHeader from '@/ts/components/Common/SectionHeader/SectionHeader';
import { contactForm, meta } from '@/data/contact';
import { siteName } from '@/data/shared';

export const metadata: Metadata = {
  title: `${meta.title} | ${siteName}`,
  description: meta.description,
};

export default function ContactPage() {
  return (
    <>
      <SectionHeader rootElement="h1">{meta.title}</SectionHeader>
      <section>
        <h2 className="sr-only">{contactForm.heading}</h2>
        <ContactForm />
      </section>
    </>
  );
}
