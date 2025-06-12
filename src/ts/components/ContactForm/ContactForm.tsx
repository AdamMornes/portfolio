'use client';

import { useForm } from 'react-hook-form';
import ButtonInfo from '../Common/Buttons/ButtonInfo';
import FormInput from '../Common/Forms/FormInput';
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
    fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert(err);
      });
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
