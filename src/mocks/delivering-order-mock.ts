import { http } from 'msw';

import { DeliveringOrderParams } from '@/api';

export const deliveringOrderMock = http.patch<DeliveringOrderParams>(
  'orders/:orderId/dispatch',
  async ({ params }) => {
    if (params.orderId === 'error-order-1') {
      return new Response(null, { status: 400 });
    }

    return new Response(null, { status: 204 });
  },
);
