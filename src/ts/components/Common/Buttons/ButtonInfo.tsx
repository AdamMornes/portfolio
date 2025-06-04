import { ButtonTransparentProps } from './types';
import join from '@/ts/utils/classNameJoin';
import ButtonTransparent from './ButtonTransparent';

export default function ButtonBrand({
  className,
  ...props
}: ButtonTransparentProps) {
  return (
    <ButtonTransparent
      {...props}
      className={join(['bg-info-light text-gray-950 no-underline', className])}
    />
  );
}
