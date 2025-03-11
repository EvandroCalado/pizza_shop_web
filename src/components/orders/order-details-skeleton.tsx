import { Skeleton } from '../ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

export const OrderDetailsSkeleton = () => {
  return (
    <div className='space-y-6'>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className='text-muted-foreground'>Status</TableCell>
            <TableCell className='flex items-center justify-end'>
              <Skeleton className='h-5 w-[76px]' />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='text-muted-foreground'>Cliente</TableCell>
            <TableCell className='flex items-center justify-end'>
              <Skeleton className='h-5 w-[100px]' />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='text-muted-foreground'>Telefone</TableCell>
            <TableCell className='flex items-center justify-end'>
              <Skeleton className='h-5 w-[140px]' />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='text-muted-foreground'>Email</TableCell>
            <TableCell className='flex items-center justify-end'>
              <Skeleton className='h-5 w-[200px]' />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className='text-muted-foreground'>Realizado</TableCell>
            <TableCell className='flex items-center justify-end'>
              <Skeleton className='h-5 w-[148px]' />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead className='text-right'>Qtd.</TableHead>
            <TableHead className='text-right'>Preço</TableHead>
            <TableHead className='text-right'>Subtotal</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 2 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell className='font-medium'>
                <Skeleton className='h-5 w-[140px]' />
              </TableCell>
              <TableCell className='text-right'>
                <Skeleton className='h-5 w-3' />
              </TableCell>
              <TableCell className='text-right'>
                <Skeleton className='h-5 w-12' />
              </TableCell>
              <TableCell className='text-right'>
                <Skeleton className='h-5 w-12' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell className='font-medium'>Total</TableCell>
            <TableCell colSpan={3} className='text-right'>
              <Skeleton className='h-5 w-20' />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};
