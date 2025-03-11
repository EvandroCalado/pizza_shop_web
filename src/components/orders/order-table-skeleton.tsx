import { Skeleton } from '../ui/skeleton';
import { TableCell, TableRow } from '../ui/table';

export const OrderTableSkeleton = () => {
  return Array.from({ length: 10 }).map((_, index) => {
    return (
      <TableRow key={index}>
        <TableCell>
          <Skeleton className='size-8 rounded' />
        </TableCell>
        <TableCell>
          <Skeleton className='h-4 w-[172px]' />
        </TableCell>
        <TableCell>
          <Skeleton className='h-4 w-[60px]' />
        </TableCell>
        <TableCell>
          <Skeleton className='h-4 w-[80px]' />
        </TableCell>
        <TableCell>
          <Skeleton className='h-4 w-[180px]' />
        </TableCell>
        <TableCell>
          <Skeleton className='h-4 w-[50px]' />
        </TableCell>
        <TableCell>
          <Skeleton className='h-8 w-[128px]' />
        </TableCell>
        <TableCell>
          <Skeleton className='h-8 w-[128px]' />
        </TableCell>
      </TableRow>
    );
  });
};
