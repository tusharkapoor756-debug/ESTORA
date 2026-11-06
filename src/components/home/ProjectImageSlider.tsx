'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/types';

interface ProjectImageSliderProps {
  project: Project;
}

export function ProjectImageSlider({ project }: ProjectImageSliderProps) {
  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.heroImage];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden shadow-2xl bg-[#161D1B] group">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[index]}
            alt={`${project.title} View ${index + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

      {/* Top Left Status Badge */}
      <div className="absolute top-6 left-6 bg-[#202A27]/90 backdrop-blur-md px-4 py-1.5 border border-white/10 text-[11px] uppercase tracking-[0.2em] text-[#A88B65]">
        {project.status}
      </div>

      {/* Slide Counter for this specific project */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-6 z-20 flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10 text-white text-[10px]">
          <span className="text-[#A88B65] font-serif text-xs">0{index + 1}</span>
          <span className="text-white/40">/ 0{images.length}</span>
          <div className="flex space-x-1 pl-2 border-l border-white/20">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIndex(i);
                }}
                className={`h-1 transition-all ${
                  index === i ? 'w-4 bg-[#A88B65]' : 'w-1.5 bg-white/40'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Corner Hover Indicator */}
      <Link
        href={`/projects/${project.slug}`}
        className="absolute bottom-6 right-6 w-12 h-12 bg-[#A88B65] hover:bg-[#8F724E] text-white flex items-center justify-center transition-all duration-300 shadow-xl"
        title="View Project Dossier"
      >
        <ArrowUpRight className="w-5 h-5" />
      </Link>
    </div>
  );
}

