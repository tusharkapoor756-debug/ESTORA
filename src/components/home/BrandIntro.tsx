'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BrandContent } from '@/types';

interface BrandIntroProps {
  content: BrandContent;
}

export default function BrandIntro({ content }: BrandIntroProps) {
  return (
    <section id="brand-intro" className="py-28 sm:py-36 bg-[#F3F0E9] text-[#202A27]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Tag */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="w-6 h-px bg-[#A88B65]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium">
            Brand Philosophy
          </span>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Provocative Headline & Text */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#202A27] font-light leading-[1.12]">
              {content.brandHeadline}
            </h2>

            <p className="text-base sm:text-lg text-[#777C77] leading-relaxed font-light">
              {content.brandPhilosophy}
            </p>

            <div className="pt-4 grid grid-cols-2 gap-8 border-t border-[#202A27]/10">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#202A27] font-light block">
                  100%
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-[#777C77] mt-1 block">
                  Acoustic Decoupling
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#202A27] font-light block">
                  Zero
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-[#777C77] mt-1 block">
                  Compromised Proportions
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium text-[#202A27] hover:text-[#A88B65] transition-colors group"
              >
                <span>Read the ESTORA Manifesto</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#A88B65]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 w-full overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop"
                alt="ESTORA Architectural Craft"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#202A27]/10" />
            </div>

            {/* Overlapping Floating Architectural Caption */}
            <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-[#202A27] text-white p-6 max-w-xs shadow-xl hidden sm:block border-l-2 border-[#A88B65]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A88B65] block mb-1">
                Materiality
              </span>
              <p className="text-xs text-[#F3F0E9]/80 font-light leading-relaxed">
                Botticino Classico marble, raw hand-chiseled slate, and thermally optimized architectural glass.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

