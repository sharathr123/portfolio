import React from 'react';
import { AppProviders } from './providers/AppProviders';
import { AppRouter } from './navigation/AppRouter';
import { ErrorBoundary } from '../shared/components/organisms/ErrorBoundary';

export function App() {
  return (
    <ErrorBoundary>
      <AppProviders>
        <AppRouter />
      </AppProviders>
    </ErrorBoundary>
  );
}

export default App;
