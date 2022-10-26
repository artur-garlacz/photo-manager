type StringInputProps = {
    maxLength?: number;
    step?: undefined;
    type?: 'text' | 'password';
    showControls?: undefined;
};

type NumberInputProps = {
    maxLength?: undefined;
    step?: number;
    type: 'number';
    showControls?: boolean;
};

export type InputProps = {
    value?: string | number;
    label?: string;
    tooltip?: string;
    error?: string | undefined | null | false;
    className?: string;
    inputClassName?: string;
    children?: React.ReactElement | React.ReactElement[] | false;
} & (StringInputProps | NumberInputProps) &
    Omit<
        React.HTMLProps<HTMLInputElement>,
        'value' | 'label' | 'maxLength' | 'type' | 'children'
    >;
