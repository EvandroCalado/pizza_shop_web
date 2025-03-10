import { api } from '@/lib/axios';

type GetMonthCanceledOrderAmountResponse = {
  amount: number;
  diffFromLastMonth: number;
};

export const getMonthCanceledOrdersAmount = async () => {
  const response = await api.get<GetMonthCanceledOrderAmountResponse>(
    'metrics/month-canceled-orders-amount',
  );

  return response.data;
};
