import { expect, test } from "@playwright/test";
import { log } from "console";


test("", async ({page}) => {
   
   await page.goto("https://www.shutterstock.com/")
   await page.getByRole('link', { name: 'Log in' }).click();
  await page.frameLocator('iframe[title="Login"]').locator('[data-test-id="email-input"]').fill('bryansito1@gmail.com');
  await page.frameLocator('iframe[title="Login"]').locator('[data-test-id="password-input"]').click();
  await page.frameLocator('iframe[title="Login"]').locator('[data-test-id="password-input"]').fill('bryan123');
  await page.frameLocator('iframe[title="Login"]').locator('[data-test-id="login-form-submit-button"]').click();
  await page.frameLocator('iframe[title="Login"]').locator('[data-test-id="password-input"]').press('Enter');
  await page.getByLabel('Credits Available').click();
  await page.getByText('$49', { exact: true });
  await page.goto('https://www.shutterstock.com/search/dog');
  const imagesCount = await page.$$('div[role="img"]');
  await imagesCount[5].click()
    await page.waitForTimeout(3000)




   

})