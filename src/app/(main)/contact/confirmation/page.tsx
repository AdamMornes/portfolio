import type { Metadata } from 'next';
import SectionHeader from '@/ts/components/Common/SectionHeader/SectionHeader';
import { meta } from '@/data/contact';
import { siteName } from '@/data/shared';
import ContactFormConfirmation from '@/ts/components/ContactForm/ContactFormConfirmation';

export const metadata: Metadata = {
  title: `${meta.title} | ${siteName}`,
  description: meta.description,
};

export default function ContactConfirmationPage() {
  return (
    <>
      <SectionHeader rootElement="h1">Contact Confirmation</SectionHeader>
      <ContactFormConfirmation />
    </>
  );
}
