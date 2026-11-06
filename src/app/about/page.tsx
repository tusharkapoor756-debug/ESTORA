import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Compass, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import ArchitecturalSlider from '@/components/common/ArchitecturalSlider';

export const metadata = {
  title: 'About ESTORA — Architectural Philosophy & Atelier History',
  description: 'Discover the vision, manifesto, and design language behind ESTORA luxury property developments.',
};

const ABOUT_HERO_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop',
    caption: 'Studio Atelier — Metropolis Central',
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop',
    caption: 'Material Atelier — Roman Travertine & Smoked Oak Studies',
  },
  {
    url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2400&auto=format&fit=crop',
    caption: 'Masterplanning — Daylight Choreography & Micro-Climate Courts',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F3F0E9] text-[#202A27] min-h-screen pt-28 pb-32">
      {/* 1. Hero Introduction */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-20 border-b border-[#202A27]/10">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-[#A88B65]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium">
              The Atelier Story
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-[#202A27] leading-[1.08]">
            Architecture That Endures Time.
          </h1>

          <p className="text-lg text-[#777C77] font-light leading-relaxed">
            ESTORA is an architectural developer collective committed to the enduring resonance of residential spaces. We reject ephemeral fashion in favor of calm proportion, genuine materials, and environmental perpetuity.
          </p>
        </div>

        {/* Large Editorial Panoramic Image with Smooth Auto-Transition */}
        <div className="mt-14">
          <ArchitecturalSlider images={ABOUT_HERO_IMAGES} aspectRatio="aspect-[21/9] sm:aspect-[21/8]" />
        </div>
      </section>

      {/* 2. Vision & Mission Manifesto */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 border-b border-[#202A27]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium block">
              Foundational Belief
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#202A27] font-light leading-tight">
              A Home Should Lower Your Heart Rate.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base text-[#777C77] font-light leading-relaxed">
            <p>
              Contemporary cities are saturated with noise, visual agitation, and hurried design. We founded ESTORA to offer an antidote: homes where the threshold is an act of restoration.
            </p>
            <p>
              By combining classical monolithic geometry with advanced post-tensioned engineering, we create wide column-free living rooms that celebrate the arc of the sun. Deep overhangs protect residences from harsh midday rays, while integrated courtyards bring the sound of moving water and wind directly to your bedside.
            </p>
            <p>
              Every stone is hand-selected; every acoustic partition is tested to exceed standard residential norms; and every tree planted on our grounds is chosen for its native botanical harmony.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Three Core Values */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 border-b border-[#202A27]/10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium block mb-2">
            The Pillars of Practice
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#202A27] font-light">
            Our Guiding Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 sm:p-10 border border-[#202A27]/10 space-y-4 shadow-sm">
            <Layers className="w-8 h-8 text-[#A88B65]" />
            <h3 className="font-serif text-2xl text-[#202A27] font-medium">Honest Materiality</h3>
            <p className="text-sm text-[#777C77] leading-relaxed font-light">
              We never conceal synthetic substitutes behind faux finishes. Roman travertine, hand-chiseled slate, untreated cedar, and bronze patinate with grace across the decades.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 border border-[#202A27]/10 space-y-4 shadow-sm">
            <Compass className="w-8 h-8 text-[#A88B65]" />
            <h3 className="font-serif text-2xl text-[#202A27] font-medium">Micro-Climate Design</h3>
            <p className="text-sm text-[#777C77] leading-relaxed font-light">
              Our developments are oriented according to solar paths and prevailing wind currents, reducing mechanical heating and cooling loads while enhancing natural ventilation.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 border border-[#202A27]/10 space-y-4 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-[#A88B65]" />
            <h3 className="font-serif text-2xl text-[#202A27] font-medium">Generational Quiet</h3>
            <p className="text-sm text-[#777C77] leading-relaxed font-light">
              Floating subfloors and acoustic decoupling isolate each home from exterior city noise, creating a private sound refuge rarely found in dense urban centers.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Portfolio Studio CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
        <div className="bg-[#202A27] text-white p-12 sm:p-20 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65]">
            Experience The Developments
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light">
            Explore the ESTORA Portfolio
          </h2>
          <p className="text-sm text-[#F3F0E9]/80 font-light max-w-xl mx-auto leading-relaxed">
            Review our active residences across Metropolis Central, New Meridian, and Azure Bay, or arrange a private consultation.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#A88B65] text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8F724E] transition-colors"
            >
              <span>View Developments</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:border-white transition-colors"
            >
              <span>Contact Advisory</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

