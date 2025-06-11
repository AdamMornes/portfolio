import { ButtonIconProps } from './types';
import ButtonBase from './ButtonBase';
import CssIconAngle from '../CssIcons/CssIconAngle';
import join from '@/ts/utils/classNameJoin';

export default function ButtonIcon({
  children,
  className,
  hideIcon,
  hideIconAnimation,
  icon = <CssIconAngle size="sm" />,
  ...props
}: ButtonIconProps) {
  return (
    <ButtonBase className={join([className, 'group'])} {...props}>
      {children}

      {!hideIcon && (
        <span
          className={join([
            'ml-4 mt-1',
            !hideIconAnimation
              ? 'group-focus:translate-x-1 group-hover:translate-x-1 transition-transform duration-300'
              : '',
          ])}
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
    </ButtonBase>
  );
}
