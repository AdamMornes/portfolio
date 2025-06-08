import Image, { ImageProps } from 'next/image';
import ImageCredited from '@/ts/components/Common/Images/ImageCredited';
import join from '@/ts/utils/classNameJoin';
import { PropsWithChildren } from 'react';

type ContentImageBlockProps = {
  image: ImageProps & {
    credit?: string;
  };
  flip?: boolean;
};

export default function ContentImageBlock({
  children,
  image,
  flip = false,
}: PropsWithChildren<ContentImageBlockProps>) {
  const { alt, credit, ...imageProps } = image;
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <div className={join(['shrink-0', flip ? 'lg:order-1' : ''])}>
        {credit ? (
          <ImageCredited alt={alt} {...imageProps}>
            <span dangerouslySetInnerHTML={{ __html: credit }} />
          </ImageCredited>
        ) : (
          <Image alt={alt} {...imageProps} />
        )}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
