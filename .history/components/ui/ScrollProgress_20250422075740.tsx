'use client';
import { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[999] bg-transparent">
      <div
        className="h-full bg-white transition-all duration-75 ease-linear"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};