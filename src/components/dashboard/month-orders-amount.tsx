import { useQuery } from '@tanstack/react-query';
import { Utensils } from 'lucide-react';

import { getMonthOrdersAmount } from '@/api';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MetricSkeleton } from './metric-skeleton';

export const MonthOrdersAmount = () => {
  const { data: monthOrdersAmount } = useQuery({
    queryKey: ['metrics', 'month-orders-amount'],
    queryFn: getMonthOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-base font-semibold'>Pedidos (mês)</CardTitle>
        <Utensils className='text-muted-foreground size-4' />
      </CardHeader>

      <CardContent className='space-y-1'>
        {monthOrdersAmount ? (
          <>
            <span className='text-2x font-bold tracking-tight'>
              {monthOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className='text-muted-foreground text-xs'>
              {monthOrdersAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className='text-emerald-500'>
                    +{monthOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  <span>em relação ao mês passado</span>
                </>
              ) : (
                <>
                  <span className='text-red-500'>
                    {monthOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  <span>em relação ao mês passado</span>
                </>
              )}
            </p>
          </>
        ) : (
          <MetricSkeleton />
        )}
      </CardContent>
    </Card>
  );
};
