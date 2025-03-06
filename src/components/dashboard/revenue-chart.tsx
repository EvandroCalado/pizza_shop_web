import { TrendingUp } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

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

const chartData = [
  { date: '10/12', revenue: 1200 },
  { date: '11/12', revenue: 800 },
  { date: '12/12', revenue: 900 },
  { date: '13/12', revenue: 400 },
  { date: '14/12', revenue: 2300 },
  { date: '15/12', revenue: 600 },
  { date: '16/12', revenue: 750 },
];

const chartConfig = {
  desktop: {
    label: 'Receita diária',
    color: '#993cc4',
  },
} satisfies ChartConfig;

export const RevenueChart = () => {
  return (
    <Card className='col-span-6'>
      <CardHeader>
        <CardTitle>Receita no período</CardTitle>
        <CardDescription>Receita diária no período</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className='h-40 w-full'>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
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
              dataKey='revenue'
              type='linear'
              stroke='#993cc4'
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 leading-none font-medium'>
          Tendência de alta de 5,2% este mês <TrendingUp className='h-4 w-4' />
        </div>
        <div className='text-muted-foreground leading-none'>
          Exibindo os dados de 10/12/2022 - 16/12/2022
        </div>
      </CardFooter>
    </Card>
  );
};
