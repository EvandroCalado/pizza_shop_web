import { zodResolver } from '@hookform/resolvers/zod';
import { SelectTrigger } from '@radix-ui/react-select';
import { Search, X } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router';
import { z } from 'zod';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectValue } from '../ui/select';

const orderFilterSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
});

type OrderFilterSchema = z.infer<typeof orderFilterSchema>;

export const OrderTableFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const orderId = searchParams.get('orderId');
  const customerName = searchParams.get('customerName');
  const status = searchParams.get('status');

  const { register, handleSubmit, control, reset } = useForm<OrderFilterSchema>(
    {
      resolver: zodResolver(orderFilterSchema),
      defaultValues: {
        orderId: orderId ?? '',
        customerName: customerName ?? '',
        status: status ?? 'all',
      },
    },
  );

  const handleSubmitForm = (data: OrderFilterSchema) => {
    setSearchParams((prevState) => {
      if (data.orderId) {
        prevState.set('orderId', data.orderId);
      } else {
        prevState.delete('orderId');
      }

      if (data.customerName) {
        prevState.set('customerName', data.customerName);
      } else {
        prevState.delete('customerName');
      }

      if (data.status) {
        prevState.set('status', data.status);
      } else {
        prevState.delete('status');
      }

      prevState.set('page', '1');

      return prevState;
    });
  };

  const handleClearFilters = () => {
    navigate('/orders');

    reset({
      orderId: '',
      customerName: '',
      status: 'all',
    });
  };

  return (
    <form
      className='flex items-center gap-2'
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <span className='text-sm font-semibold'>Filtros</span>
      <Input
        type='text'
        placeholder='ID do pedido'
        className='w-[320px]'
        {...register('orderId')}
      />
      <Input
        type='text'
        placeholder='Nome do client'
        className='w-[320px]'
        {...register('customerName')}
      />

      <Controller
        control={control}
        name='status'
        render={({ field: { name, onChange, value, disabled } }) => (
          <Select
            defaultValue='all'
            name={name}
            onValueChange={onChange}
            value={value}
            disabled={disabled}
          >
            <SelectTrigger className='w-[180px] rounded-md border p-1.5'>
              <SelectValue></SelectValue>
            </SelectTrigger>

            <SelectContent>
              <SelectItem value='all'>Todos</SelectItem>
              <SelectItem value='pending'>Pendente</SelectItem>
              <SelectItem value='canceled'>Cancelado</SelectItem>
              <SelectItem value='processing'>Em preparo</SelectItem>
              <SelectItem value='delivering'>Em entrega</SelectItem>
              <SelectItem value='delivered'>Entregue</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      <Button type='submit' variant='secondary' className='w-32 cursor-pointer'>
        <Search className='size-4' /> Filtrar
      </Button>

      <Button
        type='button'
        variant='outline'
        className='w-32 cursor-pointer'
        onClick={handleClearFilters}
      >
        <X className='size-4' /> Remover
      </Button>
    </form>
  );
};
