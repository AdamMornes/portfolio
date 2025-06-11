'use client';

import { PropsWithChildren, useId, useState } from 'react';
import ButtonBackground from '../Buttons/ButtonBackground';
import TransitionExpandCollapse from '../Transitions/TransitionExpandCollapse';
import CssIconPlusMinus from '../CssIcons/CssIconPlusMinus';

type ExpandCollapseProps = {
  buttonLabel: string;
  unmountOnExit?: boolean;
};

export default function ExpandCollapse({
  buttonLabel,
  children,
  unmountOnExit = true,
}: PropsWithChildren<ExpandCollapseProps>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const id = useId();

  return (
    <>
      <ButtonBackground
        aria-expanded={isExpanded}
        aria-controls={!unmountOnExit ? id : undefined}
        icon={<CssIconPlusMinus size="sm" />}
        hideIconAnimation
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {buttonLabel}
      </ButtonBackground>

      <TransitionExpandCollapse
        id={id}
        visible={isExpanded}
        unmountOnExit={unmountOnExit}
      >
        <div className="mt-8">{children}</div>
      </TransitionExpandCollapse>
    </>
  );
}
