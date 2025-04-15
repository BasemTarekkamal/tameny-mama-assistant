
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="min-h-screen bg-tameny-light flex flex-col">
      <main className="flex-1 max-w-md mx-auto w-full px-4 pb-16 pt-4">
        <Outlet />
      </main>
      <Navigation />
      <Toaster position="top-center" />
    </div>
  );
};

export default Layout;
