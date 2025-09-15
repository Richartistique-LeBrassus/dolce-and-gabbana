'use client';
import React from 'react'
import Image from 'next/image'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const CreditsAndExpansion = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageRefs = useRef<HTMLDivElement[]>([]); 
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
        gsap.set(p, { skewY: 10, opacity: 0, y: 30 });    
        const inAnim = () => {
          gsap.to(p, {
            skewY: 0,  
            opacity: 1,  
            y: 0,  
            duration: 1,
            ease: "power2.out",
          });
        };
    
        const outAnim = () => {
          gsap.to(p, {
            opacity: 0,  
            y: 30,  
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
    <section className='relative w-full min-h-fit py-14'>
          <div className='flex flex-col italic text-white px-7 lg:px-16 xl:px-32
             text-xs xl:text-sm tracking-wide leading-6 mb-32'>
            <p>Photography ~ Steven Meisel</p>
            <p>Art Direction ~ Fabien Baron</p>
            <p>Talent ~ Lulu Tenney</p>
            <p>Styling ~ Karl Templer</p>
            <p>Hair ~ Guido Palau</p>
            <p>Makeup ~ Path McGrath</p>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2
        gap-24 lg:gap-0">
          <div
            ref={(el) => {
              if (el) imageRefs.current.push(el); 
            }}
            className="w-[100vw] h-auto lg:w-[40vw] 
            xl:w-[30vw] xl:h-[57vh] 
            relative overflow-hidden"
          >
            <div className="shimmer-effect absolute inset-0 "></div>
            <Image
              src="/img/heels.jpg"
              alt="Description"
              width={800}
              height={600}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-center text-stone-50 p-8
          lg:p-0 lg:w-[45vw]
           text-center gap-4 xl:gap-1">
            <h2 className="xl:text-lg font-light mb-6">
              Discover the Charm of Flower Power Spring-Summer 
              <span className='font-serif font-bold'> 2024</span>
            </h2>
            <p 
              ref={(el) => {
                if (el && !paragraphRefs.current.includes(el)) {
                  paragraphRefs.current.push(el);                    
                 }
              }}
              className="text-sm xl:text-base font-light leading-7 tracking-widest font-serif
              mb-11"
            >
              Floral patterns, bold silhouettes and retro inspired 
              accessories reimagine a timeless feminine aesthetic.
            </p>

           <div>
             <button 
               type="button" 
               className="text-xs w-fit
               py-4 px-6 bg-black text-white border-[0.1px] border-stone-50
               rounded-lg hover:bg-zinc-900 transition"
             >
               Discover the Collection
             </button>
           </div>
          </div>
        </div>
    </section>
  )
}

export default CreditsAndExpansion