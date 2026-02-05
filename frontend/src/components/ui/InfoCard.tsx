import React, { type HTMLAttributes } from 'react';

type InfoCardProps = {
  icon?: string;
  title: string;
  message: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const InfoCard: React.FC<InfoCardProps> = ({
  icon = '⚠️',
  title,
  message,
  className = '',
  style,
  ...props
}) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-gray p-10">
      <div
        className={`
          flex flex-col items-center gap-4 
          rounded-xl border-2 border-brand-orange 
          bg-brand-light-gray px-10 py-8 
          text-center shadow-lg ${className}
        `}
        style={style}
        {...props}
      >
        <span className="text-4xl">{icon}</span>
        <p className="text-lg font-semibold text-brand-orange">{title}</p>

        <div className="text-sm text-gray-300">{message}</div>
      </div>
    </div>
  );
};

export default InfoCard;