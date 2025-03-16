import { expect, test } from '@playwright/test';

test('display orders list', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole('cell', { name: 'Customer 10', exact: true }),
  ).toBeVisible();
});

test('pagination orders list', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Próxima página' }).click();

  await expect(
    page.getByRole('cell', { name: 'Customer 11', exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole('cell', { name: 'Customer 20', exact: true }),
  ).toBeVisible();
  expect(page.url().includes('/orders?page=2')).toBeTruthy();
});

test('search by ID orders list', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await page.getByRole('textbox', { name: 'ID do pedido' }).fill('order-1');

  await page.getByRole('button', { name: 'Filtrar' }).click();

  await expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole('cell', { name: 'Customer 2', exact: true }),
  ).not.toBeVisible();
});

test('search by client name orders list', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await page
    .getByRole('textbox', { name: 'Nome do client' })
    .fill('Customer 1');

  await page.getByRole('button', { name: 'Filtrar' }).click();

  await expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole('cell', { name: 'Customer 2', exact: true }),
  ).not.toBeVisible();
});

test('search by status orders list and remove filters', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await page.getByRole('combobox').click();

  await page.getByRole('option', { name: 'Entregue' }).click();

  await page.getByRole('button', { name: 'Filtrar' }).click();

  await expect(
    page.getByRole('cell', { name: 'Customer 5', exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole('cell', { name: 'Customer 4', exact: true }),
  ).not.toBeVisible();

  await page.getByRole('button', { name: 'Remover' }).click();

  expect(page.url().includes('/orders')).toBeTruthy();
  expect(page.url().includes('?status=delivered&page=1')).toBeFalsy();
});

test('display order details', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' });

  await page
    .getByRole('row', { name: 'Detalhes do pedido order-1 h' })
    .getByRole('button')
    .first()
    .click();

  await expect(
    page.getByRole('heading', { name: 'Pedido: order-1' }),
  ).toBeVisible();
  await expect(page.getByRole('cell', { name: 'John Doe' })).toBeVisible();
  await expect(
    page.getByRole('cell', { name: 'johndoe@example.com' }),
  ).toBeVisible();
  await expect(
    page.getByRole('cell', { name: 'Pizza Margherita' }),
  ).toBeVisible();
  await expect(
    page.getByRole('cell', { name: 'Pizza Carbonara' }),
  ).toBeVisible();
});
