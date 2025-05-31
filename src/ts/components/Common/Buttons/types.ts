import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type IconButtonProps = ButtonProps & {
  hideIcon?: boolean;
};

export type ThemedButtonProps = IconButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    isAnchor?: boolean;
  };
