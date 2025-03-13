import { api } from '@/lib/axios';

export type GetMonthRevenueResponse = {
  receipt: number;
  diffFromLastMonth: number;
};

export const getMonthRevenue = async () => {
  const response = await api.get<GetMonthRevenueResponse>(
    'metrics/month-receipt',
  );

  return response.data;
};
