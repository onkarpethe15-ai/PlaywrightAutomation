# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Ecom.spec.js >> to login into application 1
- Location: tests\Ecom.spec.js:6:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('div.cartSection h3')
Expected: "ZARA COAT 3"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('div.cartSection h3')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - generic [ref=e26]:
      - heading "My Cart" [level=1] [ref=e27]
      - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e30]
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | class EcomPage {
  3  |   constructor(page) {
  4  |     this.page = page;
  5  |     // this is list of locators
  6  | 
  7  |     this.emailinput = page.locator("#userEmail");
  8  |     this.passfiled = page.locator("#userPassword");
  9  |     this.submitbtn = page.locator("input#login");
  10 |     this.elements = page.locator("//div[@class='card-body']");
  11 |     this.addToCartbtn = page.locator("//button[contains(text(),' Cart ')]");
  12 |     this.cartnavbar = page.locator("//button[contains(text(),' Cart ')]");
  13 |     this.cartItem = page.locator("div.cartSection h3");
  14 |     this.checkoutbth = page.locator("//button[text()='Checkout']");
  15 |     this.cvvFiled = page.locator(
  16 |       "//div[contains(text(),'CVV')]/following-sibling::input",
  17 |     );
  18 |     this.nameFiled = page.locator(
  19 |       "//div[contains(text(),'Name on Card')]/following-sibling::input",
  20 |     );
  21 |     this.countryFiled = page.locator("//input[@placeholder='Select Country']");
  22 |     this.countryOpt = page.locator(
  23 |       "//button[@class='ta-item list-group-item ng-star-inserted'][2]",
  24 |     );
  25 |     this.placeorderbtn = page.locator("//a[contains(text(),'Place')]");
  26 |     this.purchaseidb = page.locator("label.ng-star-inserted");
  27 |     this.navorder = page.locator("//button[contains(text(),'ORDER')]");
  28 |     this.order_id = page.locator("tr.ng-star-inserted th");
  29 |   }
  30 | 
  31 |   // Methods
  32 |   async goto() {
  33 |     await this.page.goto("https://rahulshettyacademy.com/client");
  34 |   }
  35 |   async login(userNamne, passWord) {
  36 |     await this.emailinput.fill(userNamne);
  37 |     await this.passfiled.fill(passWord);
  38 |     await this.submitbtn.click();
  39 |   }
  40 | 
  41 |   async addToCart(itemtoadd) {
  42 |     const count = await this.elements.count();
  43 |     for (let i = 0; i < count; i++) {
  44 |       const texts = await this.elements.nth(i).locator("h5").textContent();
  45 |       console.log(texts);
  46 | 
  47 |       if (texts.trim() === itemtoadd) {
  48 |         await this.elements
  49 |           .nth(i)
  50 |           .locator("//button[contains(text(),' Add To Cart')]")
  51 |           .click();
  52 |         break;
  53 |       }
  54 |     }
  55 |     await this.cartnavbar.click();
  56 | 
> 57 |     await expect(this.cartItem).toHaveText(itemtoadd);
     |                                 ^ Error: expect(locator).toHaveText(expected) failed
  58 |   }
  59 | 
  60 |   async performCheckout() {
  61 |     await this.checkoutbth.click();
  62 |     await this.cvvFiled.fill("456");
  63 |     await this.nameFiled.fill("Onkar Deepakrao Pethe");
  64 | 
  65 |     await this.countryFiled.pressSequentially("Ind");
  66 | 
  67 |     await this.countryOpt
  68 |       // .waitFor()
  69 |       .click();
  70 | 
  71 |     await this.placeorderbtn.click();
  72 |     await this.page.waitForTimeout(10000);
  73 | 
  74 |     const purchaseid = await this.purchaseidb.textContent();
  75 |     const refactor_id = purchaseid.split("|");
  76 |     const trim_id = refactor_id[1].trim();
  77 |     console.log(trim_id);
  78 | 
  79 |     await this.navorder.click();
  80 | 
  81 |     await this.page.waitForSelector("tr.ng-star-inserted");
  82 |     const order_id = this.page.locator("tr.ng-star-inserted th");
  83 |     const ele_count = await order_id.count();
  84 |     for (let i = 0; i < ele_count; i++) {
  85 |       const temp = (await order_id.nth(i).textContent())?.trim();
  86 |       console.log(temp);
  87 |       if (trim_id === temp) {
  88 |         console.log(temp + " " + "Found in a list");
  89 |         break;
  90 |       }
  91 |     }
  92 |   }
  93 | }
  94 | 
  95 | export { EcomPage };
  96 | 
```