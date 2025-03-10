import { Utensils } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export const MonthOrdersAmount = () => {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-base font-semibold'>Pedidos (mês)</CardTitle>
        <Utensils className='text-muted-foreground size-4' />
      </CardHeader>

      <CardContent className='space-y-1'>
        <span className='text-2x font-bold tracking-tight'>246</span>
        <p className='text-muted-foreground text-xs'>
          <span className='text-emerald-500'>+6%</span> em relação ao mês
          passado
        </p>
      </CardContent>
    </Card>
  );
};
