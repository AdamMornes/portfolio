'use client';

import { useState } from 'react';
import ButtonBackground from '../Common/Buttons/ButtonBackground';
import Divider from '../Common/Divider/Divider';
import TransitionExpandCollapse from '../Common/Transitions/TransitionExpandCollapse';
import { resume } from '@/data/work';

export default function Resume() {
  const [isResumeVisible, setIsResumeVisible] = useState(false);
  return (
    <div className="text-center">
      <Divider />

      <div
        className="font-raleway text-2xl mb-8"
        dangerouslySetInnerHTML={{ __html: resume.description }}
      />

      <ButtonBackground onClick={() => setIsResumeVisible(!isResumeVisible)}>
        {resume.cta}
      </ButtonBackground>

      <TransitionExpandCollapse visible={isResumeVisible} unmountOnExit={false}>
        <div className="mt-8">
          <iframe
            className="w-full h-[1000px]"
            src="/resume-adam-mornes.pdf"
            title="Resume"
          />
        </div>
      </TransitionExpandCollapse>

      <Divider />
    </div>
  );
}
