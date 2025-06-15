import { PropsWithChildren } from 'react';
import CssIconAngle from '../CssIcons/CssIconAngle';

export default function MockElementText({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center gap-4 py-4 mb-4">
      {children}
      <div className="ml-auto">
        <div className="flex items-center gap-2">
          <div className="h-6 w-0.5 bg-foreground rotate-25 lg:h-8"></div>
          <CssIconAngle />
        </div>
      </div>
    </div>
  );
}
