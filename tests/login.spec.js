const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('@smoke Login exitoso', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Paso 1: Navegar a login
  await loginPage.navigate();

  // Paso 2: Ingresar credenciales de prueba
  await loginPage.login('usuario_test', 'password_test');

  // Paso 3: Verificar redirección al dashboard
  await expect(page).toHaveURL(/dashboard/);
});
