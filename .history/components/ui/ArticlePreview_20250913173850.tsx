'use client';
import Image from 'next/image';
import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

interface ArticlePreviewProps {
  date: string;
  category: string;
  title: string;
  imageSrc: string;
  alt: string;
}

gsap.registerPlugin(ScrollTrigger);

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  date,
  category,
  title,
  imageSrc,
  alt
}) => {

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
    <div className="relative flex flex-col gap-3 sm:gap-5 xl:max-w-fit xl:gap-4 
    lg:h-[360px] lg:w-[400px]
    xl:h-[360px] xl:w-[470px]
    h-auto w-full">
      <div className="flex-[0.7] relative overflow-hidden w-full rounded-xl">
        <Image
          src={imageSrc}
          alt={alt}
          width={800}
          height={600}
          className="object-cover w-full h-full filter grayscale"
        />
      </div>
    
      <div className="flex flex-col justify-between gap-2 xl:gap-0
      flex-[0.3] md:flex-[0.2] xl:flex-[0.3]">
    
        <div className="inline-flex justify-between">
          <div className="text-zinc-400 text-sm">
            <p>
              {date.split(' ')[0]}{' '}
              <span className="font-serif font-bold">{date.split(' ')[1]}</span>
            </p>
          </div>
    
          <div className="border-stone-50 border-l-2 border-r-2 text-stone-50 px-4 text-sm">
            <p>{category.toUpperCase()}</p>
          </div>
        </div>
    
        <div
          ref={(el) => {
            if (el && !paragraphRefs.current.includes(el)) {
              paragraphRefs.current.push(el);
            }
          }}
          className="text-stone-50 text-[16px] md:text-xl xl:text-2xl font-thin 
          md:w-[90%] min-h-[4.5rem] flex items-start"
        >
          <p>{title}</p>
        </div>
    
      </div>
    </div>    
  );
};

export default ArticlePreview;