# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EventBook.spec.js >> Evenet booking test
- Location: tests\EventBook.spec.js:3:5

# Error details

```
Error: expect(received).toMatch(expected)

Expected substring: "699"
Received string:    "700"
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - link "EventHub" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e9]: EventHub
      - generic [ref=e10]:
        - link "Home" [ref=e11] [cursor=pointer]:
          - /url: /
        - link "Events" [active] [ref=e12] [cursor=pointer]:
          - /url: /events
        - link "My Bookings" [ref=e13] [cursor=pointer]:
          - /url: /bookings
        - link "API Docs" [ref=e14] [cursor=pointer]:
          - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - button "Admin" [ref=e16] [cursor=pointer]:
          - text: Admin
          - img [ref=e17]
        - generic [ref=e19]:
          - generic "mailtonkar@gmail.com" [ref=e20]
          - button "Logout" [ref=e21] [cursor=pointer]
  - main [ref=e22]:
    - generic [ref=e23]:
      - generic [ref=e24]:
        - heading "Upcoming Events" [level=1] [ref=e25]
        - paragraph [ref=e26]: Find your next unforgettable experience
      - generic [ref=e28]:
        - textbox "Search events, venues…" [ref=e30]
        - combobox [ref=e32] [cursor=pointer]:
          - option "All Categories" [selected]
          - option "🎙 Conference"
          - option "🎵 Concert"
          - option "⚽ Sports"
          - option "🛠 Workshop"
          - option "🎉 Festival"
        - combobox [ref=e34] [cursor=pointer]:
          - option "All Cities" [selected]
          - option "Mumbai"
          - option "Bangalore"
          - option "Delhi"
          - option "Hyderabad"
          - option "Chennai"
          - option "Pune"
      - generic [ref=e35]:
        - img [ref=e36]
        - generic [ref=e38]:
          - text: Your sandbox holds up to
          - strong [ref=e39]: 9 bookings
          - text: and you can create up to
          - strong [ref=e40]: 6 custom events
          - text: . When either limit is reached, the oldest entry is automatically replaced.
      - generic [ref=e41]:
        - article [ref=e42]:
          - generic [ref=e43]:
            - img "Dilli Diwali Mela" [ref=e44]
            - generic [ref=e46]: Festival
            - generic [ref=e47]: Featured
          - generic [ref=e48]:
            - link "Dilli Diwali Mela" [ref=e49] [cursor=pointer]:
              - /url: /events/3
              - heading "Dilli Diwali Mela" [level=3] [ref=e50]
            - generic [ref=e51]:
              - generic [ref=e52]:
                - img [ref=e53]
                - generic [ref=e55]: Tue, 20 Oct
              - generic [ref=e56]:
                - img [ref=e57]
                - generic [ref=e59]: Pragati Maidan Exhibition Grounds, Delhi
            - generic [ref=e60]:
              - generic [ref=e61]:
                - paragraph [ref=e62]: $300
                - generic [ref=e63]: 9984 seats available
              - link "Book Now" [ref=e64] [cursor=pointer]:
                - /url: /events/3
        - article [ref=e65]:
          - generic [ref=e66]:
            - img "Hollywood Monsoon Night — Los Angeles" [ref=e67]
            - generic [ref=e69]: Concert
            - generic [ref=e70]: Featured
          - generic [ref=e71]:
            - link "Hollywood Monsoon Night — Los Angeles" [ref=e72] [cursor=pointer]:
              - /url: /events/2
              - heading "Hollywood Monsoon Night — Los Angeles" [level=3] [ref=e73]
            - generic [ref=e74]:
              - generic [ref=e75]:
                - img [ref=e76]
                - generic [ref=e78]: Sun, 12 Jul
              - generic [ref=e79]:
                - img [ref=e80]
                - generic [ref=e82]: Dome, NSCI SVP Stadium, Worli, Los Angeles
            - generic [ref=e83]:
              - generic [ref=e84]:
                - paragraph [ref=e85]: $2,500
                - generic [ref=e86]: 3000 seats available
              - link "Book Now" [ref=e87] [cursor=pointer]:
                - /url: /events/2
        - article [ref=e88]:
          - generic [ref=e89]:
            - img "World Tech Summit" [ref=e90]
            - generic [ref=e92]: Conference
            - generic [ref=e93]: Featured
          - generic [ref=e94]:
            - link "World Tech Summit" [ref=e95] [cursor=pointer]:
              - /url: /events/1
              - heading "World Tech Summit" [level=3] [ref=e96]
            - generic [ref=e97]:
              - generic [ref=e98]:
                - img [ref=e99]
                - generic [ref=e101]: Sat, 18 Apr
              - generic [ref=e102]:
                - img [ref=e103]
                - generic [ref=e105]: Hyderabad, Hitech city, Hyderabad
            - generic [ref=e106]:
              - generic [ref=e107]:
                - paragraph [ref=e108]: $1,500
                - generic [ref=e109]: 500 seats available
              - link "Book Now" [ref=e110] [cursor=pointer]:
                - /url: /events/1
        - article [ref=e111]:
          - generic [ref=e112]:
            - img [ref=e114]
            - generic [ref=e117]: Conference
          - generic [ref=e118]:
            - link "pinno ki tuk tuk 1778693903789" [ref=e119] [cursor=pointer]:
              - /url: /events/34333
              - heading "pinno ki tuk tuk 1778693903789" [level=3] [ref=e120]
            - generic [ref=e121]:
              - generic [ref=e122]:
                - img [ref=e123]
                - generic [ref=e125]: Fri, 31 Dec
              - generic [ref=e126]:
                - img [ref=e127]
                - generic [ref=e129]: New Sneh Naga,EXT,47, binno ki apni duniya
            - generic [ref=e130]:
              - generic [ref=e131]:
                - paragraph [ref=e132]: $20
                - generic [ref=e133]: 699 seats available
              - link "Book Now" [ref=e134] [cursor=pointer]:
                - /url: /events/34333
        - article [ref=e135]:
          - generic [ref=e136]:
            - img [ref=e138]
            - generic [ref=e141]: Conference
          - generic [ref=e142]:
            - link "pinno ki tuk tuk 1778693397684" [ref=e143] [cursor=pointer]:
              - /url: /events/34331
              - heading "pinno ki tuk tuk 1778693397684" [level=3] [ref=e144]
            - generic [ref=e145]:
              - generic [ref=e146]:
                - img [ref=e147]
                - generic [ref=e149]: Fri, 31 Dec
              - generic [ref=e150]:
                - img [ref=e151]
                - generic [ref=e153]: New Sneh Naga,EXT,47, binno ki apni duniya
            - generic [ref=e154]:
              - generic [ref=e155]:
                - paragraph [ref=e156]: $20
                - generic [ref=e157]: 700 seats available
              - link "Book Now" [ref=e158] [cursor=pointer]:
                - /url: /events/34331
        - article [ref=e159]:
          - generic [ref=e160]:
            - img [ref=e162]
            - generic [ref=e165]: Conference
          - generic [ref=e166]:
            - link "pinno ki tuk tuk 1778688885814" [ref=e167] [cursor=pointer]:
              - /url: /events/34302
              - heading "pinno ki tuk tuk 1778688885814" [level=3] [ref=e168]
            - generic [ref=e169]:
              - generic [ref=e170]:
                - img [ref=e171]
                - generic [ref=e173]: Fri, 31 Dec
              - generic [ref=e174]:
                - img [ref=e175]
                - generic [ref=e177]: New Sneh Naga,EXT,47, binno ki apni duniya
            - generic [ref=e178]:
              - generic [ref=e179]:
                - paragraph [ref=e180]: $20
                - generic [ref=e181]: 700 seats available
              - link "Book Now" [ref=e182] [cursor=pointer]:
                - /url: /events/34302
        - article [ref=e183]:
          - generic [ref=e184]:
            - img [ref=e186]
            - generic [ref=e189]: Conference
          - generic [ref=e190]:
            - link "pinno ki tuk tuk 1778688855351" [ref=e191] [cursor=pointer]:
              - /url: /events/34301
              - heading "pinno ki tuk tuk 1778688855351" [level=3] [ref=e192]
            - generic [ref=e193]:
              - generic [ref=e194]:
                - img [ref=e195]
                - generic [ref=e197]: Fri, 31 Dec
              - generic [ref=e198]:
                - img [ref=e199]
                - generic [ref=e201]: New Sneh Naga,EXT,47, binno ki apni duniya
            - generic [ref=e202]:
              - generic [ref=e203]:
                - paragraph [ref=e204]: $20
                - generic [ref=e205]: 700 seats available
              - link "Book Now" [ref=e206] [cursor=pointer]:
                - /url: /events/34301
        - article [ref=e207]:
          - generic [ref=e208]:
            - img [ref=e210]
            - generic [ref=e213]: Conference
          - generic [ref=e214]:
            - link "pinno ki tuk tuk 1778688454402" [ref=e215] [cursor=pointer]:
              - /url: /events/34300
              - heading "pinno ki tuk tuk 1778688454402" [level=3] [ref=e216]
            - generic [ref=e217]:
              - generic [ref=e218]:
                - img [ref=e219]
                - generic [ref=e221]: Fri, 31 Dec
              - generic [ref=e222]:
                - img [ref=e223]
                - generic [ref=e225]: New Sneh Naga,EXT,47, binno ki apni duniya
            - generic [ref=e226]:
              - generic [ref=e227]:
                - paragraph [ref=e228]: $20
                - generic [ref=e229]: 700 seats available
              - link "Book Now" [ref=e230] [cursor=pointer]:
                - /url: /events/34300
        - article [ref=e231]:
          - generic [ref=e232]:
            - img [ref=e234]
            - generic [ref=e237]: Conference
          - generic [ref=e238]:
            - link "pinno ki tuk tuk 1778611438484" [ref=e239] [cursor=pointer]:
              - /url: /events/33709
              - heading "pinno ki tuk tuk 1778611438484" [level=3] [ref=e240]
            - generic [ref=e241]:
              - generic [ref=e242]:
                - img [ref=e243]
                - generic [ref=e245]: Fri, 31 Dec
              - generic [ref=e246]:
                - img [ref=e247]
                - generic [ref=e249]: New Sneh Naga,EXT,47, binno ki apni duniya
            - generic [ref=e250]:
              - generic [ref=e251]:
                - paragraph [ref=e252]: $20
                - generic [ref=e253]: 700 seats available
              - link "Book Now" [ref=e254] [cursor=pointer]:
                - /url: /events/33709
      - link "Add New Event" [ref=e256] [cursor=pointer]:
        - /url: /admin/events
        - button "Add New Event" [ref=e257]:
          - img [ref=e258]
          - text: Add New Event
  - contentinfo [ref=e260]:
    - generic [ref=e261]:
      - generic [ref=e262]:
        - generic [ref=e263]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e264]
          - paragraph [ref=e265]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e266]:
          - heading "Popular Courses" [level=3] [ref=e267]
          - list [ref=e268]:
            - listitem [ref=e269]:
              - link "Selenium WebDriver with Java" [ref=e270] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e271]:
              - link "Playwright with JavaScript" [ref=e272] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e273]:
              - link "RestAssured API Testing" [ref=e274] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e275]:
              - link "Cypress End-to-End Testing" [ref=e276] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e277]:
              - link "Appium Mobile Testing" [ref=e278] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e279]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e280]
          - paragraph [ref=e281]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e282] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e283]:
          - heading "EventHub Practice App" [level=3] [ref=e284]
          - list [ref=e285]:
            - listitem [ref=e286]:
              - link "Browse Events" [ref=e287] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e288]:
              - link "My Bookings" [ref=e289] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e290]:
              - link "Manage Events" [ref=e291] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e292]:
              - link "API Documentation" [ref=e293] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e294]:
        - paragraph [ref=e295]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e296]:
          - link "rahulshettyacademy.com →" [ref=e297] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e298] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - generic [ref=e300]:
    - generic [ref=e302]: ✓
    - paragraph [ref=e303]: Event created!
    - button "Dismiss" [ref=e304] [cursor=pointer]: ×
  - alert [ref=e305]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("Evenet booking test", async ({ page }) => {
  4  |   async function login(page) {
  5  |     await page.goto("https://eventhub.rahulshettyacademy.com");
  6  |     await page.getByPlaceholder("you@email.com").fill("mailtonkar@gmail.com");
  7  |     await page.getByLabel("password").fill("Panda@2025");
  8  |     await page.locator("#login-btn").click();
  9  |   }
  10 |   await login(page);
  11 | 
  12 |   const link_text = page.getByText("Browse Events →");
  13 |   await expect(await link_text).toBeVisible();
  14 |   await page.getByRole("button", { name: "Admin" }).click();
  15 |   await page.locator("//a[text()='Manage Events']").nth(0).click();
  16 |   const title = `pinno ki tuk tuk ${Date.now()}`;
  17 |   await page.locator("input#event-title-input").fill(title);
  18 |   await page.getByLabel("city").fill("binno ki apni duniya");
  19 |   await page.getByLabel("venue").fill("New Sneh Naga,EXT,47");
  20 |   // datetime-local input — located by label
  21 |   await page.getByLabel("Event Date & Time").fill("2027-12-31T10:00");
  22 |   await page.locator("input[id='price-($)']").fill("20");
  23 |   await page.locator("input[id='total-seats']").fill("700");
  24 |   await page.locator("#add-event-btn").click();
  25 |   await expect(page.getByText("Event created!")).toBeVisible();
  26 | 
  27 |   await page.getByTestId("nav-events").click();
  28 |   const event_cards = page.getByTestId("event-card");
  29 |   await expect(await event_cards.first()).toBeVisible();
  30 |   await expect(page.getByText(title)).toBeVisible({ timeout: 5000 });
  31 | 
  32 |   const sit_list = await page
  33 |     .locator(
  34 |       `//h3[text()="${title}"]/parent::a/following-sibling::div[2]/div/span`,
  35 |     )
  36 |     .textContent();
  37 | 
  38 |   const sitcount = Number(sit_list.split(" ")[0]);
  39 |   console.log(sitcount);
  40 | 
  41 |   await page
  42 |     .locator(`//h3[text()='${title}']/parent::a/following-sibling::div[2]/a`)
  43 |     .click();
  44 | 
  45 |   expect(await page.locator("#ticket-count").textContent()).toMatch("1");
  46 |   await page.getByLabel("Full Name").fill("jhon philips");
  47 |   await page.locator("#customer-email").fill("philips@15gmail.com");
  48 |   await page.getByPlaceholder("+91 98765 43210").fill("9325711274");
  49 |   await page.locator(".confirm-booking-btn").click();
  50 |   const bookingref = page.locator(".booking-ref").first();
  51 |   await expect(bookingref).toBeVisible();
  52 |   const bookingreno = await bookingref.textContent();
  53 |   const trim_bookrefno = bookingreno.trim();
  54 |   console.log(trim_bookrefno);
  55 |   await page.locator("#nav-bookings").click();
  56 |   await expect(page).toHaveURL(
  57 |     "https://eventhub.rahulshettyacademy.com/bookings",
  58 |   );
  59 |   const booking_card = page.locator("#booking-card").first();
  60 |   await expect(booking_card).toBeVisible();
  61 | 
  62 |   await expect(
  63 |     await page.locator(".booking-ref").filter({ hasText: trim_bookrefno }),
  64 |   ).toBeVisible();
  65 | 
  66 |   await expect(
  67 |     await page
  68 |       .locator(
  69 |         `//span[text()='${trim_bookrefno}']/parent::div/following-sibling::h3`,
  70 |       )
  71 |       .textContent(),
  72 |   ).toMatch(title);
  73 | 
  74 |   await page.locator("//a[text()='Events']").click();
  75 | 
  76 |   const event_cards_t = page.getByTestId("event-card").first();
  77 |   await expect(event_cards_t).toBeVisible();
  78 |   await expect(page.getByText(title)).toBeVisible({ timeout: 5000 });
  79 |   const sit_list_t = await page
  80 |     .locator(
  81 |       `//h3[text()="${title}"]/parent::a/following-sibling::div[2]/div/span`,
  82 |     )
  83 |     .textContent();
  84 |   const sitcount_two = await Number(sit_list_t.split(" ")[0]);
> 85 |   await expect(sitcount_two.toString()).toMatch((sitcount - 1).toString());
     |                                         ^ Error: expect(received).toMatch(expected)
  86 | });
  87 | 
```