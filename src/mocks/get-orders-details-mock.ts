import { http, HttpResponse } from 'msw';

import { GetOrdersDetailsResponse } from '@/api';

export const getOrdersDetailsMock = http.get<
  { orderId: string },
  never,
  GetOrdersDetailsResponse
>('orders/:orderId', async ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1199999-9999',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 15000,
    orderItems: [
      {
        id: '1',
        product: { name: 'Pizza Margherita' },
        quantity: 1,
        priceInCents: 5000,
      },
      {
        id: '2',
        product: { name: 'Pizza Carbonara' },
        quantity: 2,
        priceInCents: 10000,
      },
    ],
  });
});
