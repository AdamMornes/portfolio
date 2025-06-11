import styles from './CssIconPlusMinus.module.css';
import join from '@/ts/utils/classNameJoin';

type CssIconPlusMinusProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export default function CssIconPlusMinus({
  size = 'md',
}: CssIconPlusMinusProps) {
  return <div className={join([styles.icon, styles[`-${size}`]])} />;
}
