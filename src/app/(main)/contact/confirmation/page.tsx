import type { Metadata } from 'next';
import SectionHeader from '@/ts/components/Common/SectionHeader/SectionHeader';
import { meta } from '@/data/contact';
import { siteName } from '@/data/shared';

export const metadata: Metadata = {
  title: `${meta.title} | ${siteName}`,
  description: meta.description,
};

export default function ContactConfirmationPage() {
  return (
    <>
      <SectionHeader rootElement="h1">Contact Confirmation</SectionHeader>
      <section>
        <h2 className=" text-2xl mb-4">Thank you for reaching out, name!</h2>
        <p>
          I look forward to reading what you have to say and I&apos;ll get back
          to you as soon as possible.
        </p>
      </section>
    </>
  );
}
