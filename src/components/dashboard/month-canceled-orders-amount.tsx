import { useQuery } from '@tanstack/react-query';
import { Package } from 'lucide-react';

import { getMonthCanceledOrdersAmount } from '@/api';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MetricSkeleton } from './metric-skeleton';

export const MonthCanceledOrdersAmount = () => {
  const { data: monthCanceledOrdersAmount } = useQuery({
    queryKey: ['metrics', 'month-canceled-orders-amount'],
    queryFn: getMonthCanceledOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-base font-semibold'>
          Cancelamentos (mês)
        </CardTitle>
        <Package className='text-muted-foreground size-4' />
      </CardHeader>

      <CardContent className='space-y-1'>
        {monthCanceledOrdersAmount ? (
          <>
            <span className='text-2x font-bold tracking-tight'>
              {monthCanceledOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className='text-muted-foreground text-xs'>
              {monthCanceledOrdersAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className='text-emerald-500'>
                    +{monthCanceledOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  <span>em relação ao mês passado</span>
                </>
              ) : (
                <>
                  <span className='text-red-500'>
                    {monthCanceledOrdersAmount.diffFromLastMonth}%
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
