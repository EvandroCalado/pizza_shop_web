import { http, HttpResponse } from 'msw';

import { GetProfileResponse } from '@/api';

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: '1',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '(11) 99999-9999',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    });
  },
);
