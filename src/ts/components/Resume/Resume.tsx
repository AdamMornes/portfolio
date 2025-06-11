import Divider from '../Common/Divider/Divider';
import { resume } from '@/data/work';
import ExpandCollapse from '../Common/ExpandCollapse/ExpandCollapse';

export default function Resume() {
  return (
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
  );
}
