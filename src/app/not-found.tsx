import SectionHeader from '@/ts/components/Common/SectionHeader/SectionHeader';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-full">
      <SectionHeader rootElement="h1">
        <div className="flex items-center">
          <div className="text-2xl font-bold">404</div>
          <div className="mx-4 h-8 w-px bg-foreground"></div>
          <div className="text-base mr-16">Page Not Found</div>
        </div>
      </SectionHeader>
    </div>
  );
}
