import { ButtonTransparentProps } from './types';
import join from '@/ts/utils/classNameJoin';
import ButtonIcon from './ButtonIcon';

export default function ButtonTransparent({
  className,
  ...props
}: ButtonTransparentProps) {
  return (
    <ButtonIcon
      {...props}
      className={join([
        'inline-flex items-center leading-tight py-1.5 px-4 rounded-lg cursor-pointer',
        className,
      ])}
    />
  );
}
