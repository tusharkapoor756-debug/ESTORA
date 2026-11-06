'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function FeaturedExperience() {
  return (
    <section className="relative py-36 sm:py-48 bg-[#161D1B] overflow-hidden">
      {/* Background Architectural Panorama */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2400&auto=format&fit=crop"
          alt="ESTORA Private Living Atmosphere"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#161D1B] via-[#161D1B]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-[#A88B65]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium">
              The Resident Experience
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light leading-[1.12]">
            A Sanctuary of Quiet Presence.
          </h2>

          <p className="text-base sm:text-lg text-[#F3F0E9]/80 font-light leading-relaxed">
            Beyond monumental architecture lies our commitment to how a space breathes. From acoustic quietness that filters out urban agitation to private garden courtyards that capture twilight breezes, ESTORA homes are curated for deep renewal.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/lifestyle"
              className="inline-flex items-center gap-3 bg-[#A88B65] hover:bg-[#8F724E] text-white px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium transition-colors shadow-xl group"
            >
              <span>Explore The Living Gallery</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

