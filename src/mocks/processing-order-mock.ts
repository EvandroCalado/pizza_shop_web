import { http } from 'msw';

import { ProcessingOrderParams } from '@/api';

export const processingOrderMock = http.patch<ProcessingOrderParams>(
  'orders/:orderId/approve',
  async ({ params }) => {
    if (params.orderId === 'error-order-1') {
      return new Response(null, { status: 400 });
    }

    return new Response(null, { status: 204 });
  },
);
