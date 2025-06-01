import { ButtonBaseProps, ButtonIconProps } from './types';
import join from '@/ts/utils/classNameJoin';
import ButtonIcon from './ButtonIcon';

type ButtonWarningProps = ButtonBaseProps & ButtonIconProps;

export default function ButtonWarning({
  className,
  ...props
}: ButtonWarningProps) {
  return (
    <ButtonIcon {...props} className={join(['button -warning', className])} />
  );
}
