import styles from './Divider.module.css';
import join from '@/ts/utils/classNameJoin';

type DividerProps = {
  className?: string;
};

export default function Divider({ className }: DividerProps) {
  return <hr className={join([styles.divider, className])} />;
}
