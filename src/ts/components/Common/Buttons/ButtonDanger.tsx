import { ButtonTransparentProps } from './types';
import join from '@/ts/utils/classNameJoin';
import ButtonTransparent from './ButtonTransparent';

export default function ButtonDanger({
  className,
  ...props
}: ButtonTransparentProps) {
  return (
    <ButtonTransparent
      {...props}
      className={join(['bg-danger-dark text-white no-underline', className])}
    />
  );
}
