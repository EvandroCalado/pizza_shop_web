import { api } from '@/lib/axios';

type SignUpProps = {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
};

export const signup = async ({
  restaurantName,
  managerName,
  email,
  phone,
}: SignUpProps) => {
  await api.post('/restaurants', { restaurantName, managerName, email, phone });
};
