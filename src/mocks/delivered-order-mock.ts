import { http } from 'msw';

import { DeliveredOrderParams } from '@/api';

export const deliveredOrderMock = http.patch<DeliveredOrderParams>(
  'orders/:orderId/deliver',
  async ({ params }) => {
    if (params.orderId === 'error-order-1') {
      return new Response(null, { status: 400 });
    }

    return new Response(null, { status: 204 });
  },
);
