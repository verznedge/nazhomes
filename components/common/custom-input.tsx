import React, {
  ChangeEventHandler,
  Children,
  FocusEventHandler,
  ReactNode,
} from 'react';
import { BsInfoCircle } from 'react-icons/bs';

interface PropTypes {
  id: string;
  type?: string;
  name: string;
  width?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  label?: string;
  error?: boolean | string | undefined;
  errorText?: boolean | string | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  children?: ReactNode;
  value: string | number;
}

const InputField = ({
  id,
  type,
  name,
  onChange,
  label,
  error,
  disabled,
  children,
  placeholder,
  errorText,
  value,
  onBlur,
}: PropTypes) => {
  return (
    <div className="w-full relative">
      {label && (
        <label
          htmlFor={id}
          className="text-xs text-gray-800 font-semibold uppercase mb-1"
        >
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        onBlur={onBlur}
        id={id}
        autoComplete="off"
        min={0}
        disabled={disabled}
        spellCheck="false"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${
          error
            ? 'border-red-400 placeholder-red-400'
            : 'bg-gray-100 placeholder-gray-400 focus:border-gray-400 hover:border-gray-400'
        }  px-3 py-3 rounded-md border-[1.5px]  border-gray-200 font-medium text-gray-800 w-full relative  text-base outline-none focus:outline-none  focus:bg-white transition-all duration-300 `}
      />
      {error && (
        <div className="text-red-400 text-[10px] font-bold flex items-center ml-1">
          <p> {errorText}</p>
        </div>
      )}
      {children}
    </div>
  );
};

export default InputField;
