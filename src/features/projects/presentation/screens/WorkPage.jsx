import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Globe2,
  Terminal,
} from 'lucide-react';
import { PageLayout } from '../../../../shared/layouts/PageLayout';
import { useProjects } from '../hooks/useProjects';
import { ProjectHero } from '../components/ProjectHero';
import { CaseStudySection } from '../components/CaseStudySection';
import { TechnologyList } from '../components/TechnologyList';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { SectionHeading } from '../../../../shared/components/molecules/SectionHeading';
import { EDUCATION_DATA, LANGUAGES_DATA } from '../../../experience/data/experienceData';

export function WorkPage() {
  const {
    allProjects,
    availableTechs,
    selectedTech,
    setSelectedTech,
  } = useProjects();

  return (
    <PageLayout
      title="Work & Engineering"
      description="Production React Native mobile case studies, store releases, and architectural systems designed by Sharath R."
    >
      <ProjectHero />

      {/* Tech Filter */}
      <div className="mb-10 p-4 rounded-2xl bg-white dark:bg-[#1f2023] border border-gray-200 dark:border-gray-700 shadow-xs">
        <div className="flex items-center gap-2 mb-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          <Terminal className="w-4 h-4 text-[#6650a4]" />
          <span>Filter by Technology:</span>
        </div>
        <TechnologyList
          technologies={availableTechs}
          selected={selectedTech}
          onSelect={setSelectedTech}
        />
      </div>

      {/* Flagship Production Projects Case Studies */}
      <section className="space-y-10 mb-16">
        <SectionHeading
          title="Flagship Applications"
          subtitle="Production Mobile Applications"
        />

        {allProjects.map((project) => (
          <CaseStudySection key={project.id} project={project} />
        ))}
      </section>

      {/* Architecture Showcase */}
      <section className="mb-16">
        <SectionHeading
          title="Mobile Systems Design"
          subtitle="Architecture Showcase & Data Pipelines"
        />
        <ArchitectureDiagram />
      </section>

      {/* Education & Languages (Direct from Resume) */}
      <section className="mb-16">
        <SectionHeading
          title="Education & Languages"
          subtitle="Academic Background & Communication"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Education Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#1f2023] border border-gray-200 dark:border-gray-700 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-purple-100 text-[#6650a4] flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-gray-900 dark:text-white">
                  {EDUCATION_DATA.degree}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                  {EDUCATION_DATA.institution} • {EDUCATION_DATA.location}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs pt-3 border-t border-gray-100 dark:border-gray-800">
              <span className="text-gray-500 dark:text-gray-400 font-medium">{EDUCATION_DATA.period}</span>
              <span className="font-extrabold text-[#6650a4] dark:text-[#aa97e8] bg-purple-50 dark:bg-purple-950/60 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800">
                CGPA: {EDUCATION_DATA.cgpa}
              </span>
            </div>
          </div>

          {/* Languages Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#1f2023] border border-gray-200 dark:border-gray-700 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-teal-100 text-[#0d9488] flex items-center justify-center font-bold">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-base text-gray-900 dark:text-white">
                  Languages
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                  Native & Professional Communication
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100 dark:border-gray-800 text-xs">
              {LANGUAGES_DATA.map((lang, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
                  <span className="font-extrabold block text-gray-900 dark:text-white mb-0.5">{lang.name}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </PageLayout>
  );
}

export function ProjectHeroUpdated() {
  return (
    <div className="mb-10">
      <SectionHeading
        title="Engineering & Releases"
        subtitle="Production Mobile Applications & Architecture"
      />
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed font-medium">
        Cross-platform React Native engineering across Android and iOS releases at Infanion Software Solutions. Shipped for enterprise operations, real-time Socket.io chat, and automated store deployments.
      </p>
    </div>
  );
}

export default WorkPage;
