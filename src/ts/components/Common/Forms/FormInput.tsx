import { HTMLInputTypeAttribute, InputHTMLAttributes, useId } from 'react';

type FormInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
  'type'
> & {
  error?: string;
  label: string;
  type?: HTMLInputTypeAttribute | 'textarea';
};

export default function FormInput({
  className = 'mb-4',
  error,
  label,
  type = 'text',
  ...props
}: FormInputProps) {
  const id = useId();
  const InputElement = type === 'textarea' ? 'textarea' : 'input';
  return (
    <div className={className}>
      <label className="block text-sm mb-3" htmlFor={id}>
        {label}
      </label>
      <InputElement
        {...props}
        aria-describedby={!!error ? 'nameError' : undefined}
        aria-invalid={!!error ? 'true' : 'false'}
        className="w-full border border-gray-300 rounded-md py-3 px-4 dark:border-gray-700"
        id={id}
        type={type}
      />
      {!!error && (
        <p className="text-danger-foreground text-sm mt-2" id="nameError">
          {error}
        </p>
      )}
    </div>
  );
}
