import { api } from '@/lib/axios';

type DeliveringOrderParams = {
  orderId: string;
};

export const deliveringOrder = async ({ orderId }: DeliveringOrderParams) => {
  await api.patch(`orders/${orderId}/dispatch`);
};
