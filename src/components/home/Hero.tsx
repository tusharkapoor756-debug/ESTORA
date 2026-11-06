'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { BrandContent, Project } from '@/types';

interface HeroProps {
  content: BrandContent;
  projects?: Project[];
}

export default function Hero({ content, projects = [] }: HeroProps) {
  // Use user's featured projects if available, otherwise default architectural showcase
  const featured = projects.filter((p) => p.featured);
  const showcaseProjects = featured.length > 0 ? featured : projects;

  const slides = showcaseProjects.map((p) => ({
    id: p.id,
    image: p.heroImage,
    title: p.title,
    location: `${p.location}, ${p.city}`,
    caption: p.shortDescription || p.tagline,
    slug: p.slug,
  }));

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-swipe every 6 seconds
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  // Guard against out of index
  const safeIndex = currentSlide >= slides.length ? 0 : currentSlide;
  const activeSlideData = slides[safeIndex] || {
    id: 'default',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop',
    title: 'The Grand Arc',
    location: 'Metropolis Central',
    caption: 'Spaces That Shape Tomorrow',
    slug: 'the-grand-arc',
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToExplore = () => {
    const el = document.getElementById('brand-intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#202A27]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Architectural Canvas with Smooth Ken-Burns Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlideData.id}
            initial={{ opacity: 0, scale: 1.07 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={activeSlideData.image}
              alt={activeSlideData.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Architectural Tone Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#202A27] via-[#202A27]/60 to-black/40" />
            <div className="absolute inset-0 bg-[#202A27]/25 backdrop-contrast-[1.05]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Project Tag Pill (Top Right on Desktop) */}
      <div className="absolute top-28 right-6 sm:right-12 z-20 hidden md:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlideData.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="bg-[#202A27]/85 backdrop-blur-md border border-white/15 px-5 py-3 text-right max-w-xs shadow-2xl"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A88B65] block">
              Featured Development
            </span>
            <Link
              href={`/projects/${activeSlideData.slug}`}
              className="font-serif text-lg text-white font-normal block hover:text-[#A88B65] transition-colors"
            >
              {activeSlideData.title}
            </Link>
            <span className="text-[11px] text-[#F3F0E9]/70 font-light block line-clamp-1">
              {activeSlideData.location}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-36 pb-20 w-full text-center sm:text-left flex flex-col justify-end min-h-screen">
        <div className="max-w-3xl space-y-6 mb-12">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-3"
          >
            <span className="w-8 h-[1px] bg-[#A88B65]" />
            <span className="text-xs uppercase tracking-[0.35em] text-[#A88B65] font-medium font-sans">
              ESTORA RESIDENTIAL ATELIER
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light leading-[1.08] tracking-tight"
          >
            {content.heroTagline}
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="text-base sm:text-lg text-[#F3F0E9]/80 max-w-xl font-light leading-relaxed"
          >
            {content.heroSubheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4"
          >
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#A88B65] hover:bg-[#8F724E] text-white px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 shadow-xl group"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-white/30 hover:border-white text-white px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 bg-white/5 backdrop-blur-sm"
            >
              <span>Discover ESTORA</span>
            </Link>
          </motion.div>
        </div>

        {/* Carousel Progress Controls Bar */}
        <div className="border-t border-white/15 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#F3F0E9]/70 font-light gap-6">
          {/* Slide Navigation & Numbering */}
          <div className="flex items-center space-x-4">
            <span className="font-serif text-lg text-white font-light tracking-wider">
              0{safeIndex + 1}
            </span>
            <div className="flex space-x-2">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`h-1.5 transition-all duration-500 rounded-none cursor-pointer ${
                    safeIndex === idx
                      ? 'w-10 bg-[#A88B65]'
                      : 'w-4 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-white/40 text-[11px] font-sans">
              / 0{slides.length}
            </span>

            {/* Manual Arrows */}
            <div className="flex items-center space-x-1 pl-3 border-l border-white/15">
              <button
                onClick={prevSlide}
                className="p-1.5 text-white/60 hover:text-white transition-colors"
                aria-label="Previous architectural slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-1.5 text-white/60 hover:text-white transition-colors"
                aria-label="Next architectural slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Current Slide Info on Mobile / Tablet */}
          <div className="flex items-center space-x-2 text-[11px] uppercase tracking-widest text-[#A88B65]">
            <span>{activeSlideData.title}</span>
            <span className="text-white/40">•</span>
            <span className="text-[#F3F0E9]/60">{activeSlideData.location}</span>
          </div>

          {/* Scroll Button */}
          <button
            onClick={scrollToExplore}
            className="group flex items-center space-x-2 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-[11px] uppercase tracking-[0.25em]">Scroll to Explore</span>
            <ChevronDown className="w-4 h-4 text-[#A88B65] group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
