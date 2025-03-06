import { Package } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export const MonthCanceledOrdersAmount = () => {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-base font-semibold'>
          Cancelamentos (mês)
        </CardTitle>
        <Package className='text-muted-foreground size-4' />
      </CardHeader>

      <CardContent className='space-y-1'>
        <span className='text-2x font-bold tracking-tight'>32</span>
        <p className='text-muted-foreground text-xs'>
          <span className='text-emerald-500'>-%</span> em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
};
