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

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - link "EventHub" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e9]: EventHub
      - generic [ref=e10]:
        - link "Home" [ref=e11] [cursor=pointer]:
          - /url: /
        - link "Events" [ref=e12] [cursor=pointer]:
          - /url: /events
        - link "My Bookings" [ref=e13] [cursor=pointer]:
          - /url: /bookings
        - link "API Docs" [ref=e14] [cursor=pointer]:
          - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - button "Admin" [ref=e16] [cursor=pointer]:
          - text: Admin
          - img [ref=e17]
        - generic [ref=e19]:
          - generic "onkar.pethe11@gmail.com" [ref=e20]
          - button "Logout" [ref=e21] [cursor=pointer]
  - main [ref=e22]:
    - generic [ref=e24]:
      - img [ref=e26]
      - heading "Booking not found" [level=3] [ref=e28]
      - paragraph [ref=e29]: This booking doesn't exist or may have been cancelled.
      - link "View My Bookings" [ref=e31] [cursor=pointer]:
        - /url: /bookings
        - button "View My Bookings" [ref=e32]
  - contentinfo [ref=e33]:
    - generic [ref=e34]:
      - generic [ref=e35]:
        - generic [ref=e36]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e37]
          - paragraph [ref=e38]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e39]:
          - heading "Popular Courses" [level=3] [ref=e40]
          - list [ref=e41]:
            - listitem [ref=e42]:
              - link "Selenium WebDriver with Java" [ref=e43] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e44]:
              - link "Playwright with JavaScript" [ref=e45] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e46]:
              - link "RestAssured API Testing" [ref=e47] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e48]:
              - link "Cypress End-to-End Testing" [ref=e49] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e50]:
              - link "Appium Mobile Testing" [ref=e51] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e52]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e53]
          - paragraph [ref=e54]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e55] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e56]:
          - heading "EventHub Practice App" [level=3] [ref=e57]
          - list [ref=e58]:
            - listitem [ref=e59]:
              - link "Browse Events" [ref=e60] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e61]:
              - link "My Bookings" [ref=e62] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e63]:
              - link "Manage Events" [ref=e64] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e65]:
              - link "API Documentation" [ref=e66] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e67]:
        - paragraph [ref=e68]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e69]:
          - link "rahulshettyacademy.com →" [ref=e70] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e71] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e72]
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