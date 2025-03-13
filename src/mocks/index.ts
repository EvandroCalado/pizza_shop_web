import { env } from '@/env';

export const enableMSW = async () => {
  if (env.MODE !== 'test') return;

  const { worker } = await import('./browser');

  return worker.start();
};
