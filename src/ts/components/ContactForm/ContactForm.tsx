'use client';

import { useForm } from 'react-hook-form';
import ButtonInfo from '../Common/Buttons/ButtonInfo';
import FormInput from '../Common/Forms/FormInput';
import { socialLinks } from '@/data/shared';

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
          errorMessage="Name is required"
          isInvalid={!!errors.name}
          label="Full Name"
          placeholder="Full Name"
          {...register('name', { required: true })}
        />
        <FormInput
          errorMessage="Email is required"
          isInvalid={!!errors.email}
          label="Email Address"
          placeholder="example@domain.com"
          {...register('email', { required: true })}
        />
        <FormInput
          errorMessage="Message is required"
          isInvalid={!!errors.message}
          label="Message"
          placeholder="Type your message"
          type="textarea"
          {...register('message', { required: true })}
        />
        <ButtonInfo type="submit" hideIcon>
          Submit
        </ButtonInfo>
      </div>
    </form>
  );
}
