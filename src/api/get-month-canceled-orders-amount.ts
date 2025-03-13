import { api } from '@/lib/axios';

export type GetMonthCanceledOrderAmountResponse = {
  amount: number;
  diffFromLastMonth: number;
};

export const getMonthCanceledOrdersAmount = async () => {
  const response = await api.get<GetMonthCanceledOrderAmountResponse>(
    'metrics/month-canceled-orders-amount',
  );

  return response.data;
};
