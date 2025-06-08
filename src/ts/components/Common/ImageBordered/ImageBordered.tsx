import Image, { ImageProps } from 'next/image';
import join from '@/ts/utils/classNameJoin';

export default function ImageBordered({
  alt,
  className,
  ...props
}: ImageProps) {
  return (
    <Image
      alt={alt}
      className={join([
        className,
        'border border-gray-300 p-0.5 dark:border-gray-700',
      ])}
      {...props}
    />
  );
}
