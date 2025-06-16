import { metadata } from '@/data/contact/metadata';
import ContactFormConfirmation from '@/ts/components/ContactForm/ContactFormConfirmation';
import ContentCodeBlock from '@/ts/components/Common/ContentCodeBlock/ContentCodeBlock';

export { metadata };

export default function ContactConfirmationPage() {
  return (
    <ContentCodeBlock heading={metadata.title as string} headingEl="h1">
      <ContactFormConfirmation />
    </ContentCodeBlock>
  );
}
