import { ButtonIconProps } from './types';
import ButtonBase from './ButtonBase';
import CssIconAngle from '../CssIcons/CssIconAngle';

export default function ButtonIcon({
  children,
  hideIcon,
  ...props
}: ButtonIconProps) {
  return (
    <ButtonBase {...props}>
      {children}

      {!hideIcon && (
        <span className="ml-4 mt-1">
          <CssIconAngle size="sm" />
        </span>
      )}
    </ButtonBase>
  );
}
