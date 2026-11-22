export class Skill {
  constructor({ id, name, category, icon, description, featured = false, level = 'Advanced' }) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.icon = icon;
    this.description = description;
    this.featured = featured;
    this.level = level;
  }
}
