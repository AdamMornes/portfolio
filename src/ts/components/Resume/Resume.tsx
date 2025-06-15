import Divider from '../Common/Divider/Divider';
import { resume } from '@/data/work';
import ExpandCollapse from '../Common/ExpandCollapse/ExpandCollapse';

type ResumeProps = {
  rootEl?: 'div' | 'section';
  headingEl?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export default function Resume({
  rootEl = 'div',
  headingEl = 'h2',
}: ResumeProps) {
  const RootElement = rootEl;
  const HeadingElement = headingEl;
  return (
    <RootElement className="text-center">
      <Divider />

      <HeadingElement
        className="font-raleway text-2xl mb-8"
        dangerouslySetInnerHTML={{ __html: resume.heading }}
      />

      <ExpandCollapse buttonLabel={resume.cta} unmountOnExit={false}>
        <iframe
          className="w-full h-[1000px]"
          src="/resume-adam-mornes.pdf"
          title="Resume"
        />
      </ExpandCollapse>

      <Divider />
    </RootElement>
  );
}
