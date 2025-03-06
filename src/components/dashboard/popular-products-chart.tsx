import { TrendingUp } from 'lucide-react';
import { Pie, PieChart, Sector } from 'recharts';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';

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
  { product: 'Mussarela', amount: 65, fill: '#4F46E5' },
  { product: 'Calabresa', amount: 42, fill: '#F59E0B' },
  { product: 'Frango', amount: 28, fill: '#EF4444' },
  { product: 'Queijo', amount: 16, fill: '#10B981' },
  { product: 'Bacon', amount: 34, fill: '#3B82F6' },
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Chrome',
    color: '#4F46E5',
  },
  safari: {
    label: 'Safari',
    color: '#F59E0B',
  },
  firefox: {
    label: 'Firefox',
    color: '#EF4444',
  },
  edge: {
    label: 'Edge',
    color: '#10B981',
  },
  other: {
    label: 'Other',
    color: '#3B82F6',
  },
} satisfies ChartConfig;

export const PopularProductsChart = () => {
  return (
    <Card className='col-span-3 flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Produtos mais vendidos</CardTitle>
        <CardDescription>Produtos mais vendidos na semana</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[250px]'
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey='amount'
              nameKey='product'
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex items-center gap-2 leading-none font-medium'>
          Tendência de alta de 5,2% este mês <TrendingUp className='h-4 w-4' />
        </div>
        <div className='text-muted-foreground leading-none'>
          Exibindo os dados de 10/12/2022 - 16/12/2022
        </div>
      </CardFooter>
    </Card>
  );
};
