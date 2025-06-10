import { ButtonIconProps } from './types';
import ButtonBase from './ButtonBase';
import CssIconAngle from '../CssIcons/CssIconAngle';
import join from '@/ts/utils/classNameJoin';

export default function ButtonIcon({
  children,
  className,
  hideIcon,
  icon = <CssIconAngle size="sm" />,
  ...props
}: ButtonIconProps) {
  return (
    <ButtonBase
      className={join([className, 'inline-flex items-center justify-between'])}
      {...props}
    >
      {children}

      {!hideIcon && (
        <span className="ml-4 mt-1" aria-hidden="true">
          {icon}
        </span>
      )}
    </ButtonBase>
  );
}
