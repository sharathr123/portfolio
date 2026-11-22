import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { SiApple, SiGoogleplay } from 'react-icons/si';
import { PhoneMockup } from '../../../../shared/components/atoms/PhoneMockup';

export function CaseStudySection({ project }) {
  const isMaxicon = project.slug === 'maxicon';

  return (
    <article
      id={project.slug}
      className="scroll-mt-24 p-5 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs space-y-6"
    >
      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[var(--border-color)]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6650a4] dark:text-[#aa97e8]">
              {project.category}
            </span>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400">
              {project.badge}
            </span>
          </div>

          <h3 className="heading-section text-2xl sm:text-3xl text-[var(--text-primary)] mb-1.5">
            {project.title} — {project.subtitle}
          </h3>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Store Links for both App Store & Google Play */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {project.storeLinks?.appStore && (
            <a
              href={project.storeLinks.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-black text-white hover:bg-gray-800 shadow-xs transition-all"
            >
              <SiApple className="w-3.5 h-3.5" />
              <span>App Store</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </a>
          )}

          {project.storeLinks?.playStore && (
            <a
              href={project.storeLinks.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-[#258d8b] hover:bg-[#1f7573] text-white shadow-xs transition-all"
            >
              <SiGoogleplay className="w-3.5 h-3.5" />
              <span>Google Play</span>
              <ExternalLink className="w-3 h-3 text-teal-200" />
            </a>
          )}
        </div>
      </div>

      {/* Main Grid: Clean Highlights + Modern iOS Phone Mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left Column: Contributions & Highlights (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Key Contributions */}
          <div>
            <h4 className="font-bold text-sm text-[var(--text-primary)] mb-2.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6650a4] dark:bg-[#aa97e8]"></span>
              <span>Key Engineering Contributions</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
              {project.keyContributions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#6650a4] dark:text-[#aa97e8] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-[var(--border-color)]">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-2.5 rounded-2xl bg-[var(--bg-subsurface)] text-center">
                  <span className="block font-extrabold text-sm sm:text-base text-[#6650a4] dark:text-[#aa97e8]">
                    {metric.value}
                  </span>
                  <span className="text-[10px] text-[var(--text-secondary)] font-medium">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Technologies Tag Cloud */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-[var(--bg-subsurface)] text-[var(--text-secondary)] border border-[var(--border-color)]"
              >
                {t}
              </span>
            ))}
          </div>

        </div>

        {/* Right Column: Modern iOS Phone Mockup (5 cols) */}
        <div className="lg:col-span-5 flex justify-center py-2">
          <PhoneMockup type={isMaxicon ? 'maxicon' : 'mycore'} interactive={true} size="md" />
        </div>

      </div>
    </article>
  );
}

export default CaseStudySection;
