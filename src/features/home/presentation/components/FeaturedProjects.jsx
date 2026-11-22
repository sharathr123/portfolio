import React from 'react';
import { SectionHeading } from '../../../../shared/components/molecules/SectionHeading';
import { ProjectCard } from '../../../projects/presentation/components/ProjectCard';
import { useProjects } from '../../../projects/presentation/hooks/useProjects';

export function FeaturedProjects() {
  const { featuredProjects } = useProjects();

  return (
    <section className="py-12 md:py-16 border-t border-[var(--border-color)]">
      <SectionHeading
        title="Featured Projects"
        subtitle="Production Mobile Applications"
        actionText="View All Projects"
        actionLink="/work"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {featuredProjects.slice(0, 2).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
