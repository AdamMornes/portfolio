'use client';

import { contactConfirmation } from '@/data/contact';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import LoadingSpinner from '../Common/LoadingSpinner/LoadingSpinner';

function ConfirmationHeading() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <p className="text-2xl mb-4">
      {name
        ? contactConfirmation.heading.replace('{name}', name)
        : contactConfirmation.headingFallback}
    </p>
  );
}

export default function ContactFormConfirmation() {
  return (
    <div>
      <Suspense fallback={<LoadingSpinner announce={false} loading={true} />}>
        <ConfirmationHeading />
      </Suspense>
      <p>{contactConfirmation.message}</p>
    </div>
  );
}
