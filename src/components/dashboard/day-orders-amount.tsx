import { useQuery } from '@tanstack/react-query';
import { Utensils } from 'lucide-react';

import { getDayOrdersAmount } from '@/api';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MetricSkeleton } from './metric-skeleton';

export const DayOrdersAmount = () => {
  const { data: dayOrdersAmount } = useQuery({
    queryKey: ['metrics', 'day-orders-amount'],
    queryFn: getDayOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-base font-semibold'>Pedidos (dia)</CardTitle>
        <Utensils className='text-muted-foreground size-4' />
      </CardHeader>

      <CardContent className='space-y-1'>
        {dayOrdersAmount ? (
          <>
            <span className='text-2x font-bold tracking-tight'>
              {dayOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className='text-muted-foreground text-xs'>
              {dayOrdersAmount.diffFromYesterday >= 0 ? (
                <>
                  <span className='text-emerald-500'>
                    +{dayOrdersAmount.diffFromYesterday}%
                  </span>{' '}
                  <span>em relação ao mês passado</span>
                </>
              ) : (
                <>
                  <span className='text-red-500'>
                    {dayOrdersAmount.diffFromYesterday}%
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
