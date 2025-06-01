import { ButtonBaseProps, ButtonIconProps } from './types';
import join from '@/ts/utils/classNameJoin';
import ButtonIcon from './ButtonIcon';

type ButtonDangerProps = ButtonBaseProps & ButtonIconProps;

export default function ButtonDanger({
  className,
  ...props
}: ButtonDangerProps) {
  return (
    <ButtonIcon {...props} className={join(['button -danger', className])} />
  );
}
