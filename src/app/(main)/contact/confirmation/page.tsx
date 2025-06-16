import type { Metadata } from 'next';
import { meta } from '@/data/contact/meta';
import ContactFormConfirmation from '@/ts/components/ContactForm/ContactFormConfirmation';
import ContentCodeBlock from '@/ts/components/Common/ContentCodeBlock/ContentCodeBlock';

export const metadata: Metadata = meta;

export default function ContactConfirmationPage() {
  return (
    <ContentCodeBlock heading={meta.title} headingEl="h1">
      <ContactFormConfirmation />
    </ContentCodeBlock>
  );
}
