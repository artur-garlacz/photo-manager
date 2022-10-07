import {ReactNode} from 'react';
import cx from 'classnames';

type InfoLabelProps = {
    label: string;
    children: ReactNode | ReactNode[];
    className?: string;
};

export function InfoLabel({label, children, className}: InfoLabelProps) {
    return (
        <div className={cx('flex flex-col border-b-1 border-b-gray-200', className)}>
            <label className="text-gray-400 text-xs mb-1">{label}</label>
            <span className="text-sm">{children}</span>
        </div>
    );
}
