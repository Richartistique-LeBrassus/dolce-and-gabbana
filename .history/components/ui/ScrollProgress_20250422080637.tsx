'use client';
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [scrollWidth, setScrollWidth] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        setScrollWidth(scrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <div className="w-full h-[3px] bg-transparent fixed top-16 left-0 z-40">
        <div
          className="h-full bg-white transition-all duration-75 ease-linear"
          style={{ width: `${scrollWidth}%` }}
        />
      </div>
    );
  };
  