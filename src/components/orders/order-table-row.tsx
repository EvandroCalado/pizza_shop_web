import { ArrowRight, Search, X } from 'lucide-react';

import { Button } from '../ui/button';
import { TableCell, TableRow } from '../ui/table';

export const OrderTableRow = () => {
  return (
    <TableRow>
      <TableCell>
        <Button variant='outline' size='sm' className='cursor-pointer'>
          <Search className='size-3' />
          <span className='sr-only'>Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell className='font-mono text-xs font-medium'>
        123145646789232
      </TableCell>
      <TableCell className='text-muted-foreground'>há 15 minutos</TableCell>
      <TableCell>
        <div className='flex items-center gap-2'>
          <span className='size-2 rounded-full bg-zinc-400' />
          <span className='text-muted-foreground font-medium'>Pendente</span>
        </div>
      </TableCell>
      <TableCell className='font-medium'>Evandro Calado da Silva</TableCell>
      <TableCell className='font-medium'>R&149,90</TableCell>
      <TableCell>
        <Button variant='secondary' size='sm' className='cursor-pointer'>
          <ArrowRight className='size-3' />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant='outline' size='sm' className='cursor-pointer'>
          <X className='size-3' />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
};
