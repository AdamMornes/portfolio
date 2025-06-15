import CssIconAngle from '../CssIcons/CssIconAngle';

type MockElementTextProps = {
  text: string;
  type?: 'open' | 'close' | 'void';
};

export default function MockElementText({
  text,
  type = 'open',
}: MockElementTextProps) {
  return (
    <div className="flex items-center py-4">
      <div className="flex items-center gap-1">
        <CssIconAngle orientation="left" />
        {type === 'close' && (
          <div className="h-6 w-0.5 bg-foreground rotate-25 mr-3 lg:h-8"></div>
        )}
      </div>
      <span className="font-raleway text-2xl lg:text-3+xl leading-none">
        {text}
      </span>
      <div className="flex items-center gap-1">
        {type === 'void' && (
          <div className="h-6 w-0.5 bg-foreground rotate-25 ml-6 lg:h-8"></div>
        )}
        <CssIconAngle orientation="right" />
      </div>
    </div>
  );
}
