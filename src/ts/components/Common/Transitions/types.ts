export type TransitionBaseProps = {
  onEnter?: (isAppearing: boolean) => void;
  onEntering?: (isAppearing: boolean) => void;
  onEntered?: (isAppearing: boolean) => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
  unmountOnExit?: boolean;
  classNames: { [key: string]: string };
  visible: boolean;
};

export type TransitionProps = Omit<TransitionBaseProps, 'classNames'>;
