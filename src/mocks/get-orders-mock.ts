import { http, HttpResponse } from 'msw';

import { GetOrdersResponse, Order, Status } from '@/api';

const allStatus: Status[] = [
  'pending',
  'canceled',
  'processing',
  'delivering',
  'delivered',
];

const orders: Order[] = Array.from({ length: 50 }, (_, index) => ({
  orderId: `order-${index + 1}`,
  customerName: `Customer ${index + 1}`,
  status: allStatus[index % allStatus.length],
  createdAt: new Date().toISOString(),
  total: 2400,
  orderItems: [],
}));

export const getOrdersMock = http.get<never, never, GetOrdersResponse>(
  'orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url);

    const pageIndex = Number(searchParams.get('pageIndex')) || 0;
    const orderId = searchParams.get('orderId');
    const customerName = searchParams.get('customerName');
    const status = searchParams.get('status');

    const filteredOrders = orders.filter((order) => {
      if (orderId && order.orderId !== orderId) return false;
      if (customerName && order.customerName !== customerName) return false;
      if (status && order.status !== status) return false;

      return true;
    });

    return HttpResponse.json({
      orders: filteredOrders.slice(pageIndex * 10, (pageIndex + 1) * 10),
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filteredOrders.length,
      },
    });
  },
);
