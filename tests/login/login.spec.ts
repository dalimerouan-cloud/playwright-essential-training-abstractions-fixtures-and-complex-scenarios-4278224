import { LoginPage } from "@pages/login.page";
import { registerUser } from "@datafactory/register";
import { test, expect } from "@fixtures/pages.fixtures";

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
  const email = `dalitest_${Date.now()}@gmail.com`;
  const password = "*Home@123*";
  const loginPage = new LoginPage(page);

  await registerUser(email, password);
  await loginPage.goto();

  await loginPage.login(email, password); //await loginPage.emailInput.fill(email);
  //await loginPage.passwordInput.fill(password);
  //await loginPage.loginButton.click();

  await expect(page.getByTestId("nav-menu")).toContainText("marven2 dali2");
});
test("login with fixture", async ({ page, loginPage }) => {
  const email = `dalitest_${Date.now()}@gmail.com`;
  const password = "*Home@123*";

  await registerUser(email, password);
  await loginPage.goto();

  await loginPage.login(email, password); //await loginPage.emailInput.fill(email);
  //await loginPage.passwordInput.fill(password);
  //await loginPage.loginButton.click();

  await expect(page.getByTestId("nav-menu")).toContainText("marven2 dali2");
});
