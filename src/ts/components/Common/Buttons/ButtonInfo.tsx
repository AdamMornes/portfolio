import { ButtonBaseProps, ButtonIconProps } from './types';
import join from '@/ts/utils/classNameJoin';
import ButtonIcon from './ButtonIcon';

type ButtonBrandProps = ButtonBaseProps & ButtonIconProps;

export default function ButtonBrand({ className, ...props }: ButtonBrandProps) {
  return (
    <ButtonIcon {...props} className={join(['button -info', className])} />
  );
}
