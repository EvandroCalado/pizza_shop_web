import { useMutation } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArrowRight, X } from 'lucide-react';

import {
  cancelOrder,
  deliveredOrder,
  deliveringOrder,
  GetOrdersResponse,
  Order,
  processingOrder,
  Status,
} from '@/api';
import { queryClient } from '@/lib/react-query';
import { Button } from '../ui/button';
import { TableCell, TableRow } from '../ui/table';
import { OrderStatus } from './order-status';
import { OrderDetails } from './orders-details';

type OrderTableRowProps = {
  order: Order;
};

export const OrderTableRow = ({ order }: OrderTableRowProps) => {
  const updateOrdersStatus = (orderId: string, status: Status) => {
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
              status,
            };
          }

          return order;
        }),
      });
    });
  };

  const { mutateAsync: cancelOrderMutation, isPending: isCancelling } =
    useMutation({
      mutationFn: cancelOrder,
      onSuccess(_, { orderId }) {
        updateOrdersStatus(orderId, 'canceled');
      },
    });

  const { mutateAsync: processingOrderMutation, isPending: isProcessing } =
    useMutation({
      mutationFn: processingOrder,
      onSuccess(_, { orderId }) {
        updateOrdersStatus(orderId, 'processing');
      },
    });

  const { mutateAsync: deliveringOrderMutation, isPending: isDelivering } =
    useMutation({
      mutationFn: deliveringOrder,
      onSuccess(_, { orderId }) {
        updateOrdersStatus(orderId, 'delivering');
      },
    });

  const { mutateAsync: deliveredOrderMutation, isPending: isDelivered } =
    useMutation({
      mutationFn: deliveredOrder,
      onSuccess(_, { orderId }) {
        updateOrdersStatus(orderId, 'delivered');
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
        {order.status === 'pending' && (
          <Button
            variant='secondary'
            size='sm'
            className='w-32 cursor-pointer'
            disabled={isProcessing}
            onClick={() => processingOrderMutation({ orderId: order.orderId })}
          >
            <ArrowRight className='size-3' />
            {isProcessing ? (
              <span className='animate-pulse'>Carregando...</span>
            ) : (
              <span>Aprovar</span>
            )}
          </Button>
        )}

        {order.status === 'processing' && (
          <Button
            variant='secondary'
            size='sm'
            className='w-32 cursor-pointer'
            disabled={isDelivering}
            onClick={() => deliveringOrderMutation({ orderId: order.orderId })}
          >
            <ArrowRight className='size-3' />
            {isProcessing ? (
              <span className='animate-pulse'>Carregando...</span>
            ) : (
              <span>Em entrega</span>
            )}
          </Button>
        )}

        {order.status === 'delivering' && (
          <Button
            variant='secondary'
            size='sm'
            className='w-32 cursor-pointer'
            disabled={isDelivered}
            onClick={() => deliveredOrderMutation({ orderId: order.orderId })}
          >
            <ArrowRight className='size-3' />
            {isProcessing ? (
              <span className='animate-pulse'>Carregando...</span>
            ) : (
              <span>Entregue</span>
            )}
          </Button>
        )}
      </TableCell>
      <TableCell>
        {order.status !== 'delivered' && (
          <Button
            variant='outline'
            size='sm'
            className='w-32 cursor-pointer'
            disabled={
              isCancelling || !['pending', 'processing'].includes(order.status)
            }
            onClick={() => cancelOrderMutation({ orderId: order.orderId })}
          >
            <X className='size-3' />
            {isCancelling ? (
              <span className='animate-pulse'>Carregando...</span>
            ) : (
              <span>Cancelar</span>
            )}
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
};
