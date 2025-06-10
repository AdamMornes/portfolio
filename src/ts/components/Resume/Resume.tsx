'use client';

import { useState } from 'react';
import ButtonBackground from '../Common/Buttons/ButtonBackground';
import Divider from '../Common/Divider/Divider';
import TransitionExpand from '../Common/Transitions/TransitionExpand';

export default function Resume() {
  const [isResumeVisible, setIsResumeVisible] = useState(false);
  return (
    <div className="text-center">
      <Divider />

      <p className="font-raleway text-2xl mb-8">
        Need more details about my work history?
        <br />
        Check out my resume!
      </p>

      <ButtonBackground onClick={() => setIsResumeVisible(!isResumeVisible)}>
        View Resume
      </ButtonBackground>

      <TransitionExpand
        className="w-full"
        visible={isResumeVisible}
        unmountOnExit={false}
      >
        <iframe
          className="w-full h-[1000px] mt-8"
          src="/resume-adam-mornes.pdf"
          title="Resume"
        />
      </TransitionExpand>

      <Divider />
    </div>
  );
}
