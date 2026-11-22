export class ProjectUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  getFeaturedProjects() {
    return this.repository.getFeatured();
  }

  getAllProjects() {
    return this.repository.getAll();
  }

  getProjectBySlug(slug) {
    return this.repository.getBySlug(slug);
  }

  filterProjectsByTech(tech) {
    if (!tech || tech === 'All') {
      return this.getAllProjects();
    }
    return this.repository.filterByTech(tech);
  }
}
