import { expect, test } from '@playwright/test';

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Pizza Shop' }).click();

  await page.getByText('Perfil').click();

  await page.getByRole('textbox', { name: 'Nome' }).fill('Pizza Shop test');

  await page
    .getByRole('textbox', { name: 'Descrição' })
    .fill('Another description');

  await page.getByRole('button', { name: 'Salvar' }).click();

  await page.waitForLoadState('networkidle');

  await expect(page.getByText('Perfil atualizado com sucesso.')).toBeVisible();

  await page.getByRole('button', { name: 'Cancelar' }).click();

  await expect(
    page.getByRole('button', { name: 'Pizza Shop test' }),
  ).toBeVisible();
});

test('update profile with invalid data', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.getByRole('button', { name: 'Pizza Shop' }).click();

  await page.getByText('Perfil').click();

  await page.getByRole('textbox', { name: 'Nome' }).fill('Invalid name');

  await page
    .getByRole('textbox', { name: 'Descrição' })
    .fill('Another description');

  await page.getByRole('button', { name: 'Salvar' }).click();

  await page.waitForLoadState('networkidle');

  await expect(
    page.getByText('Algo deu errado, tente novamente.'),
  ).toBeVisible();
});
