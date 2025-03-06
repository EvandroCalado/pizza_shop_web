import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

import { Button } from '../ui/button';

type PaginationProps = {
  pageIndex: number;
  totalCount: number;
  perPage: number;
};

export const Pagination = ({
  pageIndex,
  totalCount,
  perPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalCount / perPage) || 1;

  return (
    <div className='flex items-center justify-between'>
      <span className='text-muted-foreground text-sm'>
        Total de {totalCount} registros
      </span>

      <div className='fex items-center gap-4 lg:gap-8'>
        <div className='mb-2 text-center text-sm font-medium'>
          Página {pageIndex + 1} de {totalPages}
        </div>

        <div className='flex items-center gap-2'>
          <Button variant='outline' size='icon' className='cursor-pointer'>
            <ChevronsLeft className='size-4' />
            <span className='sr-only'>Primeira página</span>
          </Button>
          <Button variant='outline' size='icon' className='cursor-pointer'>
            <ChevronLeft className='size-4' />
            <span className='sr-only'>Página anterior</span>
          </Button>
          <Button variant='outline' size='icon' className='cursor-pointer'>
            <ChevronRight className='size-4' />
            <span className='sr-only'>Próxima página</span>
          </Button>
          <Button variant='outline' size='icon' className='cursor-pointer'>
            <ChevronsRight className='size-4' />
            <span className='sr-only'>Última página</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
