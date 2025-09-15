'use client';
import { Pause, Play } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

const Banner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Sync the isPlaying state with the video playback status
  const handlePlay = () => {
    if (!videoRef.current) return;
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (!videoRef.current) return;
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (!videoRef.current) return;

    // Set the isPlaying state when the video starts or stops
    videoRef.current.addEventListener("play", handlePlay);
    videoRef.current.addEventListener("pause", handlePause);

    // Cleanup event listeners on component unmount
    return () => {
      videoRef.current?.removeEventListener("play", handlePlay);
      videoRef.current?.removeEventListener("pause", handlePause);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current?.paused === false) {
      setIsPlaying(true);
    }
  }, []);

  return (
    <div className='w-full min-h-fit'>
      <div className="relative w-full h-[12vh] mb-6">
       <video 
         autoPlay
         muted
         loop
         src="/videos/banner.mp4"
         className="w-full h-full object-cover object-center sm:scale-100 align-middle
         overflow-hidden grayscale"
       />
      </div>

      <div className="w-full flex justify-center items-center pt-7 px-9">
        <div className="flex flex-wrap justify-center items-center gap-5 
        text-xs text-stone-50 tracking-wider hover:cursor-pointer">
          <a className='hover:underline'>DOLCEGABBANE.COM</a>
          <a className='hover:underline'>ALTA MODA</a>
          <a className='hover:underline'> BOUTIQUES</a>
          <a className='hover:underline'>SUSTAINABILITY</a>
          <a className='hover:underline'>DG MARTINI ®</a>
        </div>
      </div>

      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className="absolute bottom-10 left-10 z-20 flex items-center justify-center 
        w-12 h-12 bg-transparent hover:cursor-pointer
        transition"
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 text-neutral-200" />
        ) : (
          <Play className="w-4 h-4 text-neutral-200 ml-[2px]" />
        )}
      </button>
    </ div>
  );
};

export default Banner;