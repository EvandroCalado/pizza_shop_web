import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import { AppLayout, AuthLayout } from '@/pages/_layouts';
import { Dashboard } from '@/pages/app';
import { SignIn } from '@/pages/auth';

import './index.css';

createRoot(document.getElementById('root')!).render(
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
  </BrowserRouter>,
);
