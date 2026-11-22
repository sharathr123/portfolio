import React from 'react';

export function Heading1({ children, className = '' }) {
  return (
    <h1 className={`heading-display text-4xl sm:text-5xl md:text-6xl text-[var(--text-primary)] ${className}`}>
      {children}
    </h1>
  );
}

export function Heading2({ children, className = '' }) {
  return (
    <h2 className={`heading-section text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)] ${className}`}>
      {children}
    </h2>
  );
}

export function Heading3({ children, className = '' }) {
  return (
    <h3 className={`text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] ${className}`}>
      {children}
    </h3>
  );
}

export function Paragraph({ children, className = '' }) {
  return (
    <p className={`text-editorial text-base sm:text-lg ${className}`}>
      {children}
    </p>
  );
}
