import { api } from '@/lib/axios';

type ProcessingOrderParams = {
  orderId: string;
};

export const processingOrder = async ({ orderId }: ProcessingOrderParams) => {
  await api.patch(`orders/${orderId}/approve`);
};
