import { Pizza } from 'lucide-react';
import { Link, Outlet } from 'react-router';

export const AuthLayout = () => {
  return (
    <main className='grid min-h-screen antialiased md:grid-cols-2'>
      <div className='border-foreground/5 bg-muted text-muted-foreground hidden h-full flex-col justify-between border-r p-10 md:flex'>
        <Link
          to='/'
          className='text-foreground flex items-center gap-3 text-lg font-medium'
        >
          <Pizza className='size-5' />
          <span>Pizza Shop</span>
        </Link>

        <footer className='text-sm'>
          Painel do parceiro &copy; Pizza Shop - {new Date().getFullYear()}
        </footer>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <Outlet />
      </div>
    </main>
  );
};
