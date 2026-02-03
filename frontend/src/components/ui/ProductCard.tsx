import React from 'react';

type ProductCardType = 'default' | 'static';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  type?: ProductCardType;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  type = 'default',
}) => {
  const showDetails = type === 'default';

  return (
    <div className="group bg-[#F5F5F5] rounded-[0.5rem] p-6 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="w-full aspect-square mb-6 overflow-hidden flex items-center justify-center p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="mt-auto">
        <h3
          className="
          text-black font-black 
          text-xl uppercase 
          italic tracking-tighter 
          mb-2 line-clamp-2 
          min-h-[3rem]
          "
        >
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {showDetails && (
          <div className="h-0 overflow-hidden group-hover:h-8 transition-all duration-300 mt-0 group-hover:mt-4">
            <span className="text-brand-orange font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              Ver detalhes <span>&rarr;</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
