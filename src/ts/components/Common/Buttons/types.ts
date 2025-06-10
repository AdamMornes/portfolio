import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonBaseProps = ButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    isAnchor?: boolean;
  };

export type ButtonIconProps = ButtonBaseProps & {
  hideIcon?: boolean;
  icon?: ReactNode;
};

export type ButtonTransparentProps = ButtonBaseProps & ButtonIconProps;
