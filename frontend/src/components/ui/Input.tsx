import React, { type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  className = '',
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-white text-sm font-bold ml-1 mb-2 block"
      >
        {label}
      </label>
      <input
        id={id}
        className={`w-full bg-brand-light-gray text-white rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-orange transition-all placeholder:text-gray-400 ${className}`}
        {...props}
      />
    </div>
  );
};
