import React from 'react';
import cx from 'classnames';
import Button, {ButtonProps} from '../Button';

type TabsChild = React.ReactElement<ButtonProps<'button'>, typeof Button>;

export type TabsProps = {
    className?: string;
    children: TabsChild | TabsChild[];
};

export function Tabs({className, children}: TabsProps) {
    return (
        <div className={cx('flex items-center', className)} role={'tablist'}>
            {React.Children.map(children, (child, i) =>
                React.cloneElement(
                    child,
                    {
                        ...child.props,
                        className: cx(
                            'flex flex-grow justify-center py-2.5 border-gray-200 text-tab',
                            child.props.className
                        ),
                        role: 'tab'
                    },
                    child.props.children
                )
            )}
        </div>
    );
}
