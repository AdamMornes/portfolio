import SectionHeader from '@/ts/components/Common/SectionHeader/SectionHeader';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-full">
      <SectionHeader className="gap-0" rootElement="h1">
        <div className="text-2xl font-bold">404</div>
        <div className="mx-4 h-8 w-px bg-foreground"></div>
        <div className="text-base mr-16">Page Not Found</div>
      </SectionHeader>
    </div>
  );
}
