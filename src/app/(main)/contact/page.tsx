import type { Metadata } from 'next';
import ContactForm from '@/ts/components/ContactForm/ContactForm';
import { meta } from '@/data/contact/meta';
import ContentCodeBlock from '@/ts/components/Common/ContentCodeBlock/ContentCodeBlock';

export const metadata: Metadata = meta;

export default function ContactPage() {
  return (
    <ContentCodeBlock heading={meta.title} headingEl="h1">
      <ContactForm />
    </ContentCodeBlock>
  );
}
