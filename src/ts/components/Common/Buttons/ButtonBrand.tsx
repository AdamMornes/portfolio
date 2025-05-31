import { ThemedButtonProps } from './types';
import join from '@/ts/utils/classNameJoin';
import ButtonThemed from './ButtonThemed';

export default function ButtonBrand({
  className,
  ...props
}: ThemedButtonProps) {
  return (
    <ButtonThemed {...props} className={join(['button-brand', className])} />
  );
}
