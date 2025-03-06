import { createRoot } from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Toaster } from '@/components/ui/sonner';
import { AppLayout, AuthLayout } from '@/pages/_layouts';
import { Dashboard } from '@/pages/app';
import { SignIn } from '@/pages/auth';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <Helmet titleTemplate='%s | Pizza Shop' />
    <Toaster richColors />
    <BrowserRouter>
      <Routes>
        {/* app */}
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        {/* auth */}
        <Route element={<AuthLayout />}>
          <Route path='sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </HelmetProvider>,
);
