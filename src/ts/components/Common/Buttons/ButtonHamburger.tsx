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
      className={join(['px-1 py-2', className, open ? styles['-open'] : ''])}
    >
      <div className={styles.lines}>
        <div className={classNameJoin([styles.line, styles['-top']])} />
        <div className={classNameJoin([styles.line, styles['-middle']])} />
        <div className={classNameJoin([styles.line, styles['-bottom']])} />
      </div>
      <span className="sr-only">{open ? closeSrLabel : openSrLabel}</span>
    </ButtonBase>
  );
}
