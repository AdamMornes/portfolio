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
      className={join([
        'btn-hamburger flex flex-col justify-between w-7 h-5',
        className,
        open ? '-open' : '',
      ])}
    >
      <div className="btn-hamburger__line w-full h-0.5 bg-foreground rounded"></div>
      <div className="btn-hamburger__line w-full h-0.5 bg-foreground rounded"></div>
      <div className="btn-hamburger__line w-full h-0.5 bg-foreground rounded"></div>
      <span className="sr-only">{open ? closeSrLabel : openSrLabel}</span>
    </button>
  );
}
