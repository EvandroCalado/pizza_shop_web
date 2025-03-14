import { http, HttpResponse } from 'msw';

import { GetMonthRevenueResponse } from '@/api';

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>('metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 20000,
    diffFromLastMonth: 12,
  });
});
