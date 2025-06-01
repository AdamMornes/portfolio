import { PropsWithChildren } from 'react';
import CssIconAngle from '../CssIcons/CssIconAngle';
import join from '@/ts/utils/classNameJoin';

type SectionHeaderProps = {
  className?: string;
  rootElement?: keyof HTMLElementTagNameMap;
};

export default function SectionHeader({
  children,
  className,
  rootElement = 'h2',
}: PropsWithChildren<SectionHeaderProps>) {
  const RootElement = rootElement;
  return (
    <RootElement className={join(['section-header', className])}>
      {children}
      <div className="ml-auto">
        <div className="flex items-center gap-2">
          <div className="h-6 w-0.5 bg-foreground rotate-25 lg:h-8"></div>
          <CssIconAngle />
        </div>
      </div>
    </RootElement>
  );
}
