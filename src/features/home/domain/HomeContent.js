export class HomeContent {
  constructor({ headline, subheadline, stats = [], philosophy = [] }) {
    this.headline = headline;
    this.subheadline = subheadline;
    this.stats = stats;
    this.philosophy = philosophy;
  }
}
