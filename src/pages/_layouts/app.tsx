import { useEffect } from 'react';

import { isAxiosError } from 'axios';
import { Outlet, useNavigate } from 'react-router';

import { Header } from '@/components/shared';
import { api } from '@/lib/axios';

export const AppLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error) && error.response?.status === 401) {
          navigate('/sign-in', { replace: true });
        }
      },
    );

    return () => {
      api.interceptors.response.eject(interceptorId);
    };
  }, [navigate]);

  return (
    <main className='flex min-h-screen flex-col antialiased'>
      <Header />

      <div className='flex flex-1 flex-col gap-4 p-5'>
        <Outlet />
      </div>
    </main>
  );
};
