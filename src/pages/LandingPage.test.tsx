import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

/* Run the unit tests with the command 'npm run test' */

describe('LandingPage', () => {
  describe('vitest example', () => {
    it('true to be true', () => {
      expect(true).toBe(true);
    });

    it('false to be false', () => {
      expect(false).toBe(false);
    });
  });

  describe('vitest with react testing library', () => {
    it('renders component', () => {
      // render the component using the 'render' function from @testing-library/react
      // As help, use screen.debug() to see the rendered elements in the console
      // verify that the page title is in the document using the 'expect' function from vitest
    });

    it('enters user name and displays it on blur', async () => {
      // render the component using the 'render' function from @testing-library/react
      // find the input element e.g. by role 'textbox'
      // use 'userEvent' to type in an input in the input field
      // verify that the welcome message contains the new name that was typed in using the 'expect' function from vitest
    });
  });
});
