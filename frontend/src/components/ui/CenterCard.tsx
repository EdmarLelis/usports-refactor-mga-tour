import React, { type ReactNode, type CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  bg?: string;
  border?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', style, bg = 'bg-brand-light-gray', border = 'border-2 border-brand-orange'}) => {
  return (
      <div
        className={`
          flex flex-col items-center gap-4 
          rounded-xl ${border}
          ${bg} px-10 py-8 text-center 
          shadow-lg ${className}
          `}
        style={style}
      >
        {children}
      </div>
  );
};

export default Card;
