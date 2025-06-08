import { PropsWithChildren, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionBaseProps } from './types';

/**
 * Use additional variable to prevent display effect from being applied
 * when the component is mounted.
 */
let isDisplayEffectReady = false;

export default function TransitionBase({
  children,
  unmountOnExit = true,
  visible,
  ...props
}: PropsWithChildren<TransitionBaseProps>) {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) {
      isDisplayEffectReady = true;
    } else {
      if (!unmountOnExit && isDisplayEffectReady) {
        const transitionNode = nodeRef.current;
        if (transitionNode) {
          transitionNode.style.display = 'block';
          setTimeout(() => {
            transitionNode?.removeAttribute('style');
          }, 300);
        }
      }
    }
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <CSSTransition
      {...props}
      in={visible}
      timeout={300}
      nodeRef={nodeRef}
      unmountOnExit={unmountOnExit}
    >
      <div className={!unmountOnExit && !visible ? 'hidden' : ''} ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );
}
