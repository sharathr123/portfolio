import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  GraduationCap,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Download,
  Mail,
  Smartphone,
  Layers,
  Wrench,
  ShieldCheck,
} from 'lucide-react';
import { PageLayout } from '../../../../shared/layouts/PageLayout';
import { SectionHeading } from '../../../../shared/components/molecules/SectionHeading';
import { appConfig } from '../../../../core/config/appConfig';
import { RESUME_PATH } from '../../../../core/constants/appConstants';
import { EXPERIENCE_DATA, EDUCATION_DATA, LANGUAGES_DATA } from '../../../experience/data/experienceData';
import profileImg from '../../../../assets/Profile.jpeg';

export function AboutPage() {
  const currentRole = EXPERIENCE_DATA[0];

  return (
    <PageLayout
      title="About Sharath R"
      description="Professional background, technical journey, and production mobile engineering experience of Sharath R."
    >
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Top Header & Bio Banner */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#1a1a1e] border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col md:flex-row items-center gap-8">
          
          {/* Authentic Portrait Image */}
          <div className="relative shrink-0">
            <div className="absolute -inset-3 bg-gradient-to-tr from-purple-200 via-teal-100 to-indigo-100 dark:from-purple-950 dark:via-teal-950 dark:to-indigo-950 rounded-full blur-md -z-10"></div>
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-md bg-purple-50">
              <img
                src={profileImg}
                alt="Sharath R - React Native Developer"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/profile/Profile.jpeg';
                }}
              />
            </div>
          </div>

          {/* Bio text */}
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/90 dark:bg-purple-950/80 text-[#593d9c] dark:text-[#c4b5fd] border border-purple-200/80 dark:border-purple-800/80 text-xs font-black">
              <span>React Native Developer • 3.5+ Years Experience</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white tracking-tight">
                Sharath R
              </h1>
              <p className="text-xs sm:text-sm font-extrabold text-[#6650a4] dark:text-purple-300 mt-0.5">
                Associate Developer • Infanion Software Solutions
              </p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              React Native developer with 3.5 years of experience building and optimizing mobile applications for Android and iOS at Infanion Software Solutions. Skilled in creating modular UI components, integrating REST APIs, implementing real-time features using Socket.io, and improving overall app performance.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-2">
              <a
                href={RESUME_PATH}
                download="Sharath_R_React_Native_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6650a4] hover:bg-[#533f89] text-white text-xs font-bold shadow-xs transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 text-gray-900 dark:text-white text-xs font-bold transition-all border border-gray-200 dark:border-gray-700"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Current Professional Experience at Infanion */}
        <section className="space-y-6">
          <SectionHeading
            title="Work Experience"
            subtitle="Current Production Role & Key Responsibilities"
          />

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1a1a1e] border-2 border-purple-200 dark:border-purple-900 shadow-sm space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#6650a4] text-white flex items-center justify-center font-bold shadow-xs">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white">
                    {currentRole.role}
                  </h3>
                  <p className="text-sm font-extrabold text-[#6650a4] dark:text-purple-300">
                    {currentRole.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950 text-xs font-extrabold text-purple-900 dark:text-purple-200 border border-purple-200 dark:border-purple-800">
                  {currentRole.period}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-extrabold">
                  {currentRole.location}
                </span>
              </div>
            </div>

            {/* All 10 Bullet Points from Resume */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
              {currentRole.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#6650a4] dark:text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed">{bullet}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Education & Languages */}
        <section className="space-y-6">
          <SectionHeading
            title="Academic & Background"
            subtitle="Education & Languages"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Education */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#1a1a1e] border border-gray-200 dark:border-gray-700 shadow-xs">
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
                <span className="text-gray-500 font-medium">{EDUCATION_DATA.period}</span>
                <span className="font-extrabold text-[#6650a4] dark:text-[#aa97e8] bg-purple-50 dark:bg-purple-950 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800">
                  CGPA: {EDUCATION_DATA.cgpa}
                </span>
              </div>
            </div>

            {/* Languages */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#1a1a1e] border border-gray-200 dark:border-gray-700 shadow-xs">
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
                  <div key={idx} className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <span className="font-extrabold block text-gray-900 dark:text-white mb-0.5">{lang.name}</span>
                    <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </div>
    </PageLayout>
  );
}

export default AboutPage;
