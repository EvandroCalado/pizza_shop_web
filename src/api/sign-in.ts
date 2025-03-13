import { api } from '@/lib/axios';

export type SignInBody = {
  email: string;
};

export const signin = async ({ email }: SignInBody) => {
  await api.post('/authenticate', { email });
};
