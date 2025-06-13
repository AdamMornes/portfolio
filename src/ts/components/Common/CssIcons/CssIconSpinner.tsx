import styles from './CssIconSpinner.module.css';
import join from '@/ts/utils/classNameJoin';

export type CssIconSpinnerProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export default function CssIconSpinner({ size = 'md' }: CssIconSpinnerProps) {
  return (
    <span aria-hidden="true" className={join([styles.spinner, `-${size}`])} />
  );
}
