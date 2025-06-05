import { PropsWithChildren, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './TransitionFade.module.css';

type TransitionFadeProps = {
  in: boolean;
  unmountOnExit?: boolean;
};

export default function TransitionFade({
  children,
  in: inProp,
  unmountOnExit = true,
}: PropsWithChildren<TransitionFadeProps>) {
  const nodeRef = useRef<HTMLDivElement>(null);
  return (
    <CSSTransition
      classNames={{ ...styles }}
      in={inProp}
      timeout={300}
      nodeRef={nodeRef}
      unmountOnExit={unmountOnExit}
    >
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  );
}
