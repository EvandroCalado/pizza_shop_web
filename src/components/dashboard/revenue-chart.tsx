import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { Loader2, TrendingUp } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

import { getDailyRevenue } from '@/api/get-daily-revenue';
import { DatePicker } from '../shared/date-picker';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';

const chartConfig = {
  desktop: {
    label: 'Receita diária',
    color: '#993cc4',
  },
} satisfies ChartConfig;

export const RevenueChart = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  });

  const { data: dailyRevenue } = useQuery({
    queryKey: ['metrics', 'daily-revenue', date],
    queryFn: () =>
      getDailyRevenue({
        from: date?.from,
        to: date?.to,
      }),
  });

  const chartData = dailyRevenue?.map((item) => ({
    date: item.date,
    receipt: item.receipt / 100,
  }));

  return (
    <Card className='col-span-6'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <div>
          <CardTitle>Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
        <DatePicker date={date} onDateChange={setDate} />
      </CardHeader>
      <CardContent>
        {dailyRevenue ? (
          <ChartContainer
            config={chartConfig}
            className='flex h-56 w-full flex-col justify-between'
          >
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <XAxis
                dataKey='date'
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey='receipt'
                type='linear'
                stroke='#993cc4'
                strokeWidth={2}
              />
            </LineChart>
          </ChartContainer>
        ) : (
          <div className='flex h-[224px] w-full items-center justify-center'>
            <Loader2 className='text-muted-foreground size-8 animate-spin' />
          </div>
        )}
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 leading-none font-medium'>
          Tendência de alta de 5,2% este mês <TrendingUp className='h-4 w-4' />
        </div>
        <div className='text-muted-foreground leading-none'>
          Exibindo os dados de {date?.from?.toLocaleDateString('pt-BR')} -{' '}
          {date?.to?.toLocaleDateString('pt-BR')}
        </div>
      </CardFooter>
    </Card>
  );
};
