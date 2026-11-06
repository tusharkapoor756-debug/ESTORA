'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, SlidersHorizontal, Calendar, Building, Sparkles } from 'lucide-react';
import { getStoredProjects } from '@/data/storage';
import { INITIAL_PROJECTS } from '@/data/mockData';
import { Project } from '@/types';

const CATEGORIES = ['All', 'Urban Residences', 'Sanctuary Villas', 'Sky Apartments', 'Waterfront'];
const STATUSES = ['All', 'Under Construction', 'Ready for Possession', 'Upcoming Launch'];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const loaded = getStoredProjects();
    setProjects(loaded);
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesStatus =
        selectedStatus === 'All' || project.status === selectedStatus;
      const matchesQuery =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.city.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesStatus && matchesQuery;
    });
  }, [projects, selectedCategory, selectedStatus, searchQuery]);

  return (
    <div className="bg-[#F3F0E9] text-[#202A27] min-h-screen pt-28 pb-32">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-16 border-b border-[#202A27]/10">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-[#A88B65]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#A88B65] font-medium">
              Portfolio Index
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-[#202A27] leading-[1.08]">
            Architectural Developments
          </h1>

          <p className="text-base sm:text-lg text-[#777C77] font-light leading-relaxed">
            A curated portfolio of fictional residential landmarks. Each development investigates the dialogue between contemporary monolithic geometry, biological landscapes, and quiet private sanctuaries.
          </p>
        </div>

        {/* Filter & Controls Bar */}
        <div className="mt-14 space-y-6">
          {/* Categories Tab */}
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#202A27]/10 pb-4">
            <div className="flex items-center flex-wrap gap-2 sm:gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#777C77] mr-2 hidden sm:inline">
                Category:
              </span>
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#202A27] text-white shadow-md'
                      : 'bg-white/60 hover:bg-white text-[#202A27]/80 hover:text-[#202A27] border border-[#202A27]/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Total Results Count */}
            <div className="text-xs uppercase tracking-[0.2em] text-[#777C77]">
              Showing <span className="font-semibold text-[#202A27]">{filteredProjects.length}</span> Residences
            </div>
          </div>

          {/* Secondary Filter: Status & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center flex-wrap gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#777C77] mr-2">
                Status:
              </span>
              {STATUSES.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-3 py-1.5 text-[11px] uppercase tracking-wider transition-colors ${
                    selectedStatus === status
                      ? 'border-b-2 border-[#A88B65] text-[#202A27] font-semibold'
                      : 'text-[#777C77] hover:text-[#202A27]'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            {/* Quick Search */}
            <div className="w-full sm:w-72">
              <input
                type="text"
                placeholder="Search by name, city, or sector..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 text-xs bg-white border border-[#202A27]/10 focus:outline-none focus:border-[#A88B65] transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#202A27]/5 p-12">
            <h3 className="font-serif text-2xl text-[#202A27]">No developments found</h3>
            <p className="text-sm text-[#777C77] mt-2 font-light">
              Try adjusting your category or status filters to discover other available residences.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedStatus('All');
                setSearchQuery('');
              }}
              className="mt-6 px-6 py-2.5 bg-[#202A27] text-white text-xs uppercase tracking-[0.2em]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between bg-white border border-[#202A27]/10 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Visual Image container */}
                <div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block relative aspect-[16/10] overflow-hidden bg-[#202A27]"
                  >
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 bg-[#202A27]/90 text-[#A88B65] backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-white/10">
                      {project.status}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 text-[#202A27] px-3 py-1 text-[10px] uppercase tracking-wider font-medium">
                      {project.category}
                    </div>
                  </Link>

                  {/* Project Details */}
                  <div className="p-8 sm:p-10 space-y-4">
                    <div className="flex items-center space-x-2 text-xs text-[#A88B65] uppercase tracking-[0.2em]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}, {project.city}</span>
                    </div>

                    <Link href={`/projects/${project.slug}`}>
                      <h3 className="font-serif text-3xl text-[#202A27] group-hover:text-[#A88B65] transition-colors font-normal">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-sm text-[#777C77] font-light leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Highlights bullet tags */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-[#F3F0E9] text-[#202A27] px-3 py-1 text-[11px] font-light border border-[#202A27]/5"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Strip */}
                <div className="px-8 sm:px-10 py-5 bg-[#FAF8F5] border-t border-[#202A27]/5 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#777C77] block">
                      Valuation Target
                    </span>
                    <span className="font-medium text-[#202A27]">{project.priceRange}</span>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#A88B65] group-hover:text-[#202A27] transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

