import { mainContentId } from '@/app/layout';

export default function SkipToLink() {
  return (
    <a
      href={`#${mainContentId}`}
      className="relative h-0 text-foreground text-sm overflow-hidden px-4 transition-all duration-300 lg:px-16 focus:h-9 focus:py-2"
    >
      Skip to main content
      <div className="absolute bottom-0 left-0 right-0 border-b border-gray-200 dark:border-gray-800" />
    </a>
  );
}
