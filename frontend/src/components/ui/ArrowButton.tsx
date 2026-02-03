import React from 'react';

type ArrowButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
};

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClick,
}) => {
  const isLeft = direction === 'left';

  return (
    <button
  onClick={onClick}
  aria-label={isLeft ? 'Scroll left' : 'Scroll right'}
  className={`
    absolute top-1/2 -translate-y-5/6 z-10
    ${isLeft ? 'left-2 sm:left-4' : 'right-2 sm:right-4'}
    h-10 w-10
    flex items-center justify-center
    rounded-full
    bg-brand-orange/60 text-white
    transition
    hover:brightness-110
  `}
>
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {isLeft ? (
      <polyline points="15 18 9 12 15 6" />
    ) : (
      <polyline points="9 18 15 12 9 6" />
    )}
  </svg>
</button>

  );
};
