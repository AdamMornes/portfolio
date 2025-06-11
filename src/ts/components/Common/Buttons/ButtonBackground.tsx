import { ButtonIconProps } from './types';
import join from '@/ts/utils/classNameJoin';
import ButtonIcon from './ButtonIcon';
import styles from './Button.module.css';

export default function ButtonBackground({
  className,
  ...props
}: ButtonIconProps) {
  return (
    <ButtonIcon
      {...props}
      className={join([className, styles['-background']])}
    />
  );
}
