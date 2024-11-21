import React, { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react';

interface PropTypes {
  id: string;
  type?: string;
  name: string;
  width?: string;
  minLength?: number;
  isTextArea?: boolean;
  maxLength?: number;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  label?: string;
  error?: boolean | string | undefined;
  errorText?: boolean | string | undefined;
  value: string;
  onBlur?: FocusEventHandler<HTMLTextAreaElement> | undefined;
  children?: ReactNode;
}

const CustomTextArea = ({
  id,
  name,
  disabled,
  onChange,
  label,
  maxLength,
  placeholder,
  error,
  minLength,
  errorText,
  width,
  children,
  value,
  onBlur,
}: PropTypes) => {
  return (
    <div className="relative w-full">
      {label && (
        <label
          htmlFor={id}
          className="text-xs text-neutral-800 font-semibold uppercase mb-1"
        >
          {label}
        </label>
      )}
      <textarea
        name={name}
        onBlur={onBlur}
        disabled={disabled}
        rows={4}
        minLength={minLength}
        maxLength={maxLength}
        autoComplete="off"
        id={id}
        spellCheck="false"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${
          error
            ? 'border-red-400 placeholder-red-400'
            : 'bg-gray-100 placeholder-gray-400 focus:border-gray-400 hover:border-gray-400'
        }  px-3 py-3.5 rounded-md border-[1.5px]  border-gray-200 font-medium text-gray-800 w-full relative  text-base outline-none focus:outline-none  focus:bg-white transition-all duration-300 `}
      />{' '}
      {children}
      {error && (
        <div className="text-red-500 text-[10px] font-bold flex items-center ml-1">
          <p> {errorText}</p>
        </div>
      )}
    </div>
  );
};

export default CustomTextArea;
