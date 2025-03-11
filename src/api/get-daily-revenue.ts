import { api } from '@/lib/axios';

type GetDailyRevenueResponse = {
  date: string;
  receipt: number;
}[];

type GetDailyRevenueQuery = {
  from?: Date;
  to?: Date;
};

export const getDailyRevenue = async ({ from, to }: GetDailyRevenueQuery) => {
  const response = await api.get<GetDailyRevenueResponse>(
    'metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  );

  return response.data;
};
