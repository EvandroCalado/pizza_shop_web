import { createRoot } from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Toaster } from '@/components/ui/sonner';
import { AppLayout, AuthLayout } from '@/pages/_layouts';
import { Dashboard, Orders } from '@/pages/app';
import { SignIn, SignUp } from '@/pages/auth';
import { ThemeProvider } from './components/theme';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <ThemeProvider defaultTheme='system' storageKey='pizza-shop-theme'>
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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </HelmetProvider>,
);
