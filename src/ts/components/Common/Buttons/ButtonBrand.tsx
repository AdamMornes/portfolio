import CssIconAngle from '../CssIcons/CssIconAngle';
import { ThemedButtonProps } from './types';
import join from '@/ts/utils/classNameJoin';

export default function ButtonBrand({
  children,
  className,
  hideIcon,
  ...props
}: ThemedButtonProps) {
  return (
    <button {...props} className={join(['button-brand', className])}>
      {children}

      {!hideIcon && (
        <span className="ml-4 mt-1">
          <CssIconAngle size="sm" />
        </span>
      )}
    </button>
  );
}
