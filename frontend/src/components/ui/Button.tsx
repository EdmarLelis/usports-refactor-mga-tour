import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 flex items-center justify-center';

  const variants = {
    primary:
      'bg-brand-orange text-brand-gray rounded-full shadow-[inset_0_0_1px_orange,0_0_10px_orange] flex items-center justify-center leading-none transition-transform transition-colors duration-200 hover:brightness-110 hover:text-white hover:scale-103 cursor-pointer',
    outline:
      'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
