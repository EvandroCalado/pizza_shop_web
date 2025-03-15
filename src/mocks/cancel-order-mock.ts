import { http } from 'msw';

import { CancelOrderParams } from '@/api';

export const cancelOrderMock = http.patch<CancelOrderParams>(
  'orders/:orderId/cancel',
  async ({ params }) => {
    if (params.orderId === 'error-order-1') {
      return new Response(null, { status: 400 });
    }

    return new Response(null, { status: 204 });
  },
);
