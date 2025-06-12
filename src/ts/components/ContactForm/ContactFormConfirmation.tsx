'use client';

import { useSearchParams } from 'next/navigation';

export default function ContactFormConfirmation() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div>
      <p className="text-2xl mb-4">Thank you for reaching out, {name}!</p>
      <p>
        I look forward to reading what you have to say and I&apos;ll get back to
        you as soon as possible.
      </p>
    </div>
  );
}
