import { http, HttpResponse } from 'msw';

import { GetMonthOrdersAmountResponse } from '@/api';

export const getMonthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>('metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 180,
    diffFromLastMonth: 30,
  });
});
