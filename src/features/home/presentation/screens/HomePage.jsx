import React from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '../../../../shared/layouts/PageLayout';
import { HeroSection } from '../components/HeroSection';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { TechStackBar } from '../components/TechStackBar';
import { IntroductionSection } from '../components/IntroductionSection';
import { EngineeringSection } from '../components/EngineeringSection';

export function HomePage() {
  return (
    <PageLayout
      title="Sharath R | React Native Developer (Android & iOS)"
      description="Portfolio of Sharath R, a React Native Developer with 3.5 years of experience building, optimizing, and shipping production mobile applications."
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-12 sm:space-y-16"
    >
      {/* 1. Hero Section matching Image 2 */}
      <HeroSection />

      {/* 2. Featured Projects (MyCORE & Maxicon) */}
      <FeaturedProjects />

      {/* 3. My Tech Stack Continuous Horizontal Row matching Image 2 */}
      <TechStackBar />

      {/* 4. About Me Section */}
      <IntroductionSection />

      {/* 5. Engineering Section (What I've Built pipeline, Skills & Expertise, Professional Journey) */}
      <EngineeringSection />
    </PageLayout>
  );
}

export default HomePage;
