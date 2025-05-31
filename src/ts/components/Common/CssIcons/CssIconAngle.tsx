import join from '@/ts/utils/classNameJoin';

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
      className={join([
        'css-icon-angle',
        `-${orientation}`,
        size ? `-${size}` : '',
      ])}
    />
  );
}
