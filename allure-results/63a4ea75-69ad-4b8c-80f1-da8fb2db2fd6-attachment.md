# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BookingApiTwo.spec.js >> Security testing test case
- Location: tests\BookingApiTwo.spec.js:53:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//h3[text()=\'Access Denied\']')

```

# Test source

```ts
  1  | import { test, expect, request } from "@playwright/test";
  2  | 
  3  | async function LoginAs(page, userName, passWord) {
  4  |   await page.goto("https://eventhub.rahulshettyacademy.com/");
  5  |   await page.getByPlaceholder("you@email.com").fill(userName);
  6  |   await page.getByLabel("Password").fill(passWord);
  7  |   await page.locator("#login-btn").click();
  8  | }
  9  | let data_id;
  10 | 
  11 | let api_token;
  12 | test("Test Login Api", async ({ request }) => {
  13 |   const response = await request.post(
  14 |     "https://api.eventhub.rahulshettyacademy.com/api/auth/login",
  15 |     {
  16 |       data: {
  17 |         email: "onkar.pethe@yahoo.com",
  18 |         password: "Panda@2025",
  19 |       },
  20 |     },
  21 |   );
  22 |   await expect(response.status()).toBe(200);
  23 |   const body = await response.json();
  24 |   console.log(body);
  25 |   api_token = await body.token;
  26 |   console.log(api_token);
  27 | });
  28 | 
  29 | test("create a new booking", async ({ request }) => {
  30 |   const response = await request.post(
  31 |     "https://api.eventhub.rahulshettyacademy.com/api/bookings",
  32 |     {
  33 |       headers: {
  34 |         Authorization: `Bearer ${api_token}`,
  35 |       },
  36 |       data: {
  37 |         eventId: 1,
  38 |         customerName: "Priya Sharma",
  39 |         customerEmail: "priya.sharma@email.com",
  40 |         customerPhone: "+91-9876543210",
  41 |         quantity: 1,
  42 |       },
  43 |     },
  44 |   );
  45 |   const body = await response.json();
  46 | 
  47 |   console.log(body);
  48 |   expect(response.status()).toBe(201);
  49 |   data_id = body.data.id;
  50 |   console.log(data_id);
  51 | });
  52 | 
  53 | test("Security testing test case", async ({ page }) => {
  54 |   await LoginAs(page, "onkar.pethe11@gmail.com", "Panda@2025");
  55 |   await page.waitForLoadState("networkidle");
  56 |   await page.goto(
  57 |     `https://eventhub.rahulshettyacademy.com/bookings/${data_id}`,
  58 |   );
  59 | 
  60 |   const msg_ele = page.locator("//h3[text()='Access Denied']");
  61 | 
> 62 |   expect(await msg_ele.textContent()).toMatch("Access Denied");
     |                        ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  63 | });
  64 | 
```