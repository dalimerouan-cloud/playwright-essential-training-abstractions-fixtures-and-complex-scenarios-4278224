import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/auth/login");
  await page.getByTestId("register-link").click();
  await page.getByTestId("register-link").click();
});
