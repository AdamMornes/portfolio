import { PropsWithChildren, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionBaseProps } from './types';

export default function TransitionBase({
  children,
  onExit: onExitProp,
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
        setTimeout(() => {
          transitionNode?.removeAttribute('style');
        }, 300);
      }
    }

    onExitProp?.();
  };

  return (
    <CSSTransition
      {...props}
      in={visible}
      nodeRef={nodeRef}
      onExit={onExit}
      timeout={300}
      unmountOnExit={unmountOnExit}
    >
      <div className={!unmountOnExit && !visible ? 'hidden' : ''} ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );
}
