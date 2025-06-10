import { PropsWithChildren, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionBaseProps } from './types';
import join from '@/ts/utils/classNameJoin';

export default function TransitionBase({
  children,
  className,
  onExit: onExitProp,
  onExited: onExitedProp,
  ref,
  unmountOnExit = true,
  visible,
  ...props
}: PropsWithChildren<TransitionBaseProps>) {
  const fallbackRef = useRef<HTMLDivElement>(null);
  const nodeRef = ref || fallbackRef;

  const onExit = () => {
    if (!unmountOnExit) {
      const transitionNode = nodeRef.current;
      if (transitionNode) {
        transitionNode.style.display = 'block';
      }
    }

    onExitProp?.();
  };

  const onExited = () => {
    if (!unmountOnExit) {
      const transitionNode = nodeRef.current;
      if (transitionNode) {
        transitionNode.style.display = '';
      }
    }

    onExitedProp?.();
  };

  return (
    <CSSTransition
      {...props}
      in={visible}
      nodeRef={nodeRef}
      onExit={onExit}
      onExited={onExited}
      timeout={300}
      unmountOnExit={unmountOnExit}
    >
      <div
        className={join([
          !unmountOnExit && !visible ? 'hidden' : '',
          className,
        ])}
        ref={nodeRef}
      >
        {children}
      </div>
    </CSSTransition>
  );
}
