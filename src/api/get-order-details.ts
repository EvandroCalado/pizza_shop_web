import { api } from '@/lib/axios';
import { Status } from './get-orders';

export type Customer = {
  name: string;
  email: string;
  phone: string | null;
};

export type OrderItem = {
  id: string;
  priceInCents: number;
  quantity: number;
  product: {
    name: string;
  };
};

export type GetOrdersDetailsResponse = {
  id: string;
  createdAt: string;
  status: Status;
  totalInCents: number;
  customer: Customer;
  orderItems: OrderItem[];
};

export const getOrdersDetails = async (orderId: string) => {
  const response = await api.get<GetOrdersDetailsResponse>(
    `/orders/${orderId}`,
  );

  return response.data;
};
