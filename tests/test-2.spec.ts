import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await expect(page.locator('[data-test="nav-sign-in"]')).toMatchAriaSnapshot(
    `- link "Se connecter"`,
  );
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="register-link"]').click();
  await page.locator('[data-test="first-name"]').click();
  await page.locator('[data-test="first-name"]').fill("marven2");
  await page.locator('[data-test="last-name"]').click();
  await page.locator('[data-test="last-name"]').fill("dali2");
  await page.locator('[data-test="dob"]').click();
  await page.locator('[data-test="dob"]').fill("2000-05-15");
  await page.locator('[data-test="country"]').selectOption("US");
  await page.locator('[data-test="postal_code"]').click();
  await page.locator('[data-test="postal_code"]').fill("H4G 1S1");
  await page.locator('[data-test="street"]').click();
  await page.locator('[data-test="street"]').fill("verdun");
  await page.locator('[data-test="house_number"]').click();
  await page.locator('[data-test="house_number"]').fill("42");
  await page.locator('[data-test="city"]').click();
  await page.locator('[data-test="city"]').fill("montreal");
  await page.locator('[data-test="state"]').click();
  await page.locator('[data-test="state"]').fill("Qc");
  await page.locator('[data-test="phone"]').click();
  await page.locator('[data-test="phone"]').fill("5555555555");
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill("dalitest3@gmail.com");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("*Home@123*");
  await page.locator('[data-test="register-submit"]').click();
  await expect(page.locator('[data-test="register-link"]')).toBeVisible();
});
