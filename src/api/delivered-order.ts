import { api } from '@/lib/axios';

type DeliveredOrderParams = {
  orderId: string;
};

export const deliveredOrder = async ({ orderId }: DeliveredOrderParams) => {
  await api.patch(`orders/${orderId}/deliver`);
};
