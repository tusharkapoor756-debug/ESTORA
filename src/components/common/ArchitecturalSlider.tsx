'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ArchitecturalSliderProps {
  images: { url: string; caption: string }[];
  aspectRatio?: string;
  interval?: number;
}

export default function ArchitecturalSlider({
  images,
  aspectRatio = 'aspect-[21/9]',
  interval = 5000,
}: ArchitecturalSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative ${aspectRatio} w-full overflow-hidden bg-[#202A27] shadow-xl`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[index].url}
            alt={images[index].caption}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Caption & Dots */}
      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-white text-xs">
        <span className="uppercase tracking-[0.25em] text-[#F3F0E9]/90 drop-shadow-md">
          {images[index].caption}
        </span>
        <div className="flex space-x-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 transition-all duration-300 rounded-none ${
                index === i ? 'w-6 bg-[#A88B65]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

