import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Droplets, Sun, Wind, Trees } from 'lucide-react';
import ArchitecturalSlider from '@/components/common/ArchitecturalSlider';

export const metadata = {
  title: 'Design & Lifestyle — ESTORA Residential Living Experience',
  description: 'Immerse yourself in the architecture, biophilic landscaping, calm interiors, and private wellness pavilions of ESTORA.',
};

const LIFESTYLE_HERO_SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop',
    caption: 'Tectonic Proportions — Shaded Voids & Deep Limestone Reveals',
  },
  {
    url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2400&auto=format&fit=crop',
    caption: 'Biophilic Water Courtyards & Native Micro-Climate Flora',
  },
  {
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2400&auto=format&fit=crop',
    caption: 'Tactile Minimalist Living Suites — Smoked Oak & Botticino Marble',
  },
  {
    url: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2400&auto=format&fit=crop',
    caption: 'Private Wellness Clubs — Subterranean Hydrotherapy & Sommelier Reserves',
  },
];

const LIFESTYLE_FACETS = [
  {
    category: 'Monolithic Architecture',
    title: 'Forms Sculpted by Solar Geometry',
    subtitle: 'Solidity, Shadow, and Grandeur',
    description: 'Our residential exteriors celebrate thermal mass and tectonic depth. Deep window reveals shield interiors from glaring sunlight, transforming intense daylight into soft, diffused illumination across honed stone floors.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    icon: Sun,
  },
  {
    category: 'Biophilic Sanctuaries',
    title: 'Centuries-Old Olive Groves & Reflective Water',
    subtitle: 'Living in Harmony with Nature',
    description: 'We integrate central open-air courtyards, subterranean fern grottos, and continuous running water features. The ambient sound of water reduces stress and creates natural cooling air currents throughout the community.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop',
    icon: Droplets,
  },
  {
    category: 'Tactile Interiors',
    title: 'Minimalist Finishes for Sensory Calm',
    subtitle: 'Quiet Craftsmanship',
    description: 'Interiors are free from superfluous decor. Wide-plank smoked oak floorboards, Italian Botticino marble, concealed pivot doors, and shadow reveals create spaces where the mind instinctively finds equilibrium.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
    icon: Wind,
  },
  {
    category: 'Resident Privileges',
    title: 'Discreet Private Clubs & Wellness Pavilions',
    subtitle: 'Conversational Leisure',
    description: 'From 25-meter ozone swimming pools to private sommelier wine reserves and intimate resident screening rooms, our communal spaces offer refined leisure without ever compromising privacy.',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1600&auto=format&fit=crop',
    icon: Trees,
  },
];

export default function LifestylePage() {
  return (
    <div className="bg-[#F3F0E9] text-[#202A27] min-h-screen pt-28 pb-32">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-20 border-b border-[#202A27]/10">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-[#A88B65]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium">
              Curated Experience
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-[#202A27] leading-[1.08]">
            The ESTORA Way of Living
          </h1>

          <p className="text-lg text-[#777C77] font-light leading-relaxed">
            True luxury is not defined by excess, but by intention. Explore how our architectural geometry, landscaped sanctuaries, and interior palettes conspire to create an elevated everyday life.
          </p>
        </div>

        {/* Dynamic Architectural Living Showcase */}
        <div className="mt-14">
          <ArchitecturalSlider images={LIFESTYLE_HERO_SLIDES} aspectRatio="aspect-[21/9] sm:aspect-[21/8]" />
        </div>
      </section>

      {/* 2. Editorial Facets Breakdown */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 space-y-32">
        {LIFESTYLE_FACETS.map((facet, index) => {
          const isReversed = index % 2 === 1;
          const Icon = facet.icon;

          return (
            <div
              key={facet.category}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                isReversed ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Showcase */}
              <div
                className={`lg:col-span-7 ${
                  isReversed ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden shadow-2xl bg-[#202A27]">
                  <Image
                    src={facet.image}
                    alt={facet.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#202A27]/10" />
                </div>
              </div>

              {/* Text Editorial */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  isReversed ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#A88B65]/20 flex items-center justify-center text-[#A88B65]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#A88B65] font-medium">
                    {facet.category}
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-[#202A27] font-light leading-snug">
                  {facet.title}
                </h2>

                <p className="text-xs uppercase tracking-[0.18em] text-[#777C77] font-medium">
                  {facet.subtitle}
                </p>

                <p className="text-base text-[#777C77] leading-relaxed font-light">
                  {facet.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Bottom Callout */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16">
        <div className="bg-[#202A27] text-white p-12 sm:p-20 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65]">
            Private Consultation
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light">
            Encounter the Atmosphere in Person
          </h2>
          <p className="text-sm text-[#F3F0E9]/80 font-light max-w-xl mx-auto leading-relaxed">
            Our advisory team is available to arrange private model gallery walkthroughs and architectural consultations.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#A88B65] text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8F724E] transition-colors"
            >
              <span>Connect with Advisory</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

