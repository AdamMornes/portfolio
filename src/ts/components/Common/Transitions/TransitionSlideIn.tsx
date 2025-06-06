import { PropsWithChildren, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './TransitionSlideIn.module.css';

type TransitionSlideInProps = {
  visible: boolean;
};

export default function TransitionSlideIn({
  children,
  visible,
}: PropsWithChildren<TransitionSlideInProps>) {
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
