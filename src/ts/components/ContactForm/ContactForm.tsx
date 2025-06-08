'use client';

import { useForm } from 'react-hook-form';
import ButtonInfo from '../Common/Buttons/ButtonInfo';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="lg:w-1/2">
        <div className="mb-3">
          <label className="block text-sm mb-3" htmlFor="name">
            Full Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-md py-3 px-4 dark:border-gray-700"
            placeholder="Full Name"
            {...register('name', { required: true })}
            id="name"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm mb-3" htmlFor="email">
            Email Address
          </label>
          <input
            className="w-full border border-gray-300 rounded-md py-3 px-4 dark:border-gray-700"
            placeholder="example@domain.com"
            {...register('email', { required: true })}
            id="email"
          />
        </div>
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
