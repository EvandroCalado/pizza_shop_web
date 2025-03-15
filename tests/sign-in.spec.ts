import { expect, test } from '@playwright/test';

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' });

  await page
    .getByRole('textbox', { name: 'Email' })
    .fill('johndoe@example.com');
  await page.getByRole('button', { name: 'Acessar painel' }).click();

  const toast = page.getByText('Enviamos um link para o seu email.');

  await expect(toast).toBeVisible();
});

test('sign in with invalid email', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' });

  await page
    .getByRole('textbox', { name: 'Email' })
    .fill('invalid@example.com');
  await page.getByRole('button', { name: 'Acessar painel' }).click();

  const toast = page.getByText('Algo deu errado, tente novamente.');

  await expect(toast).toBeVisible();
});

test('navigate to sign up page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' });

  await page.getByRole('link', { name: 'Criar uma conta' }).click();

  expect(page.url()).toContain('/sign-up');
});
