import { useQuery } from '@tanstack/react-query';
import { Loader2, TrendingUp } from 'lucide-react';
import { Pie, PieChart, Sector } from 'recharts';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';

import { getPopularProducts } from '@/api';
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

const colors = [
  { color: '#4F46E5' },
  { color: '#F59E0B' },
  { color: '#EF4444' },
  { color: '#10B981' },
  { color: '#8720cc' },
];

export const PopularProductsChart = () => {
  const { data: popularProducts } = useQuery({
    queryKey: ['metrics', 'popular-products'],
    queryFn: getPopularProducts,
  });

  const cartConfig = popularProducts
    ? (Object.fromEntries(
        popularProducts.map((product, index) => [
          product.product,
          {
            label: product.product,
            color: colors[index].color,
          },
        ]),
      ) satisfies ChartConfig)
    : {};

  const data = popularProducts?.map((product, index) => ({
    ...product,
    fill: colors[index].color,
  }));

  return (
    <Card className='col-span-3 flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Produtos mais vendidos</CardTitle>
        <CardDescription>Produtos mais vendidos na semana</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        {popularProducts ? (
          <ChartContainer
            config={cartConfig}
            className='mx-auto aspect-square max-h-[250px]'
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={data}
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
        ) : (
          <div className='flex h-[250px] w-full items-center justify-center'>
            <Loader2 className='text-muted-foreground size-8 animate-spin' />
          </div>
        )}
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex items-center gap-2 leading-none font-medium'>
          Tendência de alta de 5,2% este mês <TrendingUp className='h-4 w-4' />
        </div>
      </CardFooter>
    </Card>
  );
};
