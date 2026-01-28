// Configuración profesional de Playwright
// Maneja baseURL, reporte HTML y videos de falla

module.exports = {
  testDir: './tests',
  timeout: 30000, // 30s por test
  retries: 1,     // reintento en fallos
  reporter: [
    ['list'], 
    ['html', { outputFolder: 'playwright-report' }]
  ],
  use: {
    baseURL: 'http://pruebadeuso.com',  // URL base de tu entorno
    headless: false,                     // mostrar navegador mientras prueba
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',       // captura solo en fallos
    video: 'retain-on-failure',          // video solo en fallos
    actionTimeout: 10000                 // espera máxima por acción
  }
};
