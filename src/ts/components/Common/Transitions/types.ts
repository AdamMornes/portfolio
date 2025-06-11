export type TransitionClassNames = {
  appear?: string;
  appearActive?: string;
  appearDone?: string;
  enter?: string;
  enterActive?: string;
  enterDone?: string;
  exit?: string;
  exitActive?: string;
  exitDone?: string;
};

export type TransitionBaseProps = {
  className?: string;
  id?: string;
  onEnter?: (isAppearing: boolean) => void;
  onEntering?: (isAppearing: boolean) => void;
  onEntered?: (isAppearing: boolean) => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
  unmountOnExit?: boolean;
  classNames: TransitionClassNames;
  ref?: React.RefObject<HTMLDivElement | null>;
  visible: boolean;
};

export type TransitionProps = Omit<
  TransitionBaseProps,
  | 'classNames'
  | 'onEnter'
  | 'onEntering'
  | 'onEntered'
  | 'onExit'
  | 'onExiting'
  | 'onExited'
  | 'ref'
>;
