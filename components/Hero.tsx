'use client';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 1 },
      {
        scale: 1.1,
        duration: 10,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 2,
        ease: 'power2.out',
        delay: 0.5,
      }
    );
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src="/img/flower-bg.webp"
          alt="Serpent Bohème Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <div
        ref={textRef}
        className="absolute inset-0
        flex flex-col items-center justify-center
        z-10 text-white text-3xl font-semibold
        gap-2 text-center opacity-0 blur-md translate-y-5"
      >
        <h2 className='text-xs tracking-wider'>Dolce & Gabbana Presents</h2>
        <h1 className='text-4xl'>Swinging Sixties'</h1>
        <h2 className='text-base'>Flower Power Collection</h2>
      </div>
    </section>
  );
};

export default Hero;