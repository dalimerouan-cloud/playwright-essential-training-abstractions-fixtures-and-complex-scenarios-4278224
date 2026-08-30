import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.locator("body").click();
  await page.goto(
    "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dpractissoftwartestsing%26oq%3Dpractissoftwartestsing%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCTE4MjcwajBqMqgCALACAA%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DFo-Uav7oCZaJptQPz4q4oA0&q=EgQYyNHLGJae0tQGIjAxaLE146YnJHRh76OJEQFshLepAoyUakFw6ImCwpeJ5UGkRsf9XhRN_bg661D1ohoyAVJaAUM",
  );
});
