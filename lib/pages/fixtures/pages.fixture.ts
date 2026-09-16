import { AccountPage } from "@pages/account/account.page";
import { LoginPage } from "@pages/login.page";
import { test as baseTest } from "@playwright/test";

type MyPage = {
  loginPage: LoginPage;
  accountPage: AccountPage;
};
export const test = baseTest.extend<MyPage>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  },
});

export { expect } from "@playwright/test";
