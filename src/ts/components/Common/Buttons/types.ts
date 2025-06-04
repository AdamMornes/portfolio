import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonBaseProps = ButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    isAnchor?: boolean;
  };

export type ButtonIconProps = ButtonBaseProps & {
  hideIcon?: boolean;
};

export type ButtonTransparentProps = ButtonBaseProps & ButtonIconProps;
