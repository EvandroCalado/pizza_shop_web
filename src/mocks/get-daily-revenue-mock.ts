import { http, HttpResponse } from 'msw';

import { GetDailyRevenueResponse } from '@/api/get-daily-revenue';

export const getDailyRevenueMock = http.get<
  never,
  never,
  GetDailyRevenueResponse
>('metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '2025-01-01', receipt: 1000 },
    { date: '2025-01-02', receipt: 2000 },
    { date: '2025-01-03', receipt: 3000 },
    { date: '2025-01-04', receipt: 4000 },
    { date: '2025-01-05', receipt: 5000 },
    { date: '2025-01-06', receipt: 6000 },
  ]);
});
