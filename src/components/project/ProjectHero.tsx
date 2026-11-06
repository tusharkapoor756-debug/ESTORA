'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Building2, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/types';

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.heroImage];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-end overflow-hidden bg-[#202A27]">
      {/* Background Auto-Slide */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`${project.title} View ${currentIndex + 1}`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#202A27] via-[#202A27]/50 to-black/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Gallery Dots & Controls */}
      {images.length > 1 && (
        <div className="absolute top-28 right-6 sm:right-12 z-20 flex items-center space-x-3 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 text-white text-xs">
          <span className="text-[#A88B65] font-serif text-sm">0{currentIndex + 1}</span>
          <span className="text-white/40">/ 0{images.length}</span>
          <div className="flex items-center space-x-1 pl-2 border-l border-white/20">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="p-1 hover:text-[#A88B65]"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
              className="p-1 hover:text-[#A88B65]"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 w-full text-white space-y-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A88B65] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Developments</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="bg-[#A88B65] text-white text-[11px] uppercase tracking-[0.2em] px-3.5 py-1">
            {project.status}
          </span>
          <span className="bg-white/10 backdrop-blur-md text-white text-[11px] uppercase tracking-wider px-3.5 py-1 border border-white/20">
            {project.category}
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-white leading-tight">
          {project.title}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm text-[#F3F0E9]/80 font-light pt-2">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-[#A88B65]" />
            <span>{project.location}, {project.city}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Building2 className="w-4 h-4 text-[#A88B65]" />
            <span>Arch: {project.architect}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-[#A88B65]" />
            <span>Delivery: {project.completionYear}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

