import { test as base } from "@playwright/test";
export const test = base.extend({
  TestData: async ({}, use) => {
    const data = {
      valueToChange: "150720",
      filepath: "C:\\Users\\asuso\\Downloads\\download.xlsx",
      valueUpdateOf: "Mango",
    };

    await use(data);
  },
  logger: async ({}, use) => {
    function logger(val) {
      console.log(val);
    }
    await use(logger);
  },
});
