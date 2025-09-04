# ComboBox value/onSelectionChange bug reproduction

This repository demonstrates an issue with the ComboBox component (@ui5/webcomponents-react): when the "value" prop changes (e.g. after data is loaded), the `onSelectionChange` handler is called automatically, even though the user did not select anything. This is undesired behavior.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or later)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/my-react-vite-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd my-react-vite-app
   ```

3. Install the dependencies and Playwright:

   ```bash
   npm install
   npx playwright install
   ```

4. Start the development server

```bash
npm run dev
```

The app will be available at http://localhost:3000

5. Run the Playwright test that demonstrates the issue

```bash
npm run test:e2e
```

The test opens the `/page1` page and you can observe that after data is loaded, onSelectionChange is triggered automatically.

## How to reproduce the issue manually

1. Start the app at `/page1` (for example, open http://localhost:3000/page1).
2. After the page loads and simulated data is fetched (1 second delay), the ComboBox's `onSelectionChange` handler is called automatically (see the code: it navigates to `/onSelectCalledItself`).
3. This is incorrect – the handler should only be called in response to a real user action.


### License

This project is licensed under the MIT License. See the LICENSE file for more details.