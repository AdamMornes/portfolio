import join from '@/ts/utils/classNameJoin';

type CssIconAngleProps = {
  orientation?: 'up' | 'down' | 'left' | 'right';
};

export default function CssIconAngle({
  orientation = 'right',
}: CssIconAngleProps) {
  return (
    <span
      aria-hidden="true"
      className={join(['css-icon-angle', `-${orientation}`])}
    />
  );
}
