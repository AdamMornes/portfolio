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
          error={errors.name?.message}
          label="Full Name"
          placeholder="Full Name"
          {...register('name', { required: 'Full Name is required' })}
        />
        <FormInput
          error={errors.email?.message}
          label="Email Address"
          placeholder="example@domain.com"
          {...register('email', { required: 'Email Address is required' })}
        />
        <FormInput
          error={errors.message?.message}
          label="Message"
          placeholder="Type your message"
          type="textarea"
          {...register('message', { required: 'Message is required' })}
        />
        <ButtonInfo type="submit" hideIcon>
          Submit
        </ButtonInfo>
      </div>
    </form>
  );
}
