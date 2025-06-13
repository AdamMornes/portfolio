import styles from './CssIconPlusMinus.module.css';
import join from '@/ts/utils/classNameJoin';

type CssIconPlusMinusProps = {
  isMinus?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export default function CssIconPlusMinus({
  isMinus = false,
  size = 'md',
}: CssIconPlusMinusProps) {
  return (
    <span
      aria-hidden="true"
      className={join([
        styles.icon,
        styles[`-${size}`],
        isMinus ? styles['-minus'] : '',
      ])}
    />
  );
}
