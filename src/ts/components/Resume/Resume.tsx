import Divider from '../Common/Divider/Divider';
import { resume } from '@/data/work/resume';
import ExpandCollapse from '../Common/ExpandCollapse/ExpandCollapse';
import ButtonBackground from '../Common/Buttons/ButtonBackground';
import { FaDownload } from 'react-icons/fa';

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
        dangerouslySetInnerHTML={{ __html: resume.title }}
      />

      <div className="mb-4">
        <ButtonBackground
          hideIconAnimation
          href={resume.pdf.path}
          icon={<FaDownload />}
          isAnchor
          target="_blank"
          download
        >
          {resume.downloadCta}
        </ButtonBackground>
      </div>

      <ExpandCollapse buttonLabel={resume.viewCta} unmountOnExit={false}>
        <iframe
          className="w-full h-[1000px]"
          src={resume.pdf.path}
          title="Resume"
        />
      </ExpandCollapse>

      <Divider />
    </RootElement>
  );
}
