import ContentCodeBlock from '@/ts/components/Common/ContentCodeBlock/ContentCodeBlock';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-full">
      <ContentCodeBlock heading="404" headingEl="h1">
        <p>Page Not Found </p>
      </ContentCodeBlock>
    </div>
  );
}
