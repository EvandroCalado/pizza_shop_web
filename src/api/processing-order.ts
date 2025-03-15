import { api } from '@/lib/axios';

export type ProcessingOrderParams = {
  orderId: string;
};

export const processingOrder = async ({ orderId }: ProcessingOrderParams) => {
  await api.patch(`orders/${orderId}/approve`);
};
