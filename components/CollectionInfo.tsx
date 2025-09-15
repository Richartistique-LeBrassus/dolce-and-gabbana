'use client';
import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const CollectionInfo = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageRefs = useRef<HTMLDivElement[]>([]); // This is a ref to hold the image div elements
  const textRef = useRef<HTMLDivElement>(null);
  const paragraphRefs = useRef<HTMLParagraphElement[]>([]);
  paragraphRefs.current = [];

  useEffect(() => {
    imageRefs.current.forEach((img) => {
      gsap.to(img, {
        scale: 1.15,
        scrollTrigger: {
          trigger: img,
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
        },
        ease: 'power2.out',
      });
    });

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

    paragraphRefs.current.forEach((p) => {
        // Set initial state
        gsap.set(p, { skewY: 10, opacity: 0, y: 30 });
    
        const inAnim = () => {
          gsap.to(p, {
            skewY: 0,  // Reset skew on scroll in
            opacity: 1,  // Fade in
            y: 0,  // Move to the original position
            duration: 1,
            ease: "power2.out",
          });
        };
    
        const outAnim = () => {
          gsap.to(p, {
            opacity: 0,  // Fade out
            y: 30,  // Move down slightly while fading out
            duration: 0.6,
            ease: "power2.inOut",
          });
        };
    
        ScrollTrigger.create({
          trigger: p,
          start: "top 90%",
          end: "bottom 60%",
          onEnter: inAnim,
          onLeaveBack: outAnim,
          onEnterBack: inAnim,
          onLeave: outAnim,
        });
      });

  }, []);

  return (
    <div className='min-h-screen w-full'>
      <div className='pt-4 pb-3
      flex flex-row justify-between px-3 sm:px-7 lg:px-12 2xl:px-32 
      w-full border-t-[0.1px] border-b-[0.1px] text-stone-50
      '>

        <div className='inline-flex gap-5 invisible sm:visible
        xl:gap-10'>
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-4 h-4 xl:w-5 xl:h-5
            text-gray-50 hover:text-blue-600 transition" />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-4 h-4 xl:w-5 xl:h-5 
            text-gray-50 hover:text-pink-500 transition" />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-4 h-4 xl:w-5 xl:h-5 
            text-gray-50 hover:text-sky-400 transition" />
          </a>
          <a
            href="https://Linkedin.com"
            aria-label="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4 xl:w-5 xl:h-5 
            text-gray-50 hover:text-sky-400 transition" />
          </a>
        </div>

        <div className='absolute left-1/2 transform
           -translate-x-1/2 '>
          <p className='text-sm font-thin tracking-wide'>
            May <span className='font-serif'>2025</span>
          </p>
        </div>

        <div>
          <p className='text-[9px] lg:text-xs font-thin tracking-wide'>
            <span className='font-serif text-base lg:text-xl'>2 </span>
            Min. Read
          </p>
        </div>
      </div>

      <div 
        ref={(el) => {
          if (el && !paragraphRefs.current.includes(el)) {
            paragraphRefs.current.push(el);              
           }
        }}
        className="relative font-bold px-9 xl:px-32 2xl:w-[66vw]
           left-1/2 transform -translate-x-1/2 text-stone-50 font-serif
           mt-20">
          <p>
            The allure of the sixties makes a powerful 
            comeback with the latest Flower Power SS24 Collection, 
            portrayed by Lulu Tenney in the captivating shots by Steven Meisel, 
            under the artistic direction of Fabien Baron. It whisks us away to a 
            remarkable era where art, cinema, theatre, and photography left an 
            indelible mark on an unforgettable epoch. This selection draws inspiration 
            from the cultural revolution of that time, weaving a unique and captivating story.
          </p>
      </div>

      <div className="flex flex-col xl:px-32 py-44 
      gap-8 lg:gap-44 xl:gap-0">

        <div className="grid grid-cols-1 lg:grid-cols-2
        gap-7 sm:gap-12 md:gap-20 xl:gap-0">
          <div
            ref={(el) => {
              if (el) imageRefs.current.push(el); // Push image div into ref array
            }}
            className="w-[100vw] h-auto lg:w-[50vw] lg:h-auto 
            xl:w-[35vw] xl:h-[75vh]
            relative overflow-hidden"
          >
            <Image
              src="/img/pose.jpg"
              alt="Description"
              width={800}
              height={600}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center text-stone-50 p-8">
            <h2 className="xl:text-xl font-light mb-6">
              The Beauty of Blooms
            </h2>
            <p 
              ref={(el) => {
                if (el && !paragraphRefs.current.includes(el)) {
                  paragraphRefs.current.push(el);                    
                 }
              }}
              className="text-sm xl:text-base font-light leading-7 tracking-widest font-serif"
            >
              The upcoming spring-summer season playfully embraces the
              elegance and austerity of the iconic
              <span className="font-bold"> 1960s</span>, evoking a
              graphic richness conveyed through sleek, linear, and lightweight
              designs. Roses, anemones, and floral bouquets take turns gracing
              sensuous, stretch satin sheath dresses. Meanwhile, short and long
              printed silk chiffon dresses move with grace, embellished with
              bows and ruffles. Brocade kimonos and coats add a touch of luxury
              to the ensemble. Furthermore, cotton takes the lead in low-rise
              cigarette trousers, half-sleeve crop poplin shirts, bustiers,
              dresses, and generous A-line skirts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 
        gap-2 sm:gap-12 md:gap-20 xl:gap-20">
          <div className="flex flex-col justify-center text-stone-50 p-8 px-">
            <h2 className="xl:text-xl font-light mb-6">
              Accessories with a Story to Tell
            </h2>
            <p 
              ref={(el) => {
              if (el && !paragraphRefs.current.includes(el)) {
                  paragraphRefs.current.push(el);                    
                }
              }}
            className="text-sm xl:text-base font-light leading-7 tracking-widest font-serif"
            >
              In a flawless blend of grace and sensuality, handbags and
              low-heeled shoes, available in solid colours and coordinating
              prints, exude the elegance reminiscent of
              <span className="font-bold"> 1960s</span> fashion. Paired
              with era-defining scarves and patterned stockings, these accessories
              embellish every creation with timeless allure.
            </p>
          </div>

          <div
            ref={(el) => {
              if (el) imageRefs.current.push(el); // Push image div into ref array
            }}
            className="w-[100vw] h-auto lg:w-[45vw] lg:h-auto 
            xl:w-[35vw] xl:h-[75vh]
            relative overflow-hidden"
          >           
            <Image
              src="/img/bag.jpg"
              alt="Description"
              width={800}
              height={600}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 mt-6 xl:mt-0
        gap-7 sm:gap-12 md:gap-20 xl:gap-20">
          <div
            ref={(el) => {
              if (el) imageRefs.current.push(el); // Push image div into ref array
            }}
            className="w-[100vw] h-auto lg:w-[40vw] lg:h-[85vh]
            xl:w-[35vw] xl:h-[75vh] 
            relative overflow-hidden"
          >            
            <Image
              src="/img/lips.jpg"
              alt="Description"
              width={800}
              height={600}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center text-stone-50 p-8">
            <h2 className="xl:text-xl font-light mb-6 ">
              Eternal Femininity
            </h2>
            <p 
              ref={(el) => {
                  if (el && !paragraphRefs.current.includes(el)) {
                    paragraphRefs.current.push(el);                    
                   }
              }}
            className="text-sm xl:text-base font-light leading-7 tracking-widest font-serif"
            >
              Domenico Dolce and Stefano Gabbana pay tribute to the
              <span className="font-bold"> 1960s</span>, timeless
              beauty, and enduring femininity with this unique floral collection,
              offering a promise of joy, vitality, and uniqueness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionInfo;