import { Status } from '@/api';
import { cn } from '@/lib/utils';

const orderStatusMap: Record<Status, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  processing: 'Em preparo',
  delivering: 'Em entrega',
  delivered: 'Entregue',
};

type OrderStatusProps = {
  status: Status;
};

export const OrderStatus = ({ status }: OrderStatusProps) => {
  return (
    <div className='flex items-center gap-2'>
      <span
        className={cn('size-2 rounded-full', {
          'bg-zinc-400': status === 'pending',
          'bg-red-500': status === 'canceled',
          'bg-yellow-500': status === 'processing',
          'bg-violet-500': status === 'delivering',
          'bg-green-500': status === 'delivered',
        })}
      />
      <span className='text-muted-foreground font-medium'>
        {orderStatusMap[status]}
      </span>
    </div>
  );
};
