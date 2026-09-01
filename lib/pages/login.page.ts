import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByTestId("email");
    this.passwordInput = page.getByTestId("password");
    this.loginButton = page.getByTestId("login-submit");
  }

  async login(email: string, password: string) {
    await this.emailInput.waitFor({ state: "visible" });
    await this.emailInput.fill(email);

    await this.passwordInput.waitFor({ state: "visible" });
    await this.passwordInput.fill(password);

    await this.loginButton.waitFor({ state: "visible" });
    await this.loginButton.click();
  }
  async goto() {
    await this.page.goto("https://practicesoftwaretesting.com/", {
      waitUntil: "domcontentloaded",
    });
  }
}
