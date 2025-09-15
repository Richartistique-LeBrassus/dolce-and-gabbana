'use client';
import React from 'react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import ArticlePreview from './ui/ArticlePreview';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ReadNext = () => {
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
    <section className='w-full min-h-fit bg-zinc-900 px-5 py-20
    lg:px-20 
    xl:px-32 xl:py-36'>    
      <div className="flex flex-col gap-16 xl:gap-20">
        <h2 
          ref={(el) => {
            if (el && !paragraphRefs.current.includes(el)) {
              paragraphRefs.current.push(el);                    
             }
          }}
          className='text-white text-2xl xl:text-4xl font-thin'>
          What to read next???...
        </h2>
        
        <div className="flex flex-col md:flex-row md:flex-wrap w-full
        gap-16">
          <ArticlePreview
            date="December 2024"
            category="Lifestyle"
            title="DNA, new codes of style"
            imageSrc="/img/dna.jpg"
            alt="DNA style visual"
          />
          <ArticlePreview
            date="June 2025"
            category="Lifestyle"
            title="Iconic Dolce&Gabbana Black Sicily"
            imageSrc="/img/sicily.jpg"
            alt="Black Sicily Collection"
          />
          <ArticlePreview
            date="May 2025"
            category="Lifestyle"
            title="Nineties Nostalgia"
            imageSrc="/img/ysl-glen.avif"
            alt="Black Sicily Collection"
          />
        </div>
      </div>
    </section>
  )
}

export default ReadNext