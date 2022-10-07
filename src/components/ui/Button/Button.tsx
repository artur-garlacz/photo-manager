import cx from 'classnames';
import {ComponentPropsWithoutRef, createElement, ElementType} from 'react';

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
                    'bg-black text-white': variant === 'primary',
                    'bg-transparent hover:text-gray-500': variant === 'secondary',
                    'border-1 border-black': outline
                },
                'flex justify-center items-center px-3 py-2 rounded-md w-20 text-xs',
                className
            ),
            ...props
        },
        children
    );
};
