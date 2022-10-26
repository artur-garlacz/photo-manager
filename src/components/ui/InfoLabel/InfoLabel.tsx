import {ReactNode} from 'react';
import cx from 'classnames';

type InfoLabelProps = {
    label: string;
    children: ReactNode | ReactNode[];
    className?: string;
};

export function InfoLabel({label, children, className}: InfoLabelProps) {
    return (
        <div className={cx('flex flex-col', className)}>
            <label className="text-gray-400 text-xs mb-1">{label}</label>
            <span className="flex items-center px-4 h-10 text-sm border border-gray-300 text-gray-900 rounded-3xl bg-gray-100 w-full box-border">
                {children}
            </span>
        </div>
    );
}
