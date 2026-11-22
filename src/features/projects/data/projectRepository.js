import { Project } from '../domain/Project';
import { PROJECTS_RAW } from './projectData';

export const projectMapper = {
  toDomain(raw) {
    return new Project({
      id: raw.id,
      slug: raw.slug,
      title: raw.title,
      subtitle: raw.subtitle,
      category: raw.category,
      badge: raw.badge,
      summary: raw.summary,
      description: raw.description,
      technologies: raw.technologies,
      storeLinks: raw.storeLinks,
      accentColor: raw.accentColor,
      secondaryColor: raw.secondaryColor,
      isFeatured: raw.isFeatured,
      challenges: raw.challenges,
      keyContributions: raw.keyContributions,
      architecture: raw.architecture,
      metrics: raw.metrics,
    });
  },

  toDomainList(rawList) {
    return rawList.map((item) => this.toDomain(item));
  },
};

export const projectRepository = {
  getAll() {
    return projectMapper.toDomainList(PROJECTS_RAW);
  },

  getFeatured() {
    const featured = PROJECTS_RAW.filter((p) => p.isFeatured);
    return projectMapper.toDomainList(featured);
  },

  getBySlug(slug) {
    const raw = PROJECTS_RAW.find((p) => p.slug === slug);
    return raw ? projectMapper.toDomain(raw) : null;
  },

  filterByTech(tech) {
    const filtered = PROJECTS_RAW.filter((p) =>
      p.technologies.some((t) => t.toLowerCase().includes(tech.toLowerCase()))
    );
    return projectMapper.toDomainList(filtered);
  },
};
