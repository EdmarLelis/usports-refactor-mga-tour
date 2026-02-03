import React, { type CSSProperties } from 'react';

interface DividerProps {
  color?: string;
  thickness?: string;
  width?: string;
  className?: string;
  style?: CSSProperties;
}

const Divider: React.FC<DividerProps> = ({
  color = 'border-brand-orange',
  thickness = 'border-t-2',
  width = 'w-full',
  className = '',
  style,
}) => {
  return (
    <hr
      className={`${thickness} ${color} ${width} my-4 ${className}`}
      style={style}
    />
  );
};

export default Divider;
