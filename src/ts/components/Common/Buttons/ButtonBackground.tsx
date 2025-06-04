import { ButtonTransparentProps } from './types';
import join from '@/ts/utils/classNameJoin';
import ButtonTransparent from './ButtonTransparent';

export default function ButtonBackground({
  className,
  ...props
}: ButtonTransparentProps) {
  return (
    <ButtonTransparent
      {...props}
      className={join([
        'bg-background text-foreground border border-gray-200 no-underline dark:border-gray-800',
        className,
      ])}
    />
  );
}
