import { HTMLInputTypeAttribute, InputHTMLAttributes, useId } from 'react';

type FormInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
  'type'
> & {
  errorMessage?: string;
  isInvalid?: boolean;
  label: string;
  type?: HTMLInputTypeAttribute | 'textarea';
};

export default function FormInput({
  className = 'mb-4',
  errorMessage = 'This field is required',
  isInvalid = false,
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
        aria-describedby={isInvalid ? 'nameError' : undefined}
        aria-invalid={isInvalid ? 'true' : 'false'}
        className="w-full border border-gray-300 rounded-md py-3 px-4 dark:border-gray-700"
        id={id}
        type={type}
      />
      {isInvalid && (
        <p className="text-danger-foreground text-sm mt-2" id="nameError">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
