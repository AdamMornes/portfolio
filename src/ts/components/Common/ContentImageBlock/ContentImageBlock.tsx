import Image, { ImageProps } from 'next/image';
import ImageCredited from '@/ts/components/Common/Images/ImageCredited';
import join from '@/ts/utils/classNameJoin';
import { PropsWithChildren, ReactNode } from 'react';
import styles from './ContentImageBlock.module.css';

type ContentImageBlockProps = {
  className?: string;
  classNameDescription?: string;
  classNameImageWrapper?: string;
  image: ImageProps & {
    credit?: string;
  };
  imageContent?: string | ReactNode;
  flip?: boolean;
};

export default function ContentImageBlock({
  children,
  className,
  classNameDescription,
  classNameImageWrapper,
  image,
  imageContent,
  flip = false,
}: PropsWithChildren<ContentImageBlockProps>) {
  const { alt, credit, ...imageProps } = image;
  return (
    <div className={join([styles.content, className])}>
      <div
        className={join([
          styles.image,
          flip ? styles.flip : '',
          classNameImageWrapper,
        ])}
      >
        {imageContent}
        {credit ? (
          <ImageCredited alt={alt} {...imageProps}>
            <span dangerouslySetInnerHTML={{ __html: credit }} />
          </ImageCredited>
        ) : (
          <Image alt={alt} {...imageProps} />
        )}
      </div>
      <div className={join([styles.description, classNameDescription])}>
        {children}
      </div>
    </div>
  );
}
