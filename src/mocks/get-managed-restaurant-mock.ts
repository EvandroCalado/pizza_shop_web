import { http, HttpResponse } from 'msw';

import { GetManagedRestaurantResponse } from '@/api';

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: '1',
    name: 'Pizza Shop',
    description: 'Lorem ipsum dolor sit, consectetur.',
    managerId: '5',
    createdAt: new Date(),
    updatedAt: null,
  });
});
