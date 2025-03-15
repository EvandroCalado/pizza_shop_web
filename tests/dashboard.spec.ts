import { expect, test } from '@playwright/test';

test('display month revenue amount successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.getByText('R$ 200,00')).toBeVisible();
  await expect(
    page.getByText('+12% em relação ao mês passado').first(),
  ).toBeVisible();
});

test('display month orders amount successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.getByText('180')).toBeVisible();
  await expect(
    page.getByText('+30% em relação ao mês passado').first(),
  ).toBeVisible();
});

test('display day orders amount successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.getByText('20', { exact: true })).toBeVisible();
  await expect(page.getByText('+10% em relação ao mês passado')).toBeVisible();
});

test('display month cancelled orders amount successfully', async ({
  page,
}) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.getByText('32', { exact: true })).toBeVisible();
  await expect(
    page
      .locator('div')
      .filter({ hasText: /^32\+12% em relação ao mês passado$/ })
      .getByRole('paragraph'),
  ).toBeVisible();
});
