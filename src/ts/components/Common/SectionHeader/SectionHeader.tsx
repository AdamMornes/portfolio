import { PropsWithChildren } from 'react';
import CssIconAngle from '../CssIcons/CssIconAngle';

type SectionHeaderProps = {
  rootElement?: keyof HTMLElementTagNameMap;
};

export default function SectionHeader({
  children,
  rootElement = 'h2',
}: PropsWithChildren<SectionHeaderProps>) {
  const RootElement = rootElement;
  return (
    <RootElement className="flex items-center gap-6 p-4 border-b border-gray-200">
      <CssIconAngle orientation="left" />
      {children}
      <div className="ml-auto">
        <div className="flex items-center gap-4">
          <div className="h-8 w-0.5 bg-foreground rotate-25"></div>
          <CssIconAngle />
        </div>
      </div>
    </RootElement>
  );
}
