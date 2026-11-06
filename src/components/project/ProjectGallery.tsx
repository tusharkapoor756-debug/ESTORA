'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  return (
    <div className="space-y-6">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden bg-[#202A27] shadow-sm hover:shadow-xl transition-all"
          >
            <Image
              src={img}
              alt={`${title} Architectural View ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="inline-flex items-center gap-2 bg-[#202A27]/90 text-white px-4 py-2 text-xs uppercase tracking-wider backdrop-blur-sm">
                <Maximize2 className="w-3.5 h-3.5 text-[#A88B65]" />
                View Full
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-[#202A27]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-[#A88B65] p-2 focus:outline-none z-50"
            aria-label="Close Gallery Lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-[#A88B65] p-3 rounded-full bg-black/40 hover:bg-black/60 focus:outline-none z-50 hidden sm:block"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-[#A88B65] p-3 rounded-full bg-black/40 hover:bg-black/60 focus:outline-none z-50 hidden sm:block"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh] flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-full">
              <Image
                src={images[selectedIndex]}
                alt={`${title} large view`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center text-xs uppercase tracking-[0.25em] text-[#F3F0E9]/80">
              {title} — View {selectedIndex + 1} of {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

