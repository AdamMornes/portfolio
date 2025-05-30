import { PropsWithChildren } from 'react';
import CssIconAngle from '../CssIcons/CssIconAngle';
import join from '@/ts/utils/classNameJoin';

type SectionHeaderProps = {
  rootElement?: keyof HTMLElementTagNameMap;
  className?: string;
};

export default function SectionHeader({
  children,
  className,
  rootElement = 'h2',
}: PropsWithChildren<SectionHeaderProps>) {
  const RootElement = rootElement;
  return (
    <RootElement className={join(['section-header', className])}>
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
