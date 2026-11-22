import React, { useEffect } from 'react';
import { appConfig } from '../../core/config/appConfig';

export function PageLayout({
  title,
  description,
  children,
  className = '',
}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${appConfig.developer.name}`
      : appConfig.meta.siteTitle;
    document.title = fullTitle;

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 ${className}`}
    >
      {children}
    </div>
  );
}

export default PageLayout;
