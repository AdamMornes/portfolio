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
    <RootElement className="section-header">
      <CssIconAngle orientation="left" />
      {children}
      <div className="ml-auto">
        <div className="flex items-center gap-4">
          <div className="h-6 w-0.5 bg-foreground rotate-25"></div>
          <CssIconAngle />
        </div>
      </div>
    </RootElement>
  );
}
