import { Home, Pizza, Utensils } from 'lucide-react';

import { ModeToggle } from '../theme';
import { Separator } from '../ui/separator';
import { AccountMenu } from './account-menu';
import { NavLink } from './nav-link';

export const Header = () => {
  return (
    <header className='border-b'>
      <div className='flex h-16 items-center gap-6 p-5'>
        <Pizza className='size-6' />

        <Separator orientation='vertical' />

        <nav className='flex items-center space-x-4 lg:space-x-6'>
          <NavLink to='/'>
            <Home className='size-4' />
            <span>Inicio</span>
          </NavLink>

          <NavLink to='/orders'>
            <Utensils className='size-4' />
            <span>Pedidos</span>
          </NavLink>
        </nav>

        <div className='ml-auto flex items-center gap-2'>
          <ModeToggle />
          <AccountMenu />
        </div>
      </div>
    </header>
  );
};
