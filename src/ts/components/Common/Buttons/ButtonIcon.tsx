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
    <ButtonBase {...props} className={join([className, 'group'])}>
      {children}

      {!hideIcon && (
        <span
          className={join([
            'flex-1 flex items-center ml-4',
            !hideIconAnimation
              ? 'transition-transform duration-300 group-focus:translate-x-1 group-hover:translate-x-1'
              : '',
          ])}
        >
          {icon}
        </span>
      )}
    </ButtonBase>
  );
}
