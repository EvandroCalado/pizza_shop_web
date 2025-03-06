import { Building, ChevronDown, LogOut } from 'lucide-react';

import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export const AccountMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='flex cursor-pointer items-center gap-2 select-none'
        >
          Pizza Shop
          <ChevronDown className='size-4' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-56'>
        <DropdownMenuLabel className='flex flex-col'>
          <span>Evandro Calado</span>
          <span className='text-muted-foreground text-xs'>
            evandro@email.com
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem className='cursor-pointer'>
          <Building className='mr-2 size-4' /> <span>Perfil</span>
        </DropdownMenuItem>

        <DropdownMenuItem className='cursor-pointer'>
          <LogOut className='mr-2 size-4' /> <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
