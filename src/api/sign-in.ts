import { api } from '@/lib/axios';

type SignInProps = {
  email: string;
};

export const signin = async ({ email }: SignInProps) => {
  await api.post('/authenticate', { email });
};
