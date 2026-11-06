'use client';

import React from 'react';
import Image from 'next/image';
import { PHILOSOPHY_PILLARS } from '@/data/mockData';

export default function PhilosophySection() {
  return (
    <section className="py-28 sm:py-36 bg-[#F3F0E9] text-[#202A27]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-6 h-[1px] bg-[#A88B65]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium">
              Core Tenets
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#202A27] leading-[1.12]">
            Designed Around the Way You Live.
          </h2>
          <p className="text-base text-[#777C77] mt-6 font-light leading-relaxed">
            Every ESTORA development is anchored by three enduring principles. We resist superficial decoration in pursuit of pure spatial geometry, daylight choreography, and enduring material integrity.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="group flex flex-col justify-between bg-white p-8 sm:p-10 border border-[#202A27]/5 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#202A27]/10 pb-6 mb-8">
                  <span className="font-serif text-2xl text-[#A88B65] font-light">
                    {pillar.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#777C77]">
                    ESTORA PILLAR
                  </span>
                </div>

                <div className="relative aspect-[16/10] w-full mb-6 overflow-hidden bg-[#202A27]/10">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <h3 className="font-serif text-2xl text-[#202A27] font-medium mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.15em] text-[#A88B65] font-medium mb-4">
                  {pillar.tagline}
                </p>
                <p className="text-sm text-[#777C77] leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#202A27]/5 flex items-center justify-between text-xs text-[#777C77]">
                <span>Architectural Standard</span>
                <span className="text-[#A88B65] font-medium">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

