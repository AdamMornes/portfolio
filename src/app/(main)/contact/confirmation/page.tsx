import type { Metadata } from 'next';
import { meta } from '@/data/contact';
import { siteName } from '@/data/shared';
import ContactFormConfirmation from '@/ts/components/ContactForm/ContactFormConfirmation';
import ContentCodeBlock from '@/ts/components/Common/ContentCodeBlock/ContentCodeBlock';

export const metadata: Metadata = {
  title: `${meta.title} | ${siteName}`,
  description: meta.description,
};

export default function ContactConfirmationPage() {
  return (
    <ContentCodeBlock heading={meta.title} headingEl="h1">
      <ContactFormConfirmation />
    </ContentCodeBlock>
  );
}
