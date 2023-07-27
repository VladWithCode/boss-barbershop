'use client';
import React, { useState } from 'react';
import BackTopBtn from '../_components/BackTopBtn';
import ObservableBar from '../_components/ObservableBar';
import NavBar from './_components/NavBar';
import './style.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  const [isAtTop, setIsAtTop] = useState(false);

  return (
    <div className="relative z-0 h-full">
      <ObservableBar setIsIntersecting={setIsAtTop} />
      <div className="sticky top-0 left-1/2 right-1/2 z-40">
        <NavBar />
      </div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <div className="fixed bottom-12 right-8 z-40">
        <BackTopBtn isAtTop={isAtTop} />
      </div>
    </div>
  );
}

export default Layout;
