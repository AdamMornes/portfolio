import Image, { ImageProps } from 'next/image';
import { PropsWithChildren } from 'react';

export default function ImageCredited({
  alt,
  children,
  ...props
}: PropsWithChildren<ImageProps>) {
  return (
    <div className="group relative">
      <Image alt={alt} {...props} />
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
        <p className="absolute bottom-0 right-0 text-sm text-gray-white p-2 [&_a]:text-info-light">
          {children}
        </p>
      </div>
    </div>
  );
}
