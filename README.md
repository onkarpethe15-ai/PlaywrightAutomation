# Playwright Automation Framework

Automation framework built using Playwright and JavaScript following the Page Object Model (POM) design pattern with support for Cross Browser Execution, Azure Playwright Workspaces and GitHub Actions CI/CD integration.

---

# Features

- Page Object Model (POM)
- End-to-End UI Automation
- Data Driven Testing using JSON
- Excel Read/Write Utility using ExcelJS
- Reusable Page Manager
- Custom Playwright Fixtures
- Cross Browser Execution
- Parallel Execution Support
- Azure Playwright Cloud Execution
- GitHub Actions CI/CD Integration
- HTML Reporting
- Allure Reporting
- Retry Mechanism
- Trace Collection
- Screenshot & Video Capture
- Modular Framework Structure

---

# Tech Stack

- Playwright
- JavaScript
- Node.js
- ExcelJS
- Azure Playwright Workspaces
- GitHub Actions
- Allure Reports

---

# Project Structure

```bash
Pages/
Tests/
Utils/
TestData/
.github/
└── workflows/
    └── playwright.yml
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move to project directory:

```bash
cd PlaywrightAutomation
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Framework Design

This framework follows the Page Object Model (POM) architecture where:

- Page classes contain locators and reusable methods
- Tests remain clean and readable
- Utilities handle reusable functionalities
- Test data is externalized
- Configuration is centralized

Benefits:

- Maintainability
- Scalability
- Reusability
- Readability

---

# Run Tests

## Execute All Tests

```bash
npx playwright test
```

## Run Tests in Headed Mode

```bash
npx playwright test --headed
```

## Run Specific Test File

```bash
npx playwright test tests/example.spec.js
```

## Run Tests in Parallel

```bash
npx playwright test --workers=4
```

---

# Cross Browser Execution

Framework supports Cross Browser Testing using Playwright Projects configuration.

## Supported Browsers

- Chromium
- Safari

## Browser Configuration

Configured inside `playwright.config.js`

```js
projects: [
  {
    name: "chromium",
    use: { ...devices["Desktop Chrome"] },
  },

  {
    name: "Safari",
    use: { ...devices["Desktop Safari"] },
  },
];
```

## Run Tests on All Browsers

```bash
npx playwright test
```

## Run Tests Only on Chromium

```bash
npx playwright test --project=chromium
```

## Run Tests Only on Safari

```bash
npx playwright test --project=Safari
```

---

# Retry Mechanism

Retries are enabled automatically for CI execution.

```js
retries: process.env.CI ? 2 : 0;
```

---

# Trace Collection

Trace collection is enabled for failed retries.

```js
trace: "on-first-retry";
```

This helps in debugging failed test executions.

---

# Reporting

## Open HTML Report

```bash
npx playwright show-report
```

## Generate Allure Report

```bash
npm run allure:generate
```

## Open Allure Report

```bash
npm run allure:open
```

## Run Tests + Generate + Open Allure Report

```bash
npm run allure:test
```

---

# Package Scripts

```json
"scripts": {
  "test": "playwright test",
  "allure:generate": "npx allure generate allure-results --clean -o allure-report",
  "allure:open": "npx allure open allure-report",
  "allure:test": "playwright test && npx allure generate allure-results --clean -o allure-report && npx allure open allure-report"
}
```

---

# Excel Utility Support

Framework supports Excel operations using ExcelJS.

Features:

- Read test data from Excel
- Write execution results
- Dynamic test data handling

Package Used:

```json
"exceljs": "^4.4.0"
```

---

# Azure Playwright Workspaces Integration

Framework supports remote cloud execution using Azure Playwright Workspaces.

## Azure Features

- Cloud Based Browser Execution
- Parallel Remote Execution
- Centralized Reporting
- Video & Trace Uploads
- Scalable Infrastructure

---

# Azure Local Execution Setup

## Install Azure Playwright Package

```bash
npm init @azure/playwright@latest
```

## Login to Azure

```bash
az login
```

## Set Playwright Service URL

PowerShell:

```powershell
$env:PLAYWRIGHT_SERVICE_URL="wss://eastus.api.playwright.microsoft.com/playwrightworkspaces/<workspace-id>/browsers"
```

## Execute Tests on Azure

```bash
npx playwright test -c playwright.service.config.js --workers=4
```

---

# Azure Storage Permission Setup

Assign Storage Blob Data Contributor role:

```bash
az role assignment create --assignee "<object-id>" --role "Storage Blob Data Contributor" --scope "/subscriptions/<subscription-id>/resourceGroups/<resource-group>/providers/Microsoft.Storage/storageAccounts/<storage-account>"
```

---

# GitHub Actions CI/CD Integration

Framework supports automated cloud execution using GitHub Actions.

Workflow Location:

```bash
.github/workflows/playwright.yml
```

---

# GitHub Actions Features

- Automatic Trigger on Push
- Pull Request Validation
- Azure Authentication
- Remote Azure Playwright Execution
- Artifact Upload
- HTML Report Upload

---

# GitHub Secrets Configuration

## Create Repository Secret

Name:

```text
AZURE_CREDENTIALS
```

Value:

- Azure Service Principal JSON

## Create Repository Variable

Name:

```text
PLAYWRIGHT_SERVICE_URL
```

Value:

```text
wss://eastus.api.playwright.microsoft.com/playwrightworkspaces/<workspace-id>/browsers
```

---

# GitHub Actions Execution Flow

```text
GitHub Push
      ↓
GitHub Actions Trigger
      ↓
Azure Login
      ↓
Playwright Remote Execution
      ↓
Azure Reporting & Artifact Upload
      ↓
HTML Report Upload
```

---

# Current Implementations

- Login Automation
- Cart & Checkout Flow
- Order Validation
- File Upload & Download Testing
- Excel Data Handling
- Cross Browser Testing
- Azure Cloud Execution
- GitHub Actions CI/CD

---

# Future Enhancements

- AI Agent Integration for Intelligent Test Execution
- AI Powered Self-Healing Framework Capabilities
- Framework Migration from JavaScript to TypeScript
- Advanced Reporting Dashboard
- API Testing Integration
- Docker Integration
- Jenkins Integration
- Database Validation
- Visual Regression Testing
- Slack Notifications

---

# Author

## Onkar Pethe

Automation Test Engineer passionate about building scalable automation frameworks and cloud-based test execution pipelines using modern automation tools.
