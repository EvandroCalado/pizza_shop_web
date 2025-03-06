import { SelectTrigger } from '@radix-ui/react-select';
import { Search, X } from 'lucide-react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectValue } from '../ui/select';

export const OrderTableFilters = () => {
  return (
    <form className='flex items-center gap-2'>
      <span className='text-sm font-semibold'>Filtros</span>
      <Input type='text' placeholder='ID do pedido' className='w-[320px]' />
      <Input type='text' placeholder='Nome do client' className='w-[320px]' />

      <Select defaultValue='all'>
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

      <Button
        type='submit'
        variant={'secondary'}
        className='w-32 cursor-pointer'
      >
        <Search className='size-4' /> Filtrar
      </Button>

      <Button type='button' variant='outline' className='w-32 cursor-pointer'>
        <X className='size-4' /> Remover
      </Button>
    </form>
  );
};
