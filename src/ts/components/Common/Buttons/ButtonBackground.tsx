import { ButtonBaseProps, ButtonIconProps } from './types';
import join from '@/ts/utils/classNameJoin';
import ButtonIcon from './ButtonIcon';

type ButtonBackgroundProps = ButtonBaseProps & ButtonIconProps;

export default function ButtonBackground({
  className,
  ...props
}: ButtonBackgroundProps) {
  return (
    <ButtonIcon
      {...props}
      className={join(['button -background', className])}
    />
  );
}
