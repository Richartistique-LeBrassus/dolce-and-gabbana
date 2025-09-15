'use client';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FC } from 'react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const About: FC = () => {
  const paragraphRefs = useRef<HTMLParagraphElement[]>([]);
  paragraphRefs.current = [];

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'top top',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    });

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
    <section id="about" className="relative min-h-fit w-screen">
      <div className="relative text-stone-50
      mb-20 mt-36 flex flex-col items-center gap-9 font-serif">

        <div className='flex flex-wrap items-center justify-center sm:justify-evenly gap-y-3 gap-x-5 
        h-5 text-xs px-5 w-full md:px-16 lg:px-20 xl:px-28 mb-10 sm:mb-10'>
          <div className=''>
            <button 
              type="button" 
              className="pr-5 py-1 bg-black border-r
              text-white hover:underline transition
              tracking-wide
              "
            >
              #FASHION-TIPS
            </button>
            <button 
              type="button" 
              className="pr-5 pl-3 py-1 bg-black border-r
              text-white hover:underline transition"
            >
              #TRENDS
            </button>
          </div>
          <div>
          <p className='self-center pl-5'>
            Flower Power: the new Spring-Summer 2025 Collection
          </p>
        </div>
        </div>

        <div className='font-sans'>
          <p>May <span className='font-serif'> 2025</span></p>
        </div>

        <div
          ref={(el) => {
            if (el && !paragraphRefs.current.includes(el)) {
              paragraphRefs.current.push(el);              
             }
          }}
          className="flex flex-col mt-5 text-center  leading-[1.2] sm:px-32
          font-bold md:text-3xl lg:text-5xl xl:text-6xl w-[90vw] sm:w-full
          text-xl sm:text-2xl"
        >
          <span className='font-thin leading-20'>
            Flower Power: Explore the New <br /> Spring~Summer Collection
          </span>
        </div>     

        <div>
          <h2 className='text-stone-400 tracking-wide
           text-sm lg:text-xl text-center w-full px-5'>
            Dolce&Gabbana Embrace the Swinging '60s Vibe
          </h2>
        </div>

        <div className='inline-flex font-sans gap-3 text-[10px] sm:text-xs'>
          <button 
            type="button" 
            className="px-2 sm:px-3 py-1 bg-black border rounded-lg
            text-white hover:bg-neutral-800 hover:underline transition"
          >
            #FASHION-TIPS
          </button>
          <button 
            type="button" 
            className="px-2 sm:px-6 py-3 bg-black border rounded-lg
            text-white hover:bg-neutral-800 hover:underline transition"
          >
            #TRENDS
          </button>
        </div>  
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path absolute
        left-1/2 top-0 z-20 h-[60vh] origin-center
        -translate-x-1/2 overflow-hidden rounded-3xl
        w-96 md:w-[30vw]">
          <img
            src="/img/face.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;