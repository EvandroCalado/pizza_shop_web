import { Helmet } from 'react-helmet-async';

import {
  DayOrdersAmount,
  MonthCanceledOrdersAmount,
  MonthOrdersAmount,
  MonthRevenue,
  RevenueChart,
} from '@/components/dashboard';

export const Dashboard = () => {
  return (
    <>
      <Helmet title='Dashboard' />

      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>

        <div className='grid grid-cols-4 gap-4'>
          <MonthRevenue />
          <MonthOrdersAmount />
          <DayOrdersAmount />
          <MonthCanceledOrdersAmount />
        </div>

        <div className='grid grid-cols-9 gap-4'>
          <RevenueChart />
        </div>
      </div>
    </>
  );
};
