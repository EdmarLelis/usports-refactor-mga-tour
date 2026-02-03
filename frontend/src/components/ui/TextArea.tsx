import React, { type TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="text-white text-sm font-bold ml-1 mb-2 block"
      >
        {label}
      </label>
      <textarea
        id={id}
        className={`w-full bg-brand-light-gray text-white rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-orange transition-all resize-none placeholder:text-gray-400 ${className}`}
        {...props}
      />
    </div>
  );
};
