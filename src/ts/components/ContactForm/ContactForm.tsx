'use client';

import { useForm } from 'react-hook-form';
import ButtonInfo from '../Common/Buttons/ButtonInfo';
import FormInput from '../Common/Forms/FormInput';
import { socialLinks } from '@/data/shared';
import { contactForm } from '@/data/contact';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactFormData>();
  const onSubmit = (data: ContactFormData) => {
    const anchor = document.createElement('a');
    anchor.href = `mailto:${socialLinks.email.href}?subject=Contact Submission from ${data.name}: ${data.email}&body=${data.message}`;
    anchor.click();
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
        <ButtonInfo type="submit" hideIcon>
          {contactForm.submit.label}
        </ButtonInfo>
      </div>
    </form>
  );
}
