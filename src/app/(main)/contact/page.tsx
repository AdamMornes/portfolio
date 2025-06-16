import ContactForm from '@/ts/components/ContactForm/ContactForm';
import { metadata } from '@/data/contact/metadata';
import ContentCodeBlock from '@/ts/components/Common/ContentCodeBlock/ContentCodeBlock';

export { metadata };

export default function ContactPage() {
  return (
    <ContentCodeBlock heading={metadata.title as string} headingEl="h1">
      <ContactForm />
    </ContentCodeBlock>
  );
}
