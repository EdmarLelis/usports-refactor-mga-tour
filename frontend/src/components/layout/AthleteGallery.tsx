import React, { useRef, useState, useLayoutEffect } from 'react';
import athleteImage1 from '../../assets/athleteImg1.png';
import athleteImage2 from '../../assets/athleteImg2.png';
import athleteImage3 from '../../assets/athleteImg3.png';
import athleteImage4 from '../../assets/athleteImg4.png';
import athleteImage5 from '../../assets/athleteImg5.png';
import { ArrowButton } from '../ui/ArrowButton';

const athletes = [
  { id: 1, img: athleteImage1 },
  { id: 2, img: athleteImage2 },
  { id: 3, img: athleteImage3 },
  { id: 4, img: athleteImage4 },
  { id: 5, img: athleteImage5 },
];

export const AthleteGallery: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollWidth, clientWidth } = carouselRef.current;
      setCanScroll(scrollWidth > clientWidth + 1);
    }
  };

  useLayoutEffect(() => {
    checkScrollability();
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(checkScrollability);
    });

    if (carouselRef.current) {
      resizeObserver.observe(carouselRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const card = container.firstElementChild as HTMLElement;
    if (!card) return;

    const scrollAmount = card.offsetWidth + 16;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-brand-gray py-12 overflow-hidden w-full">
      <div className="relative max-w-9xl mx-auto px-6">
        {canScroll && (
          <>
            <ArrowButton direction="left" onClick={() => scroll('left')} />
            <ArrowButton direction="right" onClick={() => scroll('right')} />
          </>
        )}

        <div
          ref={carouselRef}
          className={`
            flex items-center gap-4
            snap-x snap-mandatory
            px-4 py-6
            ${canScroll ? 'overflow-x-auto justify-start' : 'overflow-x-hidden justify-center'}
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          `}
        >
          {athletes.map((athlete) => (
            <div
              key={athlete.id}
              className="
                snap-center
                shrink-0
                w-[clamp(180px,22vw,240px)]
                aspect-[3/5]
                rounded-[1rem]
                overflow-hidden
                cursor-pointer
                transition-transform duration-200
                hover:scale-[1.04]
              "
            >
              <img
                src={athlete.img}
                alt="Atleta Usports"
                className="w-full h-full object-cover grayscale-50 hover:grayscale-0 transition-all duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
