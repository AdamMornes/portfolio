import join from '@/ts/utils/classNameJoin';
import { ButtonBaseProps } from './types';
import ButtonBase from './ButtonBase';
import styles from './ButtonHamburger.module.css';
import classNameJoin from '@/ts/utils/classNameJoin';

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
      className={join([
        styles['btnHamburger'],
        className,
        open ? styles['btnHamburger--open'] : '',
      ])}
    >
      <div className={styles['btnHamburger__lines']}>
        <div
          className={classNameJoin([
            styles['btnHamburger__line'],
            styles['btnHamburger__line--top'],
          ])}
        />
        <div
          className={classNameJoin([
            styles['btnHamburger__line'],
            styles['btnHamburger__line--middle'],
          ])}
        />
        <div
          className={classNameJoin([
            styles['btnHamburger__line'],
            styles['btnHamburger__line--bottom'],
          ])}
        />
      </div>
      <span className="sr-only">{open ? closeSrLabel : openSrLabel}</span>
    </ButtonBase>
  );
}
