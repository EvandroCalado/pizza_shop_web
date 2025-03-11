import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Search } from 'lucide-react';

import { getOrdersDetails } from '@/api';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { OrderDetailsSkeleton } from './order-details-skeleton';
import { OrderStatus } from './order-status';

type OrderFilterSchema = {
  orderId: string;
};

export const OrderDetails = ({ orderId }: OrderFilterSchema) => {
  const [open, setOpen] = useState(false);

  const { data: order } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrdersDetails(orderId),
    enabled: open,
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline' size='sm' className='cursor-pointer'>
          <Search className='size-3' />
          <span className='sr-only'>Detalhes do pedido</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pedido: {orderId}</DialogTitle>
          <DialogDescription>Detalhes do pedido</DialogDescription>
        </DialogHeader>

        {order ? (
          <div className='space-y-6'>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className='text-muted-foreground'>
                    Status
                  </TableCell>
                  <TableCell className='flex items-center justify-end'>
                    <OrderStatus status={order.status} />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className='text-muted-foreground'>
                    Cliente
                  </TableCell>
                  <TableCell className='flex items-center justify-end'>
                    {order.customer.name}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className='text-muted-foreground'>
                    Telefone
                  </TableCell>
                  <TableCell className='flex items-center justify-end'>
                    {order.customer.phone ?? 'Não informado'}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className='text-muted-foreground'>Email</TableCell>
                  <TableCell className='flex items-center justify-end'>
                    {order.customer.email}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className='text-muted-foreground'>
                    Realizado
                  </TableCell>
                  <TableCell className='flex items-center justify-end'>
                    {formatDistanceToNow(order.createdAt, {
                      locale: ptBR,
                      addSuffix: true,
                    })}
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
                {order.orderItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className='font-medium'>
                      {item.product.name}
                    </TableCell>
                    <TableCell className='text-right'>
                      {item.quantity}
                    </TableCell>
                    <TableCell className='text-right'>
                      {(item.priceInCents / 100).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </TableCell>
                    <TableCell className='text-right'>
                      {(
                        (item.priceInCents * item.quantity) /
                        100
                      ).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

              <TableFooter>
                <TableRow>
                  <TableCell className='font-medium'>Total</TableCell>
                  <TableCell colSpan={3} className='text-right'>
                    {(order.totalInCents / 100).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        ) : (
          <OrderDetailsSkeleton />
        )}
      </DialogContent>
    </Dialog>
  );
};
