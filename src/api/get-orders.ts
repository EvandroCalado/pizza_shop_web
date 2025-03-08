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

export type GetOrdersQuery = {
  pageIndex?: number | null;
};

export const getOrders = async ({ pageIndex }: GetOrdersQuery) => {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  });

  return response.data;
};
