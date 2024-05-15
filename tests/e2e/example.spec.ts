import { expect, test } from '@playwright/test';
import { usersData } from '../../src/utils/users.ts';

/* Run the Playwight tests with the command 'npm run e2e'
 * To run it in UI mode run 'npm run e2e:ui'
 */

test.beforeEach(async ({ page }) => {
  /* Mock the external API call */
  await page.route(
    'https://jsonplaceholder.typicode.com/users',
    async (route) => {
      await route.fulfill({ json: usersData });
    }
  );
});

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page).toHaveTitle(/Systecon/);
});

test('name is visible on landing page when input is filled out', async () => {
  // navigate to the landing page
  // find the input element and fill in a name
  // verify that the correct welcome message is visible
});

test('users and user details are fetched and displayed', async () => {
  // navigate to the user list page
  // verify that the page title is visible
  // verify that the amount of users displayed is correct (according to the mocked usersData)
  // click on the first element of the list
  // verify that the name of the first user is visible in the page title
});

/* EXAMPLE TEST */
// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/')

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click()

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible()
// })
