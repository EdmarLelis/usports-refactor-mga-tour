import React from 'react';
import bannerImg from '../../assets/hero-banner.png';

export const Banner: React.FC = () => {
  return (
    <section className="relative w-full h-auto bg-brand-dark flex flex-col items-center">
      <div className="w-full relative">
        <img
          src={bannerImg}
          alt="Usports Banner"
          className="w-full h-full object-cover lg:object-contain"
        />
      </div>
    </section>
  );
};
