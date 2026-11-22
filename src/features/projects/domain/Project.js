export class Project {
  constructor({
    id,
    slug,
    title,
    subtitle,
    category,
    badge,
    summary,
    description,
    technologies,
    storeLinks = {},
    accentColor,
    secondaryColor,
    isFeatured = false,
    challenges = [],
    keyContributions = [],
    architecture = null,
    metrics = [],
  }) {
    this.id = id;
    this.slug = slug;
    this.title = title;
    this.subtitle = subtitle;
    this.category = category;
    this.badge = badge;
    this.summary = summary;
    this.description = description;
    this.technologies = technologies;
    this.storeLinks = storeLinks;
    this.accentColor = accentColor;
    this.secondaryColor = secondaryColor;
    this.isFeatured = isFeatured;
    this.challenges = challenges;
    this.keyContributions = keyContributions;
    this.architecture = architecture;
    this.metrics = metrics;
  }
}
