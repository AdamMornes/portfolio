import { InputHTMLAttributes, useId } from 'react';

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string;
  isInvalid?: boolean;
  label: string;
};

export default function FormInput({
  className = 'mb-3',
  errorMessage = 'This field is required',
  isInvalid = false,
  label,
  ...props
}: FormInputProps) {
  const id = useId();
  return (
    <div className={className}>
      <label className="block text-sm mb-3" htmlFor={id}>
        {label}
      </label>
      <input
        {...props}
        aria-describedby={isInvalid ? 'nameError' : undefined}
        aria-invalid={isInvalid ? 'true' : 'false'}
        className="w-full border border-gray-300 rounded-md py-3 px-4 dark:border-gray-700"
        id={id}
      />
      {isInvalid && (
        <p className="text-danger-foreground text-sm mt-2" id="nameError">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
