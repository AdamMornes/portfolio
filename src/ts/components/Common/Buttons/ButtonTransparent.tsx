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
        'leading-tight py-2 px-4 rounded-md cursor-pointer',
        className,
      ])}
    />
  );
}
