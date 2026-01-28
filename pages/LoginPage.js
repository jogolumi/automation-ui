class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#LoginForm_username';
    this.passwordInput = '#LoginForm_password';
    this.loginButton = '.btn.btn-sm.btn-primary'; // CORREGIDO
  }

  // Navega a la página de login usando baseURL + ruta relativa
  async navigate() {
    await this.page.goto('/index.php?r=site/login');
  }

  // Realiza login con usuario y contraseña
  async login(user, pass) {
    await this.page.fill(this.usernameInput, user);
    await this.page.fill(this.passwordInput, pass);
    await this.page.click(this.loginButton);
  }
}

module.exports = { LoginPage };
