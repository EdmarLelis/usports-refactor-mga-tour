import React from 'react';
import { ProductCard } from '../ui/ProductCard';
import { products } from '../../data/Products';

const data = [... products]

export const Products: React.FC = () => {
  return (
    <section className="bg-brand-gray pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-brand-orange font-bold tracking-[0.2em] uppercase text-sm mb-2">
            Nossa Linha
          </h2>
          <h3 className="text-4xl md:text-5xl font-black italic uppercase text-white">
            Produtos <span className="text-brand-orange">Oficiais</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <ProductCard key={product.id} {...product} type="static" />
          ))}
        </div>
      </div>
    </section>
  );
};
