import styles from './CssIconSpinner.module.css';
import join from '@/ts/utils/classNameJoin';

type CssIconSpinnerProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export default function CssIconSpinner({ size = 'md' }: CssIconSpinnerProps) {
  return (
    <div
      aria-hidden="true"
      className={join([styles.spinner, `-${size}`])}
    ></div>
  );
}
