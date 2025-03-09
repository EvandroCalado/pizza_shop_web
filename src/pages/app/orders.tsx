import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router';
import { z } from 'zod';

import { getOrders, Status } from '@/api';
import { OrderTableFilters, OrderTableRow } from '@/components/orders';
import { Pagination } from '@/components/shared';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const Orders = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .safeParse(searchParams.get('page') ?? 1).data;

  const orderId = searchParams.get('orderId');
  const customerName = searchParams.get('customerName');
  const status = searchParams.get('status') as Status | null;

  const { data: result } = useQuery({
    queryKey: ['orders', pageIndex, orderId, customerName, status],
    queryFn: () => getOrders({ pageIndex, orderId, customerName, status }),
  });

  const handlePageChange = (page: number) => {
    setSearchParams((prevState) => {
      prevState.set('page', (page + 1).toString());

      return prevState;
    });
  };

  return (
    <>
      <Helmet title='Pedidos' />

      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Pedidos</h1>

        <div className='space-y-2.5'>
          <OrderTableFilters />

          <div className='rounded-md border'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[64px]'></TableHead>
                  <TableHead className='w-[140px]'>Identificador</TableHead>
                  <TableHead className='w-[180px]'>Realizado há</TableHead>
                  <TableHead className='w-[140px]'>Status</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead className='w-[140px]'>Total do pedido</TableHead>
                  <TableHead className='w-[164px]'></TableHead>
                  <TableHead className='w-[134px]'></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {result?.orders.map((order) => (
                  <OrderTableRow key={order.orderId} order={order} />
                ))}
              </TableBody>
            </Table>
          </div>

          {result && (
            <Pagination
              pageIndex={result.meta.pageIndex}
              perPage={result.meta.perPage}
              totalCount={result.meta.totalCount}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </>
  );
};
