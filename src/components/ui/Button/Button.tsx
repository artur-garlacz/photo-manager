import cx from 'classnames';
import { ComponentPropsWithoutRef, createElement, ElementType } from 'react';

type ButtonProps<T extends ElementType> = {
  variant?: 'primary' | 'secondary';
  size?: 'lg' | 'sm' | 'xs';
  outline?: boolean;
  className?: string;
  children: string | React.ReactElement;
  renderAs?: T;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = 'button'>({
  variant = 'primary',
  size = 'sm',
  outline = false,
  className,
  renderAs,
  children,
  ...props
}: ButtonProps<T>) => {
  return createElement(
    renderAs ?? 'button',
    {
      className: cx(
        {
          'bg-black': variant === 'primary',
          'bg-transparent': variant === 'secondary',
        },
        'flex justify-center items-center',
        className,
      ),
      ...props,
    },
    children,
  );
};
