'use client';

import { useState } from 'react';
import ButtonBackground from '../Common/Buttons/ButtonBackground';
import ContentBlock from '../Common/ContentImageBlock/ContentBlock';
import Divider from '../Common/Divider/Divider';

export default function Resume() {
  const [isResumeVisible, setIsResumeVisible] = useState(false);
  return (
    <div className="text-center">
      <Divider />

      <ContentBlock className="items-center">
        <p className="font-raleway text-2xl">
          Need more details about my work history?
          <br />
          Check out my resume!
        </p>

        <ButtonBackground onClick={() => setIsResumeVisible(!isResumeVisible)}>
          View Resume
        </ButtonBackground>

        {isResumeVisible && (
          <iframe
            className="w-full aspect-[.54]"
            src="/resume-adam-mornes.pdf"
            title="Resume"
          />
        )}
      </ContentBlock>

      <Divider />
    </div>
  );
}
