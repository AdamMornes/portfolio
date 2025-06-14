import Divider from '../Common/Divider/Divider';
import { resume } from '@/data/work';
import ExpandCollapse from '../Common/ExpandCollapse/ExpandCollapse';
import ContentCodeBlock from '../Common/ContentCodeBlock/ContentCodeBlock';
import { ContentCodeBlockWrapperProps } from '../Common/ContentCodeBlock/types';

export default function Resume(props: ContentCodeBlockWrapperProps) {
  return (
    <ContentCodeBlock {...props} heading={resume.heading}>
      <div className="text-center">
        <Divider />

        <div
          className="font-raleway text-2xl mb-8"
          dangerouslySetInnerHTML={{ __html: resume.description }}
        />

        <ExpandCollapse buttonLabel={resume.cta} unmountOnExit={false}>
          <iframe
            className="w-full h-[1000px]"
            src="/resume-adam-mornes.pdf"
            title="Resume"
          />
        </ExpandCollapse>

        <Divider />
      </div>
    </ContentCodeBlock>
  );
}
