import join from '@/ts/utils/classNameJoin';
import styles from './CssIconAngle.module.css';

type CssIconAngleProps = {
  orientation?: 'up' | 'down' | 'left' | 'right';
  size?: 'sm' | 'lg' | 'xl' | '';
};

export default function CssIconAngle({
  orientation = 'right',
  size = '',
}: CssIconAngleProps) {
  return (
    <span
      aria-hidden="true"
      className={join([styles.angle, styles[`-${size}`]])}
    >
      <span className={join([styles.triangle, styles[`-${orientation}`]])} />
    </span>
  );
}
