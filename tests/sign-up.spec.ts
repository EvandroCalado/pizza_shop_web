import { expect, test } from '@playwright/test';

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page
    .getByRole('textbox', { name: 'Nome do restaurante' })
    .fill('Pizza Shop');
  await page
    .getByRole('textbox', { name: 'Nome', exact: true })
    .fill('John Doe');
  await page
    .getByRole('textbox', { name: 'Email' })
    .fill('johndoe@example.com');
  await page.getByRole('textbox', { name: 'Telefone' }).fill('11999999999');

  await page.getByRole('button', { name: 'Cadastrar' }).click();

  const toast = page.getByText('Restaurante criado com sucesso.');

  await expect(toast).toBeVisible();
});

test('sign up with invalid data', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page
    .getByRole('textbox', { name: 'Nome do restaurante' })
    .fill('Invalid Name');
  await page
    .getByRole('textbox', { name: 'Nome', exact: true })
    .fill('Invalid Name');
  await page
    .getByRole('textbox', { name: 'Email' })
    .fill('invalid@example.com');
  await page.getByRole('textbox', { name: 'Telefone' }).fill('11999999999');

  await page.getByRole('button', { name: 'Cadastrar' }).click();

  const toast = page.getByText('Algo deu errado, tente novamente.');

  await expect(toast).toBeVisible();
});

test('navigate to sign in page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' });

  await page.getByRole('link', { name: 'Já tenho uma conta' }).click();

  expect(page.url()).toContain('/sign-in');
});
