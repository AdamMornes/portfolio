import { PropsWithChildren, useRef } from 'react';
import type { TransitionProps } from './types';
import TransitionBase from './TransitionBase';

export default function TransitionFade(
  props: PropsWithChildren<TransitionProps>,
) {
  const transitionNodeRef = useRef<HTMLDivElement>(null);

  const removeStyle = () => {
    const node = transitionNodeRef.current;
    if (node) {
      node.removeAttribute('style');
    }
  };

  const onEntering = () => {
    const node = transitionNodeRef.current;
    if (node) {
      node.style.height = `${node.scrollHeight}px`;
    }
  };

  const onEntered = () => {
    removeStyle();
  };

  const onExit = () => {
    const node = transitionNodeRef.current;
    if (node) {
      node.style.height = `${node.clientHeight}px`;
    }
  };

  const onExiting = () => {
    removeStyle();
  };

  return (
    <TransitionBase
      {...props}
      classNames={{
        enterActive: 'h-0 overflow-hidden transition-height duration-300',
        exitActive: 'h-0 overflow-hidden transition-height duration-300',
      }}
      onEntered={onEntered}
      onEntering={onEntering}
      onExit={onExit}
      onExiting={onExiting}
      ref={transitionNodeRef}
    />
  );
}
