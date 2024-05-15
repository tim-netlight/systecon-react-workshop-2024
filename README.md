# Netlight React Workshop

Welcome to this React workshop together with us at Netlight. We have prepared this repository with some skeleton code to get you started quickly with the exercises we have prepared. Below you will find information about how to get the application up and running, and the descriptions for each exercise for the day.

## Get started 

- Fork the repository
- Run `npm install` in the repository to download all dependencies
- Run the command `npm run dev` to get the application up and running locally
- Verify in your browser that your application is available

## Exercise 1 - React fundamentals

### Step 1: Extend the LandingPage component

Update the `LandingPage` so that it contains:

- An input field which updates a new component state called `userName` when adding/changing the input
- A welcome text on the top of the page which displays "Welcome _`userName`_"

Keywords: Component, state, onChange

### Step 2: Extend the UserListPage component

Update the `UserListPage` so that it displays a list of users. This can be done by using the static list of users that is provided.

Keywords: Render lists

### BONUS: Create a ProfileCard component

If you have more time to spare, create a new component called `ProfileCard`. This should have three Props: name, age and city. Display the given Props in the new component, and use the component in the `LandingPage`. Add styling of your choice to make it more interesting.

Keywords: Components, props

## Exercise 2 - More advanced concepts

### Step 1: Fetch user data from an API

In the `UserListPage`, start fetching user data by using the `getUsers()` function from the `apiService` and replace the static users list with the fetched data.

Keywords: useEffect, Promise

### Step 2: Create a new route

Add a new route to the `UserDetailsPage`. This page should be reached when you click on one of the users in `UserListPage` and there see more information about that specific user. Update the `UserDetailsPage` so that it takes in user data as Props and displays it in on the user page.

Keywords: Route, Link, Outlet, Props

### Step 3: Create a Context

Start providing the user data with a new `UserContext`. This requires you to create the new Context, and provide it to the part of the application which need the data.

Keywords: Context, hooks

## Exercise 3 - Testing

To verify your application works as intended you can add tests of different kinds. For this exercise, we will focus on how to creat unit tests by using vitest and React Testing Library and how e2e tests can be added through the use of Playwright.

### Step 1: Add a unit test

Add a unit test for the LandingPage component. In the test, verify that the correct text is displayed in the welcoming message in the top of the page when you type in a user name in the input field.
Example: When you type in "John Doe" in the input field, the welcoming message should be "Welcome John Doe".

Keywords: Vitest, React Testing Library (RTL)

### Step 2: Add an e2e test

As a first step - create a test with Playwright that does the same thing as the unit test did that you just created. I.e. verify that the correct text is displayed in the welcoming message in the top of the page when you type in a user name in the input field.

Next up, add an e2e test that performs the following steps:

- Go to the Users page
- Verify that a list of users is displayed
- Click on one of the users
- Verify that details of that specific user is visible

Keywords: Playwright

## Resources

#### For Web Development & React
W3Schools: https://www.w3schools.com/​ \
CSS-Tricks: https://css-tricks.com/​ \
Mozilla: https://developer.mozilla.org/en-US/docs/Web/JavaScript​ \
React: https://react.dev/​ \
TypeScript: https://www.typescriptlang.org/docs/ 

#### For Testing
Vitest: https://vitest.dev/api/ \
React Testing Library: https://testing-library.com/docs/react-testing-library/intro/ \
Playwright: https://playwright.dev/docs/intro \
Cypress: https://docs.cypress.io/guides/overview/why-cypress

