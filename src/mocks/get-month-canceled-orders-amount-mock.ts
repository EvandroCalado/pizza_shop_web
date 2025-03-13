import { http, HttpResponse } from 'msw';

import { GetMonthCanceledOrderAmountResponse } from '@/api';

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrderAmountResponse
>('metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 32,
    diffFromLastMonth: 12,
  });
});
