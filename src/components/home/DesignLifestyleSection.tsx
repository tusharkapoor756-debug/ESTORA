'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { LIFESTYLE_EDITORIALS } from '@/data/mockData';

export default function DesignLifestyleSection() {
  return (
    <section className="py-28 sm:py-36 bg-[#202A27] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-6 h-[1px] bg-[#A88B65]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium">
                Experiential Living
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-white">
              Design & Lifestyle
            </h2>
          </div>

          <Link
            href="/lifestyle"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#A88B65] hover:text-white transition-colors group"
          >
            <span>Explore Lifestyle Experience</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Editorial Asymmetrical Grid (Not simple cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Large Editorial Feature */}
          <div className="md:col-span-7 group relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#161D1B]">
            <Image
              src={LIFESTYLE_EDITORIALS[0].image}
              alt={LIFESTYLE_EDITORIALS[0].title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A88B65]">
                {LIFESTYLE_EDITORIALS[0].category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                {LIFESTYLE_EDITORIALS[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#F3F0E9]/80 font-light max-w-lg">
                {LIFESTYLE_EDITORIALS[0].description}
              </p>
            </div>
          </div>

          {/* Secondary Stack Feature */}
          <div className="md:col-span-5 flex flex-col justify-between gap-8">
            <div className="group relative aspect-[16/10] overflow-hidden bg-[#161D1B]">
              <Image
                src={LIFESTYLE_EDITORIALS[1].image}
                alt={LIFESTYLE_EDITORIALS[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#A88B65]">
                  {LIFESTYLE_EDITORIALS[1].category}
                </span>
                <h4 className="font-serif text-xl text-white font-normal">
                  {LIFESTYLE_EDITORIALS[1].title}
                </h4>
              </div>
            </div>

            <div className="group relative aspect-[16/10] overflow-hidden bg-[#161D1B]">
              <Image
                src={LIFESTYLE_EDITORIALS[2].image}
                alt={LIFESTYLE_EDITORIALS[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#A88B65]">
                  {LIFESTYLE_EDITORIALS[2].category}
                </span>
                <h4 className="font-serif text-xl text-white font-normal">
                  {LIFESTYLE_EDITORIALS[2].title}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

