import type { Metadata } from 'next';
import ContactForm from '@/ts/components/ContactForm/ContactForm';
import { meta } from '@/data/contact';
import { siteName } from '@/data/shared/siteName';
import ContentCodeBlock from '@/ts/components/Common/ContentCodeBlock/ContentCodeBlock';

export const metadata: Metadata = {
  title: `${meta.title} | ${siteName}`,
  description: meta.description,
};

export default function ContactPage() {
  return (
    <ContentCodeBlock heading={meta.title} headingEl="h1">
      <ContactForm />
    </ContentCodeBlock>
  );
}
