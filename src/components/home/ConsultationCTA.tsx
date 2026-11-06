'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageSquare, PhoneCall } from 'lucide-react';
import { BrandContent } from '@/types';

interface ConsultationCTAProps {
  content: BrandContent;
}

export default function ConsultationCTA({ content }: ConsultationCTAProps) {
  // Demo WhatsApp contact link with prefilled placeholder query
  const whatsappUrl = "https://wa.me/918000007860?text=Hello%20ESTORA%20Advisory,%20I%20would%20like%20to%20schedule%20a%20private%20portfolio%20consultation.";

  return (
    <section className="py-28 sm:py-36 bg-[#F3F0E9] text-[#202A27]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative bg-[#202A27] text-white p-10 sm:p-16 lg:p-20 overflow-hidden shadow-2xl border-l-4 border-[#A88B65]">
          {/* Subtle background decoration */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-[#A88B65]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium">
                Private Advisory
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light leading-[1.15]">
              {content.consultationHeadline}
            </h2>

            <p className="text-base sm:text-lg text-[#F3F0E9]/80 font-light leading-relaxed">
              {content.consultationSubheadline}
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-[#A88B65] hover:bg-[#8F724E] text-white px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 shadow-md group"
              >
                <span>Request Private Viewing</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white px-6 py-4 text-xs uppercase tracking-[0.18em] font-medium transition-colors bg-white/5"
              >
                <MessageSquare className="w-4 h-4 text-[#A88B65]" />
                <span>WhatsApp Advisory (Demo)</span>
              </a>
            </div>

            <p className="text-[11px] text-[#777C77] pt-2">
              All enquiries received are stored in local demonstration memory and treated as a fictional design concept.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

