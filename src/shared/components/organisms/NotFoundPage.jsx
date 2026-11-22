import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { PageLayout } from '../../layouts/PageLayout';

export function NotFoundPage() {
  return (
    <PageLayout title="404 — Page Not Found">
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 rounded-3xl bg-[#ede8f8] text-[#6650a4] dark:bg-[#2e2645] dark:text-[#aa97e8] flex items-center justify-center text-3xl font-extrabold mb-6 shadow-sm">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-3">
          Page Not Found
        </h1>
        <p className="text-base text-[var(--text-secondary)] max-w-md mb-8">
          The page you are looking for doesn't exist or has been moved. Let's get you back to the home page.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6650a4] hover:bg-[#533f89] text-white text-sm font-semibold shadow-xs transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </PageLayout>
  );
}

export default NotFoundPage;
