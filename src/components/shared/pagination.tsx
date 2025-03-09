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
  onPageChange: (page: number) => Promise<void> | void;
};

export const Pagination = ({
  pageIndex,
  totalCount,
  perPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalCount / perPage) || 1;

  if (totalPages === 1) {
    return null;
  }

  return (
    <div className='flex items-center justify-between'>
      <span className='text-muted-foreground text-sm'>
        Total de {totalCount} registros
      </span>

      <div className='flex items-center gap-4 lg:gap-8'>
        <div className='text-center text-sm font-medium'>
          Página {pageIndex + 1} de {totalPages}
        </div>

        <div className='flex items-center gap-2'>
          <Button
            variant='outline'
            size='icon'
            className='cursor-pointer'
            onClick={() => onPageChange(0)}
            disabled={pageIndex === 0}
          >
            <ChevronsLeft className='size-4' />
            <span className='sr-only'>Primeira página</span>
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='cursor-pointer'
            onClick={() => onPageChange(pageIndex - 1)}
            disabled={pageIndex === 0}
          >
            <ChevronLeft className='size-4' />
            <span className='sr-only'>Página anterior</span>
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='cursor-pointer'
            onClick={() => onPageChange(pageIndex + 1)}
            disabled={pageIndex === totalPages - 1}
          >
            <ChevronRight className='size-4' />
            <span className='sr-only'>Próxima página</span>
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='cursor-pointer'
            onClick={() => onPageChange(totalPages - 1)}
            disabled={pageIndex === totalPages - 1}
          >
            <ChevronsRight className='size-4' />
            <span className='sr-only'>Última página</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
