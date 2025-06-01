import join from '@/ts/utils/classNameJoin';
import { ButtonBaseProps } from './types';
import ButtonBase from './ButtonBase';

type ButtonHamburgerProps = ButtonBaseProps & {
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
    <ButtonBase
      {...props}
      className={join(['button-hamburger', className, open ? '-open' : ''])}
    >
      <div className="button-hamburger__lines">
        <div className="button-hamburger__line -top"></div>
        <div className="button-hamburger__line -middle"></div>
        <div className="button-hamburger__line -bottom"></div>
      </div>
      <span className="sr-only">{open ? closeSrLabel : openSrLabel}</span>
    </ButtonBase>
  );
}
