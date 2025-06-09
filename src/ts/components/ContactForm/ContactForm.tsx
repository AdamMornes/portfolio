'use client';

import { useForm } from 'react-hook-form';
import ButtonInfo from '../Common/Buttons/ButtonInfo';
import FormInput from '../Common/Forms/FormInput';

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
    console.log(data);
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
          isInvalid={!!errors.name}
          label="Email Address"
          placeholder="example@domain.com"
          {...register('email', { required: true })}
        />
        <div className="mb-3">
          <label className="block text-sm mb-3" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md py-3 px-4 dark:border-gray-700"
            placeholder="Type your message"
            rows={4}
            {...register('message', { required: true })}
            id="message"
          />
        </div>
        <ButtonInfo type="submit" hideIcon>
          Submit
        </ButtonInfo>
      </div>
    </form>
  );
}
