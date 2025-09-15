"use client";
import { Pause, Play } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

const CollectionVideo = () => {
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
    <section className="relative w-full h-[101vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src="/videos/flower-collection.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
      </div>
    </section>
  );
};

export default CollectionVideo;