import React, { lazy } from 'react';
import { NAVIGATION_PATHS } from './navigationPaths';

// Synchronously load HomePage so the primary portfolio view renders instantly on refresh
import HomePage from '../../features/home/presentation/screens/HomePage';

// Lazy load secondary routes with Suspense fallback
const WorkPage = lazy(() => import('../../features/projects/presentation/screens/WorkPage'));
const ProjectDetailsPage = lazy(() => import('../../features/projects/presentation/screens/ProjectDetailsPage'));
const AboutPage = lazy(() => import('../../features/home/presentation/screens/AboutPage'));
const ContactPage = lazy(() => import('../../features/contact/presentation/screens/ContactPage'));
const NotFoundPage = lazy(() => import('../../shared/components/organisms/NotFoundPage'));

export const routeConfig = [
  {
    path: NAVIGATION_PATHS.HOME,
    Component: HomePage,
    isLazy: false,
  },
  {
    path: NAVIGATION_PATHS.WORK,
    Component: WorkPage,
    isLazy: true,
  },
  {
    path: NAVIGATION_PATHS.PROJECT_DETAILS,
    Component: ProjectDetailsPage,
    isLazy: true,
  },
  {
    path: NAVIGATION_PATHS.ABOUT,
    Component: AboutPage,
    isLazy: true,
  },
  {
    path: NAVIGATION_PATHS.CONTACT,
    Component: ContactPage,
    isLazy: true,
  },
  {
    path: NAVIGATION_PATHS.NOT_FOUND,
    Component: NotFoundPage,
    isLazy: true,
  },
];

export default routeConfig;
