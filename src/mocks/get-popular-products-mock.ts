import { http, HttpResponse } from 'msw';

import { GetPopularProductsResponse } from '@/api';

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza', amount: 10 },
    { product: 'Hamburguer', amount: 5 },
    { product: 'Cerveja', amount: 3 },
    { product: 'Coca-Cola', amount: 2 },
    { product: 'Fanta', amount: 1 },
  ]);
});
