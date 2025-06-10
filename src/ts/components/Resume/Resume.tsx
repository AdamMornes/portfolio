'use client';

import { useState } from 'react';
import ButtonBackground from '../Common/Buttons/ButtonBackground';
import ContentBlock from '../Common/ContentImageBlock/ContentBlock';
import Divider from '../Common/Divider/Divider';
import TransitionExpand from '../Common/Transitions/TransitionExpand';

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

        <div className="w-full">
          <TransitionExpand visible={isResumeVisible}>
            <iframe
              className="w-full aspect-[.54]"
              src="/resume-adam-mornes.pdf"
              title="Resume"
            />
          </TransitionExpand>
        </div>
      </ContentBlock>

      <Divider />
    </div>
  );
}
