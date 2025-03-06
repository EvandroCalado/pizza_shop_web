import { Outlet } from 'react-router';

import { Header } from '@/components/shared';

export const AppLayout = () => {
  return (
    <main className='flex min-h-screen flex-col antialiased'>
      <Header />

      <div className='flex flex-1 flex-col gap-4 p-5'>
        <Outlet />
      </div>
    </main>
  );
};
