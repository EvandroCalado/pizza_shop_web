import { api } from '@/lib/axios';

export type SignUpBody = {
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
}: SignUpBody) => {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone,
  });
};
