import { PropsWithChildren, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './TransitionFade.module.css';

type TransitionFadeProps = {
  visible: boolean;
};

export default function TransitionFade({
  children,
  visible,
}: PropsWithChildren<TransitionFadeProps>) {
  const nodeRef = useRef<HTMLDivElement>(null);
  return (
    <CSSTransition
      classNames={{ ...styles }}
      in={visible}
      timeout={300}
      nodeRef={nodeRef}
      unmountOnExit
    >
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  );
}
