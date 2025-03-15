import { api } from '@/lib/axios';

export type DeliveredOrderParams = {
  orderId: string;
};

export const deliveredOrder = async ({ orderId }: DeliveredOrderParams) => {
  await api.patch(`orders/${orderId}/deliver`);
};
