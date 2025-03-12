import { QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Toaster } from '@/components/ui/sonner';
import { AppLayout, AuthLayout } from '@/pages/_layouts';
import { Dashboard, Orders } from '@/pages/app';
import { SignIn, SignUp } from '@/pages/auth';
import { ThemeProvider } from './components/theme';

import './index.css';

import { queryClient } from './lib/react-query';
import { NotFound } from './pages/not-found';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <ThemeProvider defaultTheme='system' storageKey='pizza-shop-theme'>
      <QueryClientProvider client={queryClient}>
        <Helmet titleTemplate='%s | Pizza Shop' />
        <Toaster richColors />
        <BrowserRouter>
          <Routes>
            {/* app */}
            <Route path='/' element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='orders' element={<Orders />} />
            </Route>

            {/* auth */}
            <Route element={<AuthLayout />}>
              <Route path='sign-in' element={<SignIn />} />
              <Route path='sign-up' element={<SignUp />} />
            </Route>

            {/* 404 */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>,
);
