# English to Sinhala Translation Test Automation - IT23174344

## Project Overview

This is a comprehensive Playwright test automation project for validating English to Sinhala translation functionality. The project includes automated test cases covering various grammatical structures, sentence types, and edge cases.

**Registration Number:** IT23174344

## Project Structure

```
IT23174344_Assignment01_ITPM/
├── package.json                 # Project dependencies and scripts
├── playwright.config.ts         # Playwright configuration
├── README.md                    # This file
├── httpsgithub.comMadusha360IT23174344.txt # Git repository link
├── tests/
│   └── example.spec.ts          # Test specifications
└── playwright-report/           # HTML test reports (generated after test runs)
```

## Technology Stack

- **Test Framework:** Playwright
- **Programming Language:** TypeScript
- **Node.js Version:** 16.x or higher
- **Package Manager:** npm

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v16.x or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (for version control) - [Download here](https://git-scm.com/)

## Installation Instructions

### Step 1: Clone or Download the Repository

```bash
# Clone the repository (if using Git)
git clone <repository-url>
cd IT23174344_Assignment01_ITPM

# Or extract the downloaded files
cd IT23174344_Assignment01_ITPM
```

### Step 2: Install Dependencies

```bash
npm install
```

This command will:
- Install Playwright test framework
- Install TypeScript support
- Install all required dependencies specified in `package.json`

### Step 3: Install Playwright Browsers

```bash
npx playwright install
```

This installs the browser binaries needed for testing (Chromium, Firefox, WebKit).

## Running the Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests in Specific Browser

```bash
# Run tests in Chromium only
npx playwright test --project=chromium

# Run tests in Firefox only
npx playwright test --project=firefox

# Run tests in WebKit only
npx playwright test --project=webkit
```

### Run Tests in Debug Mode

```bash
npx playwright test --debug
```

### Run Tests in Headed Mode (see browser)

```bash
npx playwright test --headed
```

### Run Specific Test File

```bash
npx playwright test tests/example.spec.ts
```

### Run Tests Matching a Pattern

```bash
npx playwright test -g "Simple Present"
```

## Viewing Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

The report will open in your default browser showing:
- Test results (passed/failed)
- Execution time
- Screenshots and videos (if configured)
- Detailed error messages

## Project Configuration

### playwright.config.ts

Key configuration settings:

- **testDir:** `./tests` - Location of test files
- **fullyParallel:** `true` - Tests run in parallel
- **retries:** 0 (2 on CI) - Number of retries on failure
- **reporter:** `html` - Generates HTML report
- **timeout:** 30000ms per test - Timeout for each test
- **projects:** Configured for Chromium, Firefox, and WebKit browsers

### package.json

Project metadata and dependencies:

```json
{
  "name": "it23174344",
  "version": "1.0.0",
  "type": "commonjs",
  "devDependencies": {
    "@playwright/test": "^1.58.0",
    "@types/node": "^25.1.0"
  }
}
```

## Test Coverage

The test suite includes comprehensive test cases for:

- **Positive Functional Tests (Pos_Fun):** Validate correct translation of various grammar structures
  - Simple Present tense
  - Simple Past tense
  - Continuous tense
  - Future tense
  - Questions
  - Negations
  - Imperatives
  - Adjectives
  - Plural forms

- **Negative Testing:** Validate error handling and edge cases

- **Performance Testing:** Measure translation response times

## Writing New Tests

To add new test cases:

1. Open `tests/example.spec.ts`
2. Add new test block:

```typescript
test('Pos_Fun_10: New Test Case', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('Test input');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('Expected output');
});
```

3. Run tests to validate

## Continuous Integration (CI)

The project is configured to work with CI/CD pipelines:

- **CI Environment Detection:** Tests detect CI environment via `process.env.CI`
- **CI Behavior:** 
  - 2 retries on failure
  - Single worker for stability
  - Forbids `test.only` to ensure full test suite runs

## Troubleshooting

### Dependencies not installing

```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules
npm install
```

### Browser binaries not found

```bash
# Reinstall Playwright browsers
npx playwright install
```

### Tests failing with timeout

- Increase timeout in `playwright.config.ts` or per test
- Check if the target application is running
- Verify internet connection

### Port already in use

- Change the target URL in test files
- Or kill the process using the port

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## Author

**Registration Number:** IT23174344

## License

ISC

## Support

For issues or questions:
1. Check the Playwright documentation
2. Review test output and error messages
3. Run in debug mode for detailed execution flow
4. Consult the troubleshooting section above

---

**Last Updated:** January 31, 2026
