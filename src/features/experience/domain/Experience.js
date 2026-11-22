export class Experience {
  constructor({ id, company, role, period, location, highlights = [], projects = [] }) {
    this.id = id;
    this.company = company;
    this.role = role;
    this.period = period;
    this.location = location;
    this.highlights = highlights;
    this.projects = projects;
  }
}
