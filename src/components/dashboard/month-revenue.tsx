import { useQuery } from '@tanstack/react-query';
import { DollarSign } from 'lucide-react';

import { getMonthRevenue } from '@/api';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export const MonthRevenue = () => {
  const { data: monthRevenue } = useQuery({
    queryKey: ['metrics', 'month-revenue'],
    queryFn: getMonthRevenue,
  });

  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-base font-semibold'>
          Receita total (mês)
        </CardTitle>
        <DollarSign className='text-muted-foreground size-4' />
      </CardHeader>

      <CardContent className='space-y-1'>
        {monthRevenue && (
          <>
            <span className='text-2x font-bold tracking-tight'>
              {(monthRevenue.receipt / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <p className='text-muted-foreground text-xs'>
              {monthRevenue.diffFromLastMonth < 0 ? (
                <>
                  <span className='text-emerald-500'>
                    {monthRevenue.diffFromLastMonth}%
                  </span>{' '}
                  <span>em relação ao mês passado</span>
                </>
              ) : (
                <>
                  <span className='text-red-500'>
                    +{monthRevenue.diffFromLastMonth}%
                  </span>{' '}
                  <span>em relação ao mês passado</span>
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
};
