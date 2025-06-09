'use client';

import { mainContentId } from '@/ts/config/ids';

export default function SkipToLink() {
  const scrollToContent = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const element = document.getElementById(mainContentId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <a
      href={`#${mainContentId}`}
      className="relative h-0 text-foreground text-sm overflow-hidden px-4 transition-all duration-300 lg:px-16 focus:h-9 focus:py-2"
      onClick={scrollToContent}
    >
      Skip to main content
      <div className="absolute bottom-0 left-0 right-0 border-b border-gray-200 dark:border-gray-800" />
    </a>
  );
}
