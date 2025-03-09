import { api } from '@/lib/axios';

export type Status =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'
  | 'all';

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
  orderId?: string | null;
  customerName?: string | null;
  status?: Status | null;
};

export const getOrders = async ({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersQuery) => {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      orderId,
      customerName,
      status: status === 'all' ? null : status,
    },
  });

  return response.data;
};
