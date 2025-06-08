import Image, { ImageProps } from 'next/image';
import ImageCredited from '@/ts/components/Common/Images/ImageCredited';
import join from '@/ts/utils/classNameJoin';

type ContentImageBlockProps = {
  description: string;
  image: ImageProps & {
    credit?: string;
  };
  flip?: boolean;
};

export default function ContentImageBlock({
  description,
  image,
  flip = false,
}: ContentImageBlockProps) {
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
      <div className="flex-1">
        <div
          className="flex flex-col gap-4 mb-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
