import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArrowRight, X } from 'lucide-react';

import { Order } from '@/api';
import { Button } from '../ui/button';
import { TableCell, TableRow } from '../ui/table';
import { OrderStatus } from './order-status';
import { OrderDetails } from './orders-details';

type OrderTableRowProps = {
  order: Order;
};

export const OrderTableRow = ({ order }: OrderTableRowProps) => {
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
