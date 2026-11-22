import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../../shared/layouts/MainLayout';
import { routeConfig } from './RouteConfig';

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full border-2 border-[#6650a4]/20 border-t-[#6650a4] animate-spin" />
        <span className="text-xs font-semibold text-[var(--text-muted)] tracking-wider uppercase">
          Loading...
        </span>
      </div>
    </div>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {routeConfig.map((route) => {
            const Component = route.Component;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  route.isLazy ? (
                    <Suspense fallback={<PageLoader />}>
                      <Component />
                    </Suspense>
                  ) : (
                    <Component />
                  )
                }
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
