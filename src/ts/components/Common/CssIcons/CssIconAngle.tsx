import join from '@/ts/utils/classNameJoin';

type CssIconAngleProps = {
  orientation?: 'up' | 'down' | 'left' | 'right';
};

export default function CssIconAngle({
  orientation = 'right',
}: CssIconAngleProps) {
  return (
    <div className={join(['css-icon-angle', `-${orientation}`])}>
      <div className="css-icon-angle__line -top" />
      <div className="css-icon-angle__line -bottom" />
    </div>
  );
}
