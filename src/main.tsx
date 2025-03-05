import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Dashboard } from '@/pages/app';

import './index.css';

import { SignIn } from './pages/auth';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/sign-in' element={<SignIn />} />
    </Routes>
  </BrowserRouter>,
);
