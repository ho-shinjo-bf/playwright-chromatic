import { test, expect, takeSnapshot } from "@chromatic-com/playwright";

test("top-page", async ({ page }, testInfo) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveTitle("Create Next App");

  await takeSnapshot(page, "initialized", testInfo);

  await page.getByTestId("docs").hover();

  await takeSnapshot(page, "after hover Docs link", testInfo);
});
