import { LoginPage } from "@pages/login.page";
import { test as baseTest } from "@playwright/test";

type MyPage = {
  loginPage: LoginPage;
};
export const test = baseTest.extend<MyPage>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});
