import { useState, useMemo } from 'react';
import { ProjectUseCase } from '../../domain/ProjectUseCase';
import { projectRepository } from '../../data/projectRepository';

export function useProjects() {
  const useCase = useMemo(() => new ProjectUseCase(projectRepository), []);
  const [selectedTech, setSelectedTech] = useState('All');

  const allProjects = useMemo(() => useCase.getAllProjects(), [useCase]);
  const featuredProjects = useMemo(() => useCase.getFeaturedProjects(), [useCase]);

  const availableTechs = useMemo(() => {
    const set = new Set();
    allProjects.forEach((p) => p.technologies.forEach((t) => set.add(t)));
    return ['All', ...Array.from(set)];
  }, [allProjects]);

  const filteredProjects = useMemo(() => {
    return useCase.filterProjectsByTech(selectedTech);
  }, [useCase, selectedTech]);

  const getProjectBySlug = (slug) => {
    return useCase.getProjectBySlug(slug);
  };

  return {
    projects: filteredProjects,
    featuredProjects,
    allProjects,
    availableTechs,
    selectedTech,
    setSelectedTech,
    getProjectBySlug,
  };
}
