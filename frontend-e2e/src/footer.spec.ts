import { test, expect } from '@playwright/test'

test('has footer', async ({ page }) => {
  await page.goto('/')

  const footer = page.locator('footer')
  await expect(footer).toBeVisible()
  await expect(footer).toHaveText(/All rights reserved/)
})
