import React from 'react';
import cx from 'classnames';
import { InputProps } from './Input.types';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      label,
      error,
      className,
      inputClassName,
      disabled,
      maxLength,
      type,
      step,
      tooltip,
      children,
      onChange,
      showControls = false,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cx('flex flex-col', className)} role={'region'} aria-label={props.name}>
        {label && (
          <div className={'flex mb-3 justify-between items-center'}>
            <label className={'text-sm'} htmlFor={props.id}>
              {label}
            </label>
          </div>
        )}

        <div className={cx('flex flex-row items-center bg-white', inputClassName)}>
          <div
            className={cx(
              { 'bg-gray-200': disabled },
              {
                'border-red': error,
                'border-gray-300 focus-within:border-primary': !error,
              },
              'flex flex-row items-center px-2 flex-auto rounded-3xl border box-border transition',
            )}
          >
            <input
              ref={ref}
              className={cx(
                { 'text-center': type === 'number' && showControls },
                { 'bg-gray-200': disabled },
                'h-12 px-4 text-sm text-gray-900 rounded-3xl placeholder-gray-600 transition focus:outline-none focus:ring-0 inline-none w-full border-none',
              )}
              value={value}
              disabled={disabled}
              maxLength={maxLength}
              onChange={onChange}
              type={'text'}
              step={step}
              {...props}
            />

            {/* {React.Children.map(children, (child) => {
              if (
                !child ||
                (child as React.ReactElement<InputIconProps, typeof InputIcon>).props.placement !==
                  'right'
              ) {
                return null;
              }

              return React.cloneElement(
                child as React.ReactElement<InputIconProps, typeof InputIcon>,
                {
                  role: 'figure',
                  className: cx(
                    'flex items-center justify-center h-12 px-2',
                    (child as React.ReactElement<InputIconProps, typeof InputIcon>).props.className,
                  ),
                },
              );
            })} */}
          </div>
        </div>

        {(!!error || !!maxLength) && (
          <div
            className={cx(
              { 'justify-between': !!error, 'justify-end': !error },
              { 'mx-8': !!step },
              'flex flex-row mt-2.5 text-form-helper',
            )}
          >
            {error && (
              <span className={'tracking-tight text-red'} role={'alert'} aria-label={'error'}>
                {error}
              </span>
            )}

            {maxLength && type !== 'text' && (
              <span
                className={'tracking-tight text-gray-600'}
                role={'status'}
                aria-label={'length'}
              >
                {`${value?.length ?? 0}/${maxLength}`}
              </span>
            )}
          </div>
        )}
      </div>
    );
  },
);
