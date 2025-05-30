import join from '@/ts/utils/classNameJoin';
import { ButtonProps } from './types';

type ButtonHamburgerProps = ButtonProps & {
  open: boolean;
  openSrLabel: string;
  closeSrLabel: string;
};

export default function ButtonHamburger({
  className,
  open,
  openSrLabel,
  closeSrLabel,
  ...props
}: ButtonHamburgerProps) {
  return (
    <button
      {...props}
      className={join(['button-hamburger', className, open ? '-open' : ''])}
    >
      <div className="button-hamburger__lines">
        <div className="button-hamburger__line -top"></div>
        <div className="button-hamburger__line -middle"></div>
        <div className="button-hamburger__line -bottom"></div>
      </div>
      <span className="sr-only">{open ? closeSrLabel : openSrLabel}</span>
    </button>
  );
}
