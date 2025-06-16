'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import ButtonInfo from '../Common/Buttons/ButtonInfo';
import FormInput from '../Common/Forms/FormInput';
import { contactForm } from '@/data/contact/form';
import LoadingSpinner from '../Common/LoadingSpinner/LoadingSpinner';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactFormData>();
  const [isServerError, setIsServerError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      if (response.ok) {
        router.push(`/contact/confirmation?name=${data.name}`);
      } else {
        setIsServerError(true);
      }
    } catch {
      setIsServerError(true);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="lg:w-1/2">
        <FormInput
          error={errors.name?.message}
          label={contactForm.name.label}
          placeholder={contactForm.name.placeholder}
          {...register('name', { required: contactForm.name.errorRequired })}
        />
        <FormInput
          error={errors.email?.message}
          label={contactForm.email.label}
          placeholder={contactForm.email.placeholder}
          {...register('email', {
            required: contactForm.email.errorRequired,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: contactForm.email.errorPatterm,
            },
          })}
        />
        <FormInput
          error={errors.message?.message}
          label={contactForm.message.label}
          placeholder={contactForm.message.placeholder}
          type="textarea"
          {...register('message', {
            required: contactForm.message.errorRequired,
          })}
        />
        <div className="flex items-center justify-between">
          <ButtonInfo type="submit" hideIcon>
            {contactForm.submit.label}
          </ButtonInfo>

          <LoadingSpinner
            loading={isLoading}
            srLabel={contactForm.loadingMessage}
          />
        </div>
      </div>

      {isServerError && (
        <p className="text-danger-foreground mt-4" role="alert">
          {contactForm.serverError}
        </p>
      )}
    </form>
  );
}
