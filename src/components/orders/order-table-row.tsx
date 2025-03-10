import { useMutation } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArrowRight, X } from 'lucide-react';

import { cancelOrder, GetOrdersResponse, Order } from '@/api';
import { queryClient } from '@/lib/react-query';
import { Button } from '../ui/button';
import { TableCell, TableRow } from '../ui/table';
import { OrderStatus } from './order-status';
import { OrderDetails } from './orders-details';

type OrderTableRowProps = {
  order: Order;
};

export const OrderTableRow = ({ order }: OrderTableRowProps) => {
  const { mutateAsync: cancelOrderMutation, isPending } = useMutation({
    mutationFn: cancelOrder,
    onSuccess(_, { orderId }) {
      const ordersCached = queryClient.getQueriesData<GetOrdersResponse>({
        queryKey: ['orders'],
      });

      ordersCached.forEach(([cacheKey, cacheData]) => {
        if (!cacheData) return;

        queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
          ...cacheData,
          orders: cacheData.orders.map((order) => {
            if (order.orderId === orderId) {
              return {
                ...order,
                status: 'canceled',
              };
            }

            return order;
          }),
        });
      });
    },
  });

  return (
    <TableRow>
      <TableCell>
        <OrderDetails orderId={order.orderId} />
      </TableCell>
      <TableCell className='font-mono text-xs font-medium'>
        {order.orderId}
      </TableCell>
      <TableCell className='text-muted-foreground'>
        {formatDistanceToNow(order.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className='font-medium'>{order.customerName}</TableCell>
      <TableCell className='font-medium'>
        {(order.total / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>
      <TableCell>
        <Button variant='secondary' size='sm' className='w-32 cursor-pointer'>
          <ArrowRight className='size-3' />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button
          variant='outline'
          size='sm'
          className='w-32 cursor-pointer'
          disabled={
            isPending || !['pending', 'processing'].includes(order.status)
          }
          onClick={() => cancelOrderMutation({ orderId: order.orderId })}
        >
          <X className='size-3' />
          {isPending ? (
            <span className='animate-pulse'>Cancelando...</span>
          ) : (
            <span>Cancelar</span>
          )}
        </Button>
      </TableCell>
    </TableRow>
  );
};
