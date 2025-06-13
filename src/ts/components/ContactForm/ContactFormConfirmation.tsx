'use client';

import { contactConfirmation } from '@/data/contact';
import { useSearchParams } from 'next/navigation';

export default function ContactFormConfirmation() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div>
      <p className="text-2xl mb-4">
        {name
          ? contactConfirmation.heading.replace('{name}', name)
          : contactConfirmation.headingFallback}
      </p>
      <p>{contactConfirmation.message}</p>
    </div>
  );
}
