import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { INITIAL_PROJECTS } from '@/data/mockData';
import { ArrowLeft, MapPin, Check, Building2, Calendar, Compass, ShieldCheck } from 'lucide-react';
import ProjectGallery from '@/components/project/ProjectGallery';
import ProjectEnquiryForm from '@/components/project/ProjectEnquiryForm';
import ProjectHero from '@/components/project/ProjectHero';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return INITIAL_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = INITIAL_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-[#F3F0E9] text-[#202A27] min-h-screen">
      {/* 1. Full-Width Architectural Hero with Auto-Slide Crossfade */}
      <ProjectHero project={project} />

      {/* 2. Overview & Quick Specs Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 border-b border-[#202A27]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Description */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium">
                The Architectural Concept
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#202A27] font-light">
                {project.tagline}
              </h2>
            </div>

            <p className="text-base text-[#777C77] leading-relaxed font-light whitespace-pre-line">
              {project.fullOverview}
            </p>

            {/* Highlights */}
            <div className="space-y-4 pt-4">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#202A27] font-semibold">
                Development Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 bg-white border border-[#202A27]/5">
                    <Check className="w-4 h-4 text-[#A88B65] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#202A27] font-light">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Key Facts */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 border border-[#202A27]/10 shadow-lg space-y-6">
            <h3 className="font-serif text-2xl text-[#202A27] font-normal border-b border-[#202A27]/10 pb-4">
              Project Summary
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex justify-between py-2 border-b border-[#202A27]/5">
                <span className="text-[#777C77] uppercase tracking-wider">Concept Valuations</span>
                <span className="font-semibold text-[#A88B65]">{project.priceRange}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#202A27]/5">
                <span className="text-[#777C77] uppercase tracking-wider">Completion Schedule</span>
                <span className="font-medium text-[#202A27]">{project.completionYear}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#202A27]/5">
                <span className="text-[#777C77] uppercase tracking-wider">Lead Architect</span>
                <span className="font-medium text-[#202A27]">{project.architect}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#202A27]/5">
                <span className="text-[#777C77] uppercase tracking-wider">Typology</span>
                <span className="font-medium text-[#202A27]">{project.category}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#202A27]/5">
                <span className="text-[#777C77] uppercase tracking-wider">Current Status</span>
                <span className="font-medium text-[#202A27]">{project.status}</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#enquiry-section"
                className="w-full block text-center py-3.5 bg-[#202A27] hover:bg-[#161D1B] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                Schedule Private Briefing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Amenities Showcase */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 border-b border-[#202A27]/10">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium block mb-2">
            Curated Privileges
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#202A27] font-light">
            Resident Amenities & Club Services
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {project.amenities.map((amenity, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border border-[#202A27]/5 flex flex-col justify-between text-center space-y-4 hover:border-[#A88B65] transition-colors"
            >
              <Compass className="w-6 h-6 text-[#A88B65] mx-auto" />
              <span className="text-xs font-medium text-[#202A27]">{amenity}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Floor Plans Preview */}
      {project.floorPlans && project.floorPlans.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 border-b border-[#202A27]/10">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium block mb-2">
              Spatial Layouts
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#202A27] font-light">
              Floor Plans & Configurations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.floorPlans.map((fp) => (
              <div
                key={fp.id}
                className="bg-white p-8 border border-[#202A27]/10 space-y-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start border-b border-[#202A27]/10 pb-4">
                  <div>
                    <h3 className="font-serif text-2xl text-[#202A27] font-medium">{fp.name}</h3>
                    <span className="text-xs uppercase tracking-wider text-[#A88B65] font-medium">
                      {fp.type}
                    </span>
                  </div>
                  <span className="font-serif text-xl text-[#202A27]">{fp.area}</span>
                </div>

                <div className="relative aspect-[16/10] bg-[#202A27] overflow-hidden">
                  <Image
                    src={fp.image}
                    alt={fp.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-[#202A27]/40 flex items-center justify-center">
                    <span className="text-white text-xs uppercase tracking-widest bg-black/60 px-4 py-2">
                      Architectural Blueprint Scheme
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#777C77] leading-relaxed font-light">{fp.description}</p>

                <div className="grid grid-cols-3 gap-2 text-center text-xs py-3 bg-[#FAF8F5] border border-[#202A27]/5">
                  <div>
                    <span className="text-[#777C77] block text-[10px] uppercase">Bedrooms</span>
                    <span className="font-medium text-[#202A27]">{fp.bedrooms} Suites</span>
                  </div>
                  <div>
                    <span className="text-[#777C77] block text-[10px] uppercase">Baths</span>
                    <span className="font-medium text-[#202A27]">{fp.bathrooms} Luxury</span>
                  </div>
                  <div>
                    <span className="text-[#777C77] block text-[10px] uppercase">Terraces</span>
                    <span className="font-medium text-[#202A27]">{fp.balconies} Decks</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Image Gallery with Lightbox */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 border-b border-[#202A27]/10">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium block mb-2">
            Visual Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#202A27] font-light">
            Architectural Gallery & Details
          </h2>
        </div>

        <ProjectGallery images={project.gallery} title={project.title} />
      </section>

      {/* 6. Technical Specifications */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 border-b border-[#202A27]/10">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium block mb-2">
            Engineering & Craft
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#202A27] font-light">
            Material Specifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.specifications.map((spec, idx) => (
            <div key={idx} className="bg-white p-6 border border-[#202A27]/5 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A88B65] font-semibold block">
                {spec.category}
              </span>
              <p className="text-xs text-[#202A27] font-light leading-relaxed">
                {spec.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Enquiry & Site Visit Section */}
      <section id="enquiry-section" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium block">
              Private Advisory
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#202A27] font-light leading-tight">
              Schedule a Private Viewing of {project.title}.
            </h2>
            <p className="text-sm text-[#777C77] leading-relaxed font-light">
              Experience the spaces in person. Our client curation team will arrange a guided exploration of model residences, finishes, and contextual scale.
            </p>

            <div className="p-4 bg-white border border-[#202A27]/10 space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-[#202A27] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#A88B65]" />
                <span>Simulated Concierge Service</span>
              </div>
              <p className="text-[#777C77]">
                Submissions update the demo enquiry database in real-time. Viewable immediately within the Demo Admin console.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ProjectEnquiryForm projectSlug={project.slug} projectName={project.title} />
          </div>
        </div>
      </section>
    </div>
  );
}

