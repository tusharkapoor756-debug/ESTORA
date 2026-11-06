'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { Project } from '@/types';
import { ProjectImageSlider } from './ProjectImageSlider';

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featuredList = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-28 sm:py-36 bg-[#202A27] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-6 h-[1px] bg-[#A88B65]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-white">
              Featured Developments
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#777C77]">
              Curated Architectural Works
            </span>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#A88B65] hover:text-white transition-colors group"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Projects Editorial Showcase */}
        <div className="space-y-24">
          {featuredList.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Project Photography with Auto-Sliding Project Gallery */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <ProjectImageSlider project={project} />
                </div>

                {/* Project Editorial Detail */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-xs text-[#A88B65] uppercase tracking-[0.25em]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}, {project.city}</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#777C77] block">
                      {project.category}
                    </span>
                  </div>

                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal hover:text-[#A88B65] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-sm text-[#F3F0E9]/75 font-light leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="pt-2 pb-4 space-y-2 text-xs text-[#777C77] border-y border-white/10">
                    <div className="flex justify-between py-1">
                      <span>Concept Architecture</span>
                      <span className="text-white/90">{project.architect}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Timeline Target</span>
                      <span className="text-white/90">{project.completionYear}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Estimated Valuations</span>
                      <span className="text-[#A88B65]">{project.priceRange}</span>
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium text-white hover:text-[#A88B65] transition-colors group"
                  >
                    <span>Explore Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#A88B65]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

