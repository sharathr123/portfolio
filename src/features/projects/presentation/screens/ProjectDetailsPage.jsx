import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageLayout } from '../../../../shared/layouts/PageLayout';
import { useProjects } from '../hooks/useProjects';
import { CaseStudySection } from '../components/CaseStudySection';

export function ProjectDetailsPage() {
  const { slug } = useParams();
  const { getProjectBySlug } = useProjects();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <PageLayout title="Project Not Found">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#6650a4] text-white text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Work</span>
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={`${project.title} Case Study`}>
      <div className="mb-6">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[#6650a4] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      <CaseStudySection project={project} />
    </PageLayout>
  );
}

export default ProjectDetailsPage;
