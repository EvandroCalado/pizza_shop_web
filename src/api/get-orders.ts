import { api } from '@/lib/axios';

export type Status =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered';

export type Order = {
  orderId: string;
  createdAt: string;
  status: Status;
  customerName: string;
  total: number;
};

export type Meta = {
  pageIndex: number;
  perPage: number;
  totalCount: number;
};

type GetOrdersResponse = {
  orders: Order[];
  meta: Meta;
};

export const getOrders = async () => {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex: 0,
    },
  });

  return response.data;
};
