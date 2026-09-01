import { test, expect } from "@playwright/test";
import { LoginPage } from "../../lib/pages/login.page";

test("login without page object", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/auth/login");
  await page.locator('[data-test="nav-sign-in"]').click();
  await page
    .locator('[data-test="email"]')
    .fill("customer@practicesoftwaretesting.com");
  await page.locator('[data-test="password"]').fill("welcome01");
  await page.locator('[data-test="login-submit"]').click();
  await expect(page.locator('[data-test="nav-menu"]')).toContainText(
    "Jane Doe",
  );
  await expect(page.locator('[data-test="page-title"]')).toContainText(
    "My account",
  );
});

test("login with newly registered user", async ({ page }) => {
  const email = "dalitest3@gmail.com";
  const password = "*Home@123*";
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(email, password); //await loginPage.emailInput.fill(email);
  //await loginPage.passwordInput.fill(password);
  //await loginPage.loginButton.click();

  await expect(page.getByTestId("nav-menu")).toContainText("marve2 dali2");
});
