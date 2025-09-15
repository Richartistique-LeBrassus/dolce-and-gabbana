import { Pause, Play } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const CollectionVideo = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    <section className="relative w-full h-[101vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          controls
          loop
        >

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

        <source src="/videos/flower-collection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
    </section>

  )
}

export default CollectionVideo