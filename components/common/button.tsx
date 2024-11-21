import React from 'react';
import { IconType } from 'react-icons';
import SmallSpinner from './small-spinner';
import { BsArrowRight } from 'react-icons/bs';

type Props = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  secondary?: boolean;
  full?: boolean;
  small?: boolean;
  icon?: IconType;
  loadingText?: string;
  isColor?: boolean;
};

function Button({
  label,
  onClick,
  disabled,
  loading,
  secondary,
  small,
  loadingText,
  full,
  icon: Icon,
  isColor,
}: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative group disabled:opacity-80 text-lg font-medium disabled:cursor-not-allowed flex justify-center items-center gap-3 rounded hover:opacity-80 transition   ${
        secondary ? 'bg-white' : 'bg-transparent'
      } ${secondary ? 'text-primary' : 'text-white'}`}
    >
      {Icon && (
        <Icon
          size={24}
          className={`absolute left-4 top-3 ${isColor && 'text-blue-600'}`}
        />
      )}
      {loading && <SmallSpinner />}
      {loading ? loadingText : label}
      <div className="group-hover:transform group-hover:translate-x-3 transition-all duration-300">
        <BsArrowRight size={25} />
      </div>
    </button>
  );
}

export default Button;
