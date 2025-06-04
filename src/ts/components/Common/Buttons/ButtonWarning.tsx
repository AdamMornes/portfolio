import { ButtonTransparentProps } from './types';
import join from '@/ts/utils/classNameJoin';
import ButtonTransparent from './ButtonTransparent';

export default function ButtonWarning({
  className,
  ...props
}: ButtonTransparentProps) {
  return (
    <ButtonTransparent
      {...props}
      className={join(['bg-warning-light text-gray-950', className])}
    />
  );
}
