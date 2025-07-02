# Cross-Browser Site Monitor using Playwright

This repository contains Playwright end-to-end tests to verify that the Maxon website is up, loads content properly, and core pages function as expected across different browsers.

## ✅ What it tests

- Homepage loads successfully and is not blank.
- Products page loads and displays expected content.
- "BUY" button on homepage navigates correctly to the buy page, which also loads properly.
- Checks for visible elements (like `<h1>` headings) to confirm content rendering.
- Handles cookie consent automatically before assertions.

## 💻 Browsers covered

- Chromium (Google Chrome)
- Firefox
- Webkit (Safari)
- Microsoft Edge

## 🛠️ Setup

1. **Install dependencies**

npm install --omit=optional

## ** Install Playwright browsers**

npx playwright install --with-deps

Or run for a specific browser:

npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
npx playwright test --project='Microsoft Edge'

** Actions workflow**
The workflow runs automatically every hour (via cron) and can also be triggered manually.
