import React from 'react';

import futsalLogo from '../../assets/linksClubes01.png';
import cbfsLogo from '../../assets/linksClubes02.png';
import adefLogo from '../../assets/linksClubes03.png';
import fesuLogo from '../../assets/linksClubes04.png';
import lffLogo from '../../assets/linksClubes05.png';

const partners = [
  { id: 1, name: 'Futsal', logo: futsalLogo },
  { id: 2, name: 'CBFS', logo: cbfsLogo },
  { id: 3, name: 'ADEF', logo: adefLogo },
  { id: 4, name: 'FESU', logo: fesuLogo },
  { id: 5, name: 'LFF', logo: lffLogo },
];

export const Partners: React.FC = () => {
  return (
    <section className="bg-brand-gray pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="
                w-[clamp(80px,15vw,120px)] 
                aspect-square 
                bg-brand-orange 
                rounded-[1.5rem] 
                flex items-center justify-center 
                p-4 
                cursor-pointer
                transition-transform duration-200
                hover:scale-110
                hover:shadow-[0_0_25px_rgba(255,153,0,0.4)]
              "
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-[90%] max-h-[90%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
