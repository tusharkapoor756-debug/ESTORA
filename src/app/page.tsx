'use client';

import React, { useState, useEffect } from 'react';
import Hero from '@/components/home/Hero';
import BrandIntro from '@/components/home/BrandIntro';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import PhilosophySection from '@/components/home/PhilosophySection';
import DesignLifestyleSection from '@/components/home/DesignLifestyleSection';
import FeaturedExperience from '@/components/home/FeaturedExperience';
import ConsultationCTA from '@/components/home/ConsultationCTA';
import { getStoredProjects, getStoredBrandContent } from '@/data/storage';
import { INITIAL_PROJECTS, INITIAL_BRAND_CONTENT } from '@/data/mockData';
import { Project, BrandContent } from '@/types';

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [brandContent, setBrandContent] = useState<BrandContent>(INITIAL_BRAND_CONTENT);

  useEffect(() => {
    // Read user modifications from local demonstration storage
    const loadedProjects = getStoredProjects();
    const loadedBrandContent = getStoredBrandContent();
    setProjects(loadedProjects);
    setBrandContent(loadedBrandContent);
  }, []);

  return (
    <div className="w-full bg-[#F3F0E9]">
      {/* 1. Hero with Dynamic Admin-Featured Projects */}
      <Hero content={brandContent} projects={projects} />

      {/* 2. Brand Introduction */}
      <BrandIntro content={brandContent} />

      {/* 3. Featured Developments */}
      <FeaturedProjects projects={projects} />

      {/* 4. ESTORA Philosophy Pillars */}
      <PhilosophySection />

      {/* 5. Design & Lifestyle */}
      <DesignLifestyleSection />

      {/* 6. Featured Experience */}
      <FeaturedExperience />

      {/* 7. Consultation CTA */}
      <ConsultationCTA content={brandContent} />
    </div>
  );
}
