import cx from 'classnames';
import {ComponentPropsWithoutRef, createElement, ElementType} from 'react';

export type ButtonProps<T extends ElementType> = {
    variant?: 'primary' | 'secondary' | 'custom';
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
                    'bg-transparent hover:text-white hover:bg-black': variant === 'secondary',
                    '': variant === 'custom',
                    'border-1 border-gray-200': outline
                },
                'flex justify-center items-center px-3 py-2 rounded-md min-w-20 text-xs font-semibold ease-in-out duration-200',
                className
            ),
            ...props
        },
        children
    );
};
