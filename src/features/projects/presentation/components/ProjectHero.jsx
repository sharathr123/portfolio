import React from 'react';
import { SectionHeading } from '../../../../shared/components/molecules/SectionHeading';

export function ProjectHero() {
  return (
    <div className="mb-12">
      <SectionHeading
        title="Engineering & Case Studies"
        subtitle="Production Mobile Applications & Architecture Deep Dives"
      />
      <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
        Real-world React Native engineering across Android and iOS releases. From offline-first data flows and native module bridging to automated CI/CD store submissions.
      </p>
    </div>
  );
}

export default ProjectHero;
