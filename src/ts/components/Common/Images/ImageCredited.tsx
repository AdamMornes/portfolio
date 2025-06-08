import Image, { ImageProps } from 'next/image';
import { PropsWithChildren } from 'react';

export default function ImageCredited({
  alt,
  children,
  ...props
}: PropsWithChildren<ImageProps>) {
  return (
    <figure className="group relative inline-block">
      <Image alt={alt} {...props} />
      <div className="group-hover:opacity-100 transition-opacity duration-300 lg:opacity-0">
        <div className="hidden absolute top-0 left-0 w-full h-full bg-black/50 lg:block" />
        <figcaption className="text-sm lg:absolute lg:bottom-0 lg:right-0 lg:text-gray-white lg:p-2 lg:[&_a]:text-info-light">
          {children}
        </figcaption>
      </div>
    </figure>
  );
}
